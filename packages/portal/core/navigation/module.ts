/*
 * Copyright (c) 2024.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import type { Store } from '@authup/client-web-kit';
import type { PolicyIdentity } from '@authup/kit';
import { PageMetaKey, PageNavigationTopID } from '@dnpm-dip/core';
import type { NavigationItem, NavigationProvider } from '@vuecs/navigation';
import { flattenNestedNavigationItems } from '@vuecs/navigation';
import type { RouteLocationNormalized } from 'vue-router';

export class Navigation implements NavigationProvider {
    protected topElements: NavigationItem[];

    protected sideElements : Record<string, NavigationItem[]>;

    protected store : Store;

    protected initialized: boolean;

    constructor(store: Store) {
        this.store = store;
        this.initialized = false;

        this.topElements = [
            {
                id: PageNavigationTopID.DEFAULT,
                name: 'Home',
                url: '/',
                rootLink: true,
            },
        ];

        this.sideElements = {
            default: [
                {
                    id: 'default',
                    name: 'Home',
                    icon: 'fa fa-home',
                    url: '/',
                    rootLink: true,
                    [PageMetaKey.REQUIRED_LOGGED_IN]: true,
                },
                {
                    name: 'Login',
                    type: 'link',
                    url: '/login',
                    icon: 'fas fa-sign',
                    [PageMetaKey.REQUIRED_LOGGED_OUT]: true,
                },
                {
                    name: 'Logout',
                    type: 'link',
                    url: '/logout',
                    icon: 'fa fa-power-off',
                    [PageMetaKey.REQUIRED_LOGGED_IN]: true,
                },
            ],
        };
    }

    async initialize(): Promise<void> {
        if (this.initialized) {
            return;
        }

        this.initialized = true;

        try {
            await this.store.resolve();
        } catch (e) {
            // do nothing :)
        }
    }

    addTopElement(element: NavigationItem) {
        this.topElements.push(element);
    }

    addSideElements(id: string, elements: NavigationItem[]) {
        this.sideElements[id] = elements;
    }

    async getItems(tier: number, items: NavigationItem[]) {
        if (tier > 1) {
            return undefined;
        }

        if (tier === 0) {
            return this.reduce(this.topElements);
        }

        let component : NavigationItem;
        if (items.length > 0) {
            [component] = items;
        } else {
            component = { id: 'default' };
        }

        return this.reduce(this.sideElements[component.id || 'default'] || []);
    }

    async getItemsActiveByRoute(route: RouteLocationNormalized) {
        const {
            [PageMetaKey.NAVIGATION_TOP_ID]: topId,
            [PageMetaKey.NAVIGATION_SIDE_ID]: sideId,
        } = route.meta;

        const url = route.fullPath;

        const keys = Object.keys(this.sideElements);
        for (let i = 0; i < keys.length; i++) {
            const items = flattenNestedNavigationItems(this.sideElements[keys[i]])
                .sort((a: NavigationItem, b: NavigationItem) => {
                    if (a.root && !b.root) {
                        return 1;
                    }

                    if (!a.root && b.root) {
                        return -1;
                    }

                    return (b.url?.length ?? 0) - (a.url?.length ?? 0);
                })
                .filter((item) => {
                    if (sideId) {
                        if (item.id === sideId) {
                            return true;
                        }
                    }

                    if (!item.url) return false;

                    if (item.rootLink) {
                        return url === item.url;
                    }

                    return url === item.url || url.startsWith(item.url);
                });

            if (items.length === 0) {
                continue;
            }

            const topIndex = this.topElements.findIndex(
                (el) => (topId && topId === el.id) || el.id === keys[i],
            );

            if (topIndex === -1) {
                continue;
            }

            return [
                this.topElements[topIndex],
                items[0],
            ];
        }

        const topIndex = this.topElements.findIndex(
            (el) => topId && topId === el.id,
        );
        if (topIndex !== -1) {
            return [
                this.topElements[topIndex],
            ];
        }

        return [];
    }

    protected async reduce(items: NavigationItem[]) : Promise<NavigationItem[]> {
        await this.initialize();

        const promises = items.map(
            (item) => this.reduceItem(item),
        );

        const output = await Promise.all(promises);

        return output.filter((item) => !!item);
    }

    protected async reduceItem(item: NavigationItem) : Promise<NavigationItem | undefined> {
        const { loggedIn } = this.store;
        let identity: PolicyIdentity | undefined;
        if (this.store.userId) {
            identity = {
                type: 'user',
                id: this.store.userId,
            };
        }

        if (
            typeof item.requireLoggedIn !== 'undefined' &&
            item.requireLoggedIn &&
            !loggedIn
        ) {
            return undefined;
        }

        if (
            typeof item.requireLoggedOut !== 'undefined' &&
            item.requireLoggedOut &&
            loggedIn
        ) {
            return undefined;
        }

        let canPass = true;

        if (item.requirePermissions) {
            let permissions : string[] = [];
            if (Array.isArray(item.requirePermissions)) {
                permissions = item.requirePermissions.filter((item) => item);
            } else if (typeof item.requirePermissions === 'string') {
                permissions = [item.requirePermissions];
            }

            if (permissions.length > 0) {
                try {
                    await this.store.permissionChecker.preCheckOneOf({
                        name: permissions,
                        data: {
                            identity,
                        },
                    });
                } catch (e) {
                    canPass = false;
                }
            }
        }

        if (canPass) {
            if (item.children) {
                item.children = await this.reduce(item.children);
            }

            return item;
        }

        return undefined;
    }
}

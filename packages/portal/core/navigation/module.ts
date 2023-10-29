import { PageMetaKey } from '@dnpm-dip/core';
import { findNavigationElementForTier, flattenNestedNavigationElements } from '@vue-layout/navigation';
import type { NavigationElement, NavigationProvider } from '@vue-layout/navigation';

export class Navigation implements NavigationProvider {
    protected topElements: NavigationElement[];

    protected sideElements : Record<string, NavigationElement[]>;

    constructor() {
        this.topElements = [{
            id: 'default',
            name: 'Home',
            url: '/',
            rootLink: true,
        }];

        this.sideElements = {
            default: [
                {
                    id: 'default',
                    name: 'Home',
                    icon: 'fa fa-home',
                    url: '/',
                    rootLink: true,
                },
            ],
        };
    }

    addTopElement(element: NavigationElement) {
        this.topElements.push(element);
    }

    addSideElements(id: string, elements: NavigationElement[]) {
        this.sideElements[id] = elements;
    }

    async getElements(tier: number, items: NavigationElement[]): Promise<NavigationElement[]> {
        if ([0, 1].indexOf(tier) === -1) {
            return [];
        }

        if (tier === 0) {
            return this.topElements;
        }

        const component: NavigationElement = findNavigationElementForTier(items, 0) || { id: 'default' };
        return this.sideElements[component.id || 'default'] || [];
    }

    async getElementsActive(url: string): Promise<NavigationElement[]> {
        const route = useRoute();
        const {
            [PageMetaKey.NAVIGATION_TOP_ID]: topId,
            [PageMetaKey.NAVIGATION_SIDE_ID]: sideId,
        } = route.meta;

        const keys = Object.keys(this.sideElements);
        for (let i = 0; i < keys.length; i++) {
            const items = flattenNestedNavigationElements(this.sideElements[keys[i]])
                .sort((a: NavigationElement, b: NavigationElement) => (b.url?.length ?? 0) - (a.url?.length ?? 0))
                .filter((item) => {
                    if (sideId && item.id === sideId) {
                        return true;
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

    async hasTier(tier: number): Promise<boolean> {
        return Promise.resolve([0, 1].indexOf(tier) !== -1);
    }
}

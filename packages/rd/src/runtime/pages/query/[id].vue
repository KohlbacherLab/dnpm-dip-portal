<script lang="ts">
import { PageMetaKey } from '@dnpm-dip/core';
import type { Ref } from 'vue';
import { ref } from 'vue';
import {
    createError,
    defineNuxtComponent,
    definePageMeta,
    navigateTo,
    useRoute,
} from '#imports';
import { injectHTTPClient } from '../../core';
import type { QuerySession } from '../../domains';

export default defineNuxtComponent({
    async setup() {
        definePageMeta({
            [PageMetaKey.NAVIGATION_TOP_ID]: 'rd',
            [PageMetaKey.NAVIGATION_SIDE_ID]: 'rd-search',
        });

        const api = injectHTTPClient();
        const route = useRoute();

        const entity = ref(null) as unknown as Ref<QuerySession>;

        if (typeof route.params.id !== 'string') {
            await navigateTo({ path: '/rd/' });
            throw createError({});
        }

        try {
            entity.value = await api.query.getOne(route.params.id);
        } catch (e) {
            await navigateTo({ path: '/rd/' });
            throw createError({});
        }

        const handleUpdated = (data: QuerySession) => {
            const keys = Object.keys(data);
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i] as keyof QuerySession;
                (entity.value as QuerySession)[key] = data[key];
            }
        };

        return {
            entity,
            handleUpdated,
        };
    },
});
</script>
<template>
    <template v-if="entity">
        <NuxtPage
            :entity="entity"
            @updated="handleUpdated"
        />
    </template>
</template>

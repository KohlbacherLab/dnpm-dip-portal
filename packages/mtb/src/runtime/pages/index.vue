<script lang="ts">
import { PageMetaKey, useToast } from '@dnpm-dip/core';
import type { ClientError } from 'hapic';
import { defineNuxtComponent, definePageMeta, navigateTo } from '#imports';
import SearchForm from '../components/core/MSearchForm.vue';
import { PermissionName, type QuerySession } from '../domains';

export default defineNuxtComponent({
    components: {
        SearchForm,
    },
    setup() {
        definePageMeta({
            [PageMetaKey.NAVIGATION_TOP_ID]: 'mtb',
            [PageMetaKey.NAVIGATION_SIDE_ID]: 'mtb-search',
            [PageMetaKey.REQUIRED_PERMISSIONS]: [
                PermissionName.QUERY_SUBMIT,
            ],
        });

        const { showError } = useToast();

        const handleFailed = (e: ClientError) => {
            showError(e);
        };

        const handleSubmitted = async (data : QuerySession) => {
            await navigateTo({ path: `/mtb/query/${data.id}/summary` });
        };

        return {
            handleFailed,
            handleSubmitted,
        };
    },
});
</script>

<template>
    <div class="">
        <h1 class="title no-border mb-3">
            <i class="fa fa-search" /> Suche
        </h1>
        <SearchForm
            @query-created="handleSubmitted"
            @failed="handleFailed"
        />
    </div>
</template>

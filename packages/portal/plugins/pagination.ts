import bootstrap from '@vue-layout/preset-bootstrap-v5';
import fontAwesome from '@vue-layout/preset-font-awesome';

import install from '@vue-layout/pagination';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin({
    enforce: 'pre',
    async setup(nuxt) {
        nuxt.vueApp.use(install, {
            presets: {
                bootstrap,
                fontAwesome,
            },
            defaults: {
                pagination: {
                    class: 'pagination',
                    itemClass: 'page-item',
                },
            },
        });
    },
});

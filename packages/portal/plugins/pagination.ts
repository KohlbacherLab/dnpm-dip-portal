import bootstrap from '@vuecs/preset-bootstrap-v5';
import fontAwesome from '@vuecs/preset-font-awesome';

import install from '@vuecs/pagination';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin({
    async setup(nuxt) {
        nuxt.vueApp.use(install, {
            storeManager: {
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
            },
        });
    },
});

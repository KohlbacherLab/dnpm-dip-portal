import type { URLQueryRecord } from '@dnpm-dip/core';
import {
    createResourceRecordManager,
} from '@dnpm-dip/core';
import type { PropType } from 'vue';
import { defineComponent, toRef } from 'vue';
import { injectHTTPClient } from '../../core';

export default defineComponent({
    props: {
        queryId: {
            type: String,
            required: true,
        },
        queryRecord: {
            type: Object as PropType<URLQueryRecord>,
        },
        lazy: {
            type: Boolean,
            default: false,
        },
    },
    async setup(props, setup) {
        const apiClient = injectHTTPClient();
        const id = toRef(props, 'queryId');

        const manager = createResourceRecordManager({
            load: (id) => apiClient.query.getSummary(id, props.queryRecord),
            slots: setup.slots,
            id,
        });

        setup.expose({
            load: (reset?: boolean) => manager.load(reset),
        });

        if (props.lazy) {
            Promise.resolve()
                .then(() => manager.load());
        } else {
            await manager.load();
        }

        return () => manager.render();
    },
});

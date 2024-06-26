<script lang="ts">
import { BFormTag } from 'bootstrap-vue-next';
import type { PropType } from 'vue';
import {
    defineComponent, ref, toRef, watch,
} from 'vue';

type ColorVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | null;
type Tag = {
    id: string | number,
    value: string
};
export default defineComponent({
    components: {
        BFormTag,
    },
    props: {
        modelValue: {
            type: Array as PropType<Tag[]>,
        },
        items: {
            type: Array as PropType<Tag[]>,
        },
        tagClass: {
            type: String as PropType<any>,
        },
        tagPills: {
            type: Boolean,
        },
        tagValidator: {
            type: Function as PropType<(t: string) => boolean>,
        },
        tagVariant: {
            type: String as PropType<ColorVariant>,
        },
    },
    emits: ['update:modelValue', 'deleted'],
    setup(props, { emit }) {
        const tags = ref<Tag[]>([]);

        const modelValue = toRef(props, 'modelValue');
        const value = toRef(props, 'items');

        const reset = () => {
            if (props.modelValue) {
                tags.value = props.modelValue;
            }

            if (props.items) {
                tags.value = props.items;
            }
        };

        reset();

        watch(modelValue, () => {
            reset();
        }, { deep: true });

        watch(value, () => {
            reset();
        }, { deep: true });

        const drop = (value: string) => {
            const index = tags.value.findIndex((el) => el.value === value);
            if (index !== -1) {
                emit('deleted', tags.value[index]);

                tags.value.splice(index, 1);
            }

            emit('update:modelValue', tags);
        };

        return {
            tags,
            drop,
        };
    },
});
</script>
<template>
    <slot>
        <ul class="list-unstyled mb-0 d-flex flex-wrap align-items-center">
            <template
                v-for="(item) in tags"
                :key="item.id"
            >
                <slot
                    name="tag"
                    :tag="item.id"
                    :tag-class="tagClass"
                    :tag-variant="tagVariant"
                    :tag-pills="tagPills"
                    :remove-tag="drop"
                >
                    <BFormTag
                        :key="item.id"
                        :class="tagClass"
                        tag="li"
                        :variant="tagVariant"
                        :pill="tagPills"
                        @remove="drop"
                    >
                        {{ item.value }}
                    </BFormTag>
                </slot>
            </template>
        </ul>
    </slot>
</template>

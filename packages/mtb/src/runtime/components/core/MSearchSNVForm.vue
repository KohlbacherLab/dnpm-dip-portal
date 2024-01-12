<script lang="ts">
import {
    type CodeSystemConcept,
    DCodeSystem, DCollectionTransform, DFormSelectSearch, DTags, type ValueSetCoding, transformConceptToFormSelectOption,
} from '@dnpm-dip/core';
import {
    type PropType, computed, defineComponent, reactive, toRef, watch,
} from 'vue';
import type { QuerySNVCriteria } from '../../domains';

export default defineComponent({
    components: {
        DTags, DCodeSystem, DCollectionTransform, DFormSelectSearch,
    },
    props: {
        entity: Object as PropType<QuerySNVCriteria<string>>,
    },
    setup(props, { emit }) {
        const entityRef = toRef(props, 'entity');
        const form = reactive<QuerySNVCriteria<string>>({
            gene: '',
            dnaChange: '',
            proteinChange: '',
        });

        const init = () => {
            if (!props.entity) return;

            form.gene = props.entity?.gene || '';
            form.dnaChange = props.entity?.dnaChange || '';
            form.proteinChange = props.entity?.proteinChange || '';
        };

        init();

        watch(entityRef, () => {
            init();
        });

        const transformConcepts = (
            concept: CodeSystemConcept,
        ) => transformConceptToFormSelectOption(concept);

        const isEditing = computed(() => !!entityRef.value);
        const submit = () => {
            emit('updated', {
                gene: form.gene,
                dnaChange: form.dnaChange,
                proteinChange: form.proteinChange,
            } satisfies QuerySNVCriteria<string>);
        };

        return {
            form,
            transformConcepts,
            isEditing,
            submit,
        };
    },
});
</script>
<template>
    <div class="form-group">
        <label>Gene</label>
        <DCodeSystem
            :code="'https://www.genenames.org/'"
            :lazy-load="true"
        >
            <template #default="{ data }">
                <DCollectionTransform
                    :items="data.concepts"
                    :transform="transformConcepts"
                >
                    <template #default="options">
                        <DFormSelectSearch
                            v-model="form.gene"
                            :options="options"
                            placeholder="HGNC"
                        >
                            <template #selected="{ items, toggle }">
                                <DTags
                                    :items="items"
                                    tag-variant="dark"
                                    @deleted="toggle"
                                />
                            </template>
                        </DFormSelectSearch>
                    </template>
                </DCollectionTransform>
            </template>
            <template #loading>
                <DFormSelectSearch
                    :options="[]"
                    :disabled="true"
                    placeholder="HGNC"
                />
            </template>
        </DCodeSystem>
    </div>
    <VCFormGroup>
        <template #label>
            DNA-Änderung
        </template>
        <template #default>
            <VCFormInput
                v-model="form.dnaChange"
                placeholder="HGVS"
            />
        </template>
    </VCFormGroup>
    <VCFormGroup>
        <template #label>
            Proteinänderung
        </template>
        <template #default>
            <VCFormInput
                v-model="form.proteinChange"
                placeholder="HGVS"
            />
        </template>
    </VCFormGroup>
    <div>
        <button
            :disabled="busy"
            type="button"
            class="btn btn-secondary btn-xs"
            @click.prevent="submit()"
        >
            {{ isEditing ? 'Aktualisiern' : 'Hinzufügen' }}
        </button>
    </div>
</template>
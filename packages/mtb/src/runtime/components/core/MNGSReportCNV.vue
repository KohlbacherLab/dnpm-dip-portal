<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent } from 'vue';
import type { NGSReportCNV } from '../../domains';

export default defineComponent({
    props: {
        entity: {
            type: Object as PropType<NGSReportCNV>,
            required: true,
        },
    },
});
</script>
<template>
    <div class="entity-card">
        <div class="d-flex flex-row justify-content-between">
            <div
                class="d-flex justify-content-between mb-2 flex-column"
            >
                <div>
                    <strong>Chromosome</strong> <small>{{ entity.chromosome.display }}</small>
                </div>
                <div>
                    <strong>Type</strong> <small>{{ entity.type.display || entity.type.code }}</small>
                </div>
                <div>
                    <strong>Betroffene Gene</strong>
                    <template
                        v-for="(item, idx) in entity.reportedAffectedGenes"
                        :key="item"
                    >
                        {{ idx > 0 ? ', ' : '' }} {{ item.display || item.code }}
                    </template>
                </div>
                <div>
                    <strong>Anfangsbereich</strong> <small>{{ entity.startRange.start }} - {{ entity.startRange.end }}</small>
                </div>

                <div>
                    <strong>Endbereich</strong> <small>{{ entity.endRange.start }} - {{ entity.endRange.end }}</small>
                </div>
            </div>
            <div class="ms-3 d-flex flex-column justify-content-between mb-2 mt-2">
                <div>
                    <strong>Kopienzahl (insgesamt)</strong> <small>{{ entity.totalCopyNumber }}</small>
                </div>
                <div>
                    <strong>Kopienzahl (relativ)</strong> <small>{{ entity.relativeCopyNumber }}</small>
                </div>
                <div>
                    <strong>Kopienzahl (LoH)</strong>
                    <template
                        v-for="(item, idx) in entity.copyNumberNeutralLoH"
                        :key="item"
                    >
                        {{ idx > 0 ? ', ' : '' }} {{ item.display || item.code }}
                    </template>
                </div>

                <div>
                    <strong>CNA</strong> <small>{{ entity.cnA.toFixed(2) }}</small>
                </div>

                <div>
                    <strong>CNB</strong> <small>{{ entity.cnB.toFixed(2) }}</small>
                </div>
            </div>
        </div>
    </div>
</template>

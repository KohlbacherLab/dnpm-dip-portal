<script lang="ts">
import type { PropType } from 'vue';
import { defineNuxtComponent } from '#app';
import VariantEntity from '../../../../../components/core/VariantEntity.vue';
import type { PatientRecord, QuerySession } from '../../../../../domains';

export default defineNuxtComponent({
    components: { VariantEntity },
    props: {
        entity: {
            type: Object as PropType<QuerySession>,
            required: true,
        },
        record: {
            type: Object as PropType<PatientRecord>,
            required: true,
        },
    },
});
</script>
<template>
    <h5>NGS Berichte</h5>
    <div class="entity-card-group flex-column">
        <template
            v-for="(item, key) in record.ngsReports"
            :key="key"
        >
            <div class="entity-card">
                <div class="mb-3">
                    <div class="row">
                        <div class="col">
                            <div>
                                <div><strong><i class="fa fa-clock" /> Datum</strong> {{ item.recordedOn }}</div>
                                <div><strong><i class="fa fa-microscope" /> Labor</strong> {{ item.performingLab.name }}</div>
                                <div><strong><i class="fa fa-keyboard" /> Type</strong> {{ item.type.display }}</div>
                            </div>
                        </div>
                        <div class="col">
                            <div>
                                <div><strong><i class="fa fa-dna" /> Sequenzierungs-Typ</strong> {{ item.metaInfo.sequencingType }}</div>
                                <div><strong><i class="fas fa-toolbox" /> Kit</strong> {{ item.metaInfo.kit }}</div>
                                <template v-if="item.autozygosity">
                                    <div><strong><i class="fa fa-retweet" /> Autozygosity</strong> {{ item.autozygosity.value }}</div>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h6>Varianten</h6>
                    <div class="list">
                        <ul class="list-body list-unstyled">
                            <template
                                v-for="variant in item.variants"
                                :key="variant.id"
                            >
                                <li class="list-item flex-row">
                                    <VariantEntity
                                        :query-id="entity.id"
                                        :entity="variant"
                                    />
                                </li>
                            </template>
                        </ul>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>
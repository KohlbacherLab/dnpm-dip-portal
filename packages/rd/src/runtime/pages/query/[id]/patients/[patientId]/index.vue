<script lang="ts">
import { DPatient } from '@dnpm-dip/core';
import type { PropType } from 'vue';
import { defineNuxtComponent } from '#app';
import type { PatientRecord, QuerySession } from '../../../../../domains';

export default defineNuxtComponent({
    components: {
        DPatient,
    },
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
    <div>
        <DPatient
            class="mb-3"
            :entity="record.patient"
        />

        <hr>

        <div class="row mb-3">
            <div class="col">
                <h5>Fall</h5>

                <div class="entity-card-group flex-column">
                    <template
                        v-for="(item) in record.episodesOfCare"
                        :key="item.id"
                    >
                        <div class="entity-card">
                            <template v-if="item.transferTan">
                                <div>
                                    <strong><i class="fa fa-id-card" /> TransferTan</strong>
                                    {{ item.transferTan }}
                                </div>
                                <div>
                                    <strong><i class="fa fa-clock" /> Datum</strong>
                                    {{ item.period.start }} <template v-if="item.period.end">
                                        - {{ item.period.end }}
                                    </template>
                                </div>
                            </template>
                        </div>
                    </template>
                </div>
            </div>
            <div class="col">
                <h5>Diagnose</h5>
                <div class="entity-card">
                    <div><strong><i class="fa fa-clock" /> Datum</strong> {{ record.diagnosis.recordedOn }}</div>
                    <div>
                        <strong><i class="fa-solid fa-tags" /> Kategorien</strong>
                        <template
                            v-for="item in record.diagnosis.categories"
                            :key="item.code"
                        >
                            <span class="ms-1 badge bg-dark">{{ item.display }}</span>
                        </template>
                    </div>
                    <div>
                        <strong><i class="fas fa-spinner" /> Status</strong>
                        {{ record.diagnosis.verificationStatus.display }}
                    </div>
                </div>
            </div>
        </div>

        <hr>

        <div class="mb-3">
            <h5>
                HPO
            </h5>
            <div class="entity-card">
                <div>
                    <strong><i class="fa fa-tags" /> Terme</strong>
                    <template
                        v-for="(item, key) in record.hpoTerms"
                        :key="key"
                    >
                        <span class="badge bg-dark ms-1">{{ item.value.display || item.value.code }}</span>
                    </template>
                </div>
            </div>
        </div>

        <hr>

        <div v-if="record.therapy">
            <h5 class="mb-0">
                Therapie
            </h5>
            <div class="entity-card">
                {{ record.therapy.notes }}
            </div>
        </div>
    </div>
</template>

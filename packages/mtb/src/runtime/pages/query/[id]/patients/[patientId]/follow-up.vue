<script lang="ts">
import { DPatient } from '@dnpm-dip/core';
import type { PropType } from 'vue';
import { defineNuxtComponent } from '#app';
import type { PatientRecord, QuerySession } from '../../../../../domains';

export default defineNuxtComponent({
    components: { DPatient },
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
    <template v-if="record.medicationTherapies">
        <div>
            <h5>Durchgeführte Therpaien</h5>
        </div>
        <template
            v-for="(history, key) in record.medicationTherapies"
            :key="key"
        >
            <template
                v-for="item in history.history"
                :key="item.id"
            >
                <div class="entity-card mb-3">
                    <div class="row">
                        <div class="col">
                            <div>
                                <div><strong><i class="fas fa-check-circle" /> Status</strong> {{ item.status.display || item.status.code }}</div>
                            </div>
                            <div v-if="item.statusReason">
                                <div>
                                    <strong><i class="fas fa-info-circle" /> Status Grund</strong>
                                    {{ item.statusReason.display || item.statusReason.code }}
                                </div>
                            </div>
                            <div>
                                <strong><i class="fa fa-pills" /> Medikation</strong>
                                <template
                                    v-for="(el, idx) in item.medication"
                                    :key="el"
                                >
                                    {{ idx > 0 ? ', ' : '' }} {{ el.display || el.code }}
                                </template>
                            </div>
                        </div>
                        <div class="col">
                            <div>
                                <div><strong><i class="fa fa-clock" /> Datum</strong> {{ item.recordedOn }}</div>
                            </div>
                            <div v-if="item.period">
                                <div>
                                    <strong><i class="fas fa-calendar-alt" /> Period</strong>
                                    {{ item.period.start }} - {{ item.period.end }}
                                </div>
                            </div>
                            <div>
                                <div><strong><i class="far fa-sticky-note" /> Notiz</strong> {{ item.note }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </template>
    </template>

    <hr>

    <template v-if="record.responses">
        <div>
            <h5>Responses</h5>
        </div>
        <div class="entity-card-group flex-row justify-content-evenly">
            <template
                v-for="(item) in record.responses"
                :key="item.id"
            >
                <div class="entity-card flex-grow-1 mb-3">
                    <div><strong><i class="fa fa-clock" /> Datum</strong> {{ item.effectiveDate }}</div>
                    <div><strong><i class="fas fa-calculator" /> Code</strong> {{ item.value.display || item.value.code }}</div>
                </div>
            </template>
        </div>
    </template>
</template>
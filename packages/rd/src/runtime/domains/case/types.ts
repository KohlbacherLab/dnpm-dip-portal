import type { Patient } from '@dnpm-dip/core';
import type { Diagnosis } from '../diagnosis';

type Period = {
    start: string,
    end?: string
};

/**
 * @see https://github.com/KohlbacherLab/dnpm-dip-rd-model/blob/main/dto_model/src/main/scala/de/dnpm/dip/rd/model/RDCase.scala
 */
export type Case = {
    id: string,
    externalId?: {
        value: string,
        system?: string
    },
    patient: Patient,
    transferTan?: string,
    period: Period,
    diagnoses: Diagnosis[]
};

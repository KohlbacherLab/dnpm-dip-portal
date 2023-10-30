import type { Patient } from '@dnpm-dip/core';

/**
 * @see https://github.com/KohlbacherLab/dnpm-dip-rd-model/blob/main/dto_model/src/main/scala/de/dnpm/dip/rd/model/RDTherapy.scala
 */
export type RDTherapy = {
    id: string,
    patient: Patient,
    notes: string
};

import type { Coding, Patient } from '@dnpm-dip/core';

/**
 * @see https://github.com/KohlbacherLab/dnpm-dip-rd-model/blob/main/dto_model/src/main/scala/de/dnpm/dip/rd/model/RDDiagnosis.scala
 */
export type Diagnosis = {
    id: string,
    patient: Patient,
    recordedOn?: string,
    categories: Coding[], // todo: check type
    onsetAge?: unknown, // todo: check type
    verificationStatus: Coding<'solved' | 'partially-solved' | 'unclear' | 'unsolved'>
};

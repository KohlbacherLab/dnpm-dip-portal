import type { Coding } from '../coding';
import type { MinMaxRange } from '../utility';

/**
 * @see https://github.com/KohlbacherLab/dnpm-dip-core/blob/main/src/main/scala/de/dnpm/dip/model/Patient.scala
 */
export type Patient = {
    id: string,
    /**
     * @see https://github.com/KohlbacherLab/dnpm-dip-core/blob/main/src/main/scala/de/dnpm/dip/model/Gender.scala
     */
    gender: Coding<'male' | 'female' | 'other' | 'unknown'>
    birthDate: string,
    age: { value: number, unit: string },
    dateOfDeath?: string,
    managingSite?: Coding,
    vitalStatus?: Coding,
    healthInsurance?: unknown // todo: type is not defined ?!
};

/**
 * @see https://github.com/KohlbacherLab/dnpm-dip-service-base/blob/main/src/main/scala/de/dnpm/dip/service/query/PatientMatch.scala
 */
export type PatientMatchBase<Criteria = any> = {
    id: string,
    managingSite?: Coding,
    gender: Coding<'male' | 'female' | 'other' | 'unknown'>,
    age: {
        value: number,
        /**
         * @see https://github.com/KohlbacherLab/dnpm-dip-core/blob/main/src/main/scala/de/dnpm/dip/model/Quantity.scala
         */
        unit: string
    },
    vitalStatus: Coding<'alive' | 'deceased'>,
    matchingCriteria?: Criteria | null
};

export type PatientFilterGender = Coding<'male' | 'female' | 'other' | 'unknown'>[];
export type PatientFilterAgeRange = MinMaxRange;
export type PatientFilterVitalStatus = Coding<'alive' | 'deceased'>[];
export type PatientFilterSite = Coding[];

/**
 * @see https://github.com/KohlbacherLab/dnpm-dip-service-base/blob/main/src/main/scala/de/dnpm/dip/service/query/PatientFilter.scala
 */
export type PatientFilter = {
    gender?: PatientFilterGender,
    ageRange?: PatientFilterAgeRange,
    vitalStatus?: PatientFilterVitalStatus,
    site?: PatientFilterSite
};

export type PatientFilterInput = {
    gender?: PatientFilterGender,
    ageRange?: Partial<PatientFilterAgeRange>,
    vitalStatus?: PatientFilterVitalStatus,
    site?: PatientFilterSite
};

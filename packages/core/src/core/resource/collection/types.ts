import type {
    EmitsOptions, MaybeRef, Ref, SetupContext,
    Slots, VNodeChild,
} from 'vue';
import type { ObjectLiteral } from '../../../types';
import type { ErrorCollectionSlotProps, ErrorSlotProps } from '../../error';
import type { ResourceSlotName } from '../constants';

export type ResourceCollectionLoadMeta = {
    limit?: number,
    offset?: number,
    total?: number,
    filters?: Record<string, any>,
};

export type ResourceCollectionLoadResponse<
DATA extends ObjectLiteral = ObjectLiteral,
> = {
    data: DATA[],
    total?: number,
};

type EmitFn<T = EmitsOptions> = SetupContext<T>['emit'];

export type ResourceCollectionEventsType<T> = {
    failed: (data: Error) => true,
    created: (data: T) => true,
    deleted: (data: T) => true,
    updated: (data: T) => true
};

export type ResourceCollectionManagerContext<
    T extends ObjectLiteral = ObjectLiteral,
> = {
    load: ResourceCollectionManagerLoadFn<T>,
    slots?: Slots,
    expose?: (exposed?: Record<string, any>) => void,
    emit?: EmitFn<ResourceCollectionEventsType<T>>
    filters?: MaybeRef<ObjectLiteral | undefined>
};

export type ResourceCollectionManagerOutput<
    T extends ObjectLiteral = ObjectLiteral,
> = {
    load: ResourceCollectionManagerLoadFn<T>,
    render: () => VNodeChild,
    data: Ref<T[]>,
    busy: Ref<boolean>,
    error: Ref<Error | null>
};

export type ResourceCollectionManagerLoadFn<
    DATA extends ObjectLiteral = ObjectLiteral,
> = (data: ResourceCollectionLoadMeta) => Promise<ResourceCollectionLoadResponse<DATA>>;

export type ResourceCollectionLoadFn = (data: ResourceCollectionLoadMeta) => Promise<any>;

export type ResourceCollectionDefaultSlotProps<T> = {
    data: T[],
    busy: boolean,
    total?: number,
    limit?: number,
    offset?: number,
    load: ResourceCollectionLoadFn,
    deleted: (data: T) => void,
    created: (data: T) => void,
    updated: (data: T) => void
};

export type ResourceCollectionSlots<T> = {
    [ResourceSlotName.DEFAULT]: ResourceCollectionDefaultSlotProps<T>,
    [ResourceSlotName.ERROR]: ErrorSlotProps,
    [ResourceSlotName.ERRORS]: ErrorCollectionSlotProps,
    [ResourceSlotName.LOADING]: undefined
};

<script lang="ts">
import { PageMetaKey, PageNavigationTopID, useToast } from '@dnpm-dip/core';
import { isClientError } from 'hapic';
import {
    AIdentityProviderIcon,
    AIdentityProviders,
    APagination,
    ARealms,
    ASearch,
    ATitle,
    injectAPIClient,
    useValidationTranslator,
} from '@authup/client-vue';
import useVuelidate from '@vuelidate/core';
import { maxLength, minLength, required } from '@vuelidate/validators';
import {
    definePageMeta,
    reactive,
    ref,
} from '#imports';
import {
    defineNuxtComponent, navigateTo, useRoute, useRuntimeConfig,
} from '#app';
import { useAuthStore } from '../stores/auth';

export default defineNuxtComponent({
    components: {
        APagination,
        ASearch,
        ATitle,
        AIdentityProviders,
        AIdentityProviderIcon,
        ARealms,
    },
    setup() {
        definePageMeta({
            [PageMetaKey.REQUIRED_LOGGED_OUT]: true,
            [PageMetaKey.NAVIGATION_TOP_ID]: PageNavigationTopID.DEFAULT,
        });

        const apiClient = injectAPIClient();
        const toast = useToast();

        const form = reactive({
            name: '',
            password: '',
            realm_id: '',
        });

        const vuelidate = useVuelidate({
            name: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(255),
            },
            password: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(255),
            },
            realm_id: {

            },
        }, form);

        const store = useAuthStore();
        const runtimeConfig = useRuntimeConfig();

        const busy = ref(false);

        const submit = async () => {
            try {
                await store.login({
                    name: form.name,
                    password: form.password,
                    realmId: form.realm_id,
                });

                const route = useRoute();
                const { redirect, ...query } = route.query;

                navigateTo({
                    path: (redirect || '/') as string,
                    query,
                });
            } catch (e: any) {
                if (isClientError(e) && toast) {
                    toast.show({ variant: 'warning', body: e.message });
                }
            }
        };

        Promise.resolve()
            .then(store.logout);

        return {
            vuelidate,
            translator: useValidationTranslator(),
            form,
            submit,
            busy,
        };
    },
});
</script>
<template>
    <div class="container">
        <h4>
            <i class="fa-solid fa-arrow-right-to-bracket pe-2" />
            Login
        </h4>
        <form @submit.prevent="submit">
            <VCFormGroup
                :validation-result="vuelidate.name"
                :validation-translator="translator"
            >
                <template #label>
                    Name
                </template>
                <template #default>
                    <VCFormInput
                        v-model="form.name"
                    />
                </template>
            </VCFormGroup>

            <VCFormGroup
                :validation-result="vuelidate.password"
                :validation-translator="translator"
            >
                <template #label>
                    Password
                </template>
                <template #default>
                    <VCFormInput
                        v-model="form.password"
                        type="password"
                    />
                </template>
            </VCFormGroup>

            <VCFormSubmit
                v-model="busy"
                :validation-result="vuelidate"
                :create-text="'Login'"
                :create-button-class="{value: 'btn btn-sm btn-dark btn-block', presets: { bootstrap: false }}"
                :create-icon-class="'fa-solid fa-right-to-bracket'"
                :submit="submit"
            />
        </form>
    </div>
</template>
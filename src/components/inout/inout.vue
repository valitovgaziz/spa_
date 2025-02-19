<template>
    <div v-if="!isAuthed">
        <LoginCooky />
        <RouterLink id="registration" to="/registration">{{ t('messages.registration') }}</RouterLink>
    </div>
    <div v-else>
        <LogoutCooky />
    </div>
</template>

<script>
import store from '@/auth/stores/store.js';
import LogoutCooky from '@/components/inout/logout.vue';
import LoginCooky from '@/components/inout/login.vue';
import { onMounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
    components: {
        LogoutCooky,
        LoginCooky,
    },
    setup() {
        onMounted(() => {
            store.dispatch('checkAuth');
        });

        const { t } = useI18n();
        const isAuthed = computed(() => store.getters.isAthenticated);

        return {
            t,
            isAuthed
        };
    }
}
</script>

<style>
#registration {
    font-family: var(--font-secondary);
}
</style>
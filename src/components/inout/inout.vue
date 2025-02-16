<template>
    <div v-if="!isAuthed">
        <LoginCooky />
    </div>
    <div v-else>
        <LogoutCooky />
    </div>
</template>

<script>
import store from '@/auth/stores/store.js';
import LogoutCooky from '@/components/inout/logout.vue';
import LoginCooky from '@/components/inout/login.vue';
import Logout from '@/components/inout/logout.vue';
import { ref, onMounted, computed } from 'vue';

export default {
    components: {
        LogoutCooky,
        LoginCooky,
    },
    setup() {
        onMounted(() => {
            store.dispatch('checkAuth');
        });
        const isAuthed = computed(() => store.getters.isAthenticated);

        return {
            isAuthed
        };
    }
}
</script>
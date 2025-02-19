<template>
    <div class="InOut">
        <div v-if="isAuth">
            <router-link onclick="" to="/" id="in">OUT</router-link>
        </div>
        <div v-else>
            <router-link to="/login" id="out">IN</router-link>
        </div>
    </div>
</template>

<script>

import store from '@/auth/stores/store.js';
import { onMounted, computed } from 'vue';

export default {
    name: 'flagInOut',
    setup() {
        onMounted(() => {
            store.dispatch('checkAuth');
        });
        const isAuth = computed(() => store.getters.isAthenticated);

        return {
            isAuth
        };
    }
}
</script>

<style scoped>
.InOut {
    height: 2rem;
    width: 2rem;
    background-color: var(--background-color);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 2px 3px greenyellow;
    padding: 0.3rem;
}

.InOut:hover {
    cursor: pointer;
    box-shadow: 0px 0px 6px greenyellow;
}

#in {
    color: green;
}

#out {
    color: red;
}
</style>
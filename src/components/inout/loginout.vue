<template>
  <div v-if="isAuthenticated">
    <p>Добро пожаловать, {{ user.name }}!</p>
    <button @click="logout">Выйти</button>
  </div>
  <div v-else>
    <form @submit.prevent="login">
      <input v-model="credentials.email" type="email" placeholder="Email" required />
      <input v-model="credentials.password" type="password" placeholder="Пароль" required />
      <button type="submit">Войти</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '../../auth/stores/auth.store.js';
import router from '../../router/index.js';

const authStore = useAuthStore();
const credentials = ref({ email: '', password: '' });

const { user, isAuthenticated } = authStore;

const login = async () => {
  await authStore.login(credentials.value);
  router.push('/');
};

const logout = () => {
  authStore.logout();
};

onMounted(async () => {
  await authStore.checkAuth();
});
</script>

<style scoped>
</style>
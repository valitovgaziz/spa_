<template>
    <div v-if="authStore.isAuthenticated" class="logout">
        <div>
            <p>Good by</p>
            <button @click="logout">Logout</button>
        </div>
    </div>
    <div v-else class="login-form">
        <h1>
            {{ t('messages.inout.login') }}
        </h1>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="email">
                    {{ t('messages.inout.email') }}:
                </label>
                <input v-model.trim="email" type="email" id="email" required :placeholder="t('messages.inout.email')" />
            </div>

            <div class="form-group">
                <label for="password">
                    {{ t('messages.inout.password') }}:
                </label>
                <input v-model.trim="password" type="password" id="password" required
                    :placeholder="t('messages.inout.password')" />
            </div>

            <button type="submit">
                {{ t('messages.inout.login') }}
            </button>
        </form>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/auth/stores/auth.store';
import { useRouter } from 'vue-router';

const email = ref('');
const isValidE = ref(true);

const password = ref('');
const isValidP = ref(true);

const { t } = useI18n();
const router = useRouter();
const authStore = useAuthStore();


onMounted(async () => {
    authStore.checkAuth().catch(error => console.error('Check auth failed', error));
});

async function handleSubmit() {
    if (!isValidEmail(email.value) || !isValidPassword(password.value)) {
        alert("Пожалуйста, заполните все поля корректно.");
        return;
    }
    try {
        await authStore.login({ email: email.value, password: password.value });
        router.push('/');
    } catch (error) {
        console.error(error);
        alert('Неверный email или пароль. Попробуйте снова.');
    }
}

function isValidPassword(assword) {
    if (password.length === 0) {
        return false;
    }

    if (password.length < 6) {
        return false;
    }
    return true;
}

function isValidEmail(email) {
    if (email.length === 0) {
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return false;
    }
    return true;
}

function logout() {
    authStore.logout();
    router.push('/');
}
</script>


<style scoped>
.login-form {
    padding: 0 2rem 2rem 2rem;
    border: 1px solid #ccc;
    border-radius: 1rem;
    box-shadow: 1px 2px 3px #609f7d;
}

.form-group {
    margin-bottom: 1rem;
}

.form-group label {
    display: block;
}

.form-group input {
    padding: 0.7rem;
    border: none;
    border-radius: 1rem;
    background-color: var(--light-dark-background-color);
    color: var(--text-color);
    box-shadow: 1px 2px 3px #609f7d;
}

button {
    margin-top: 0.7rem;
    padding: 0.7rem 1.7rem;
    background-color: var(--button-dark-background-color);
    color: var(--text-color);
    border: none;
    border-radius: 1rem;
    cursor: pointer;
    box-shadow: 1px 2px 3px #609f7d;
}

button:hover {
    box-shadow: 0 0 6px #609f7d;
}
</style>
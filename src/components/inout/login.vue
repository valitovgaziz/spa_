<template>
    <div class="login-form">
      <h2 class="title">Форма входа</h2>
      <input type="email" placeholder="Ваш email" v-model="email" />
      <input type="password" placeholder="Пароль" v-model="password" />
      <button @click="submitForm">Войти</button>
    </div>
</template>

<style scoped>
.login-form {
    padding: 30px;
    background-color: rgba(255, 255, 255, 0.9);
    /* Полупрозрачный белый фон */
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.title {
    margin-bottom: 20px;
    text-align: center;
    font-size: 24px;
    color: #444;
}

input {
    display: block;
    width: 100%;
    margin-bottom: 15px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    font-size: 16px;
}

button {
    display: block;
    width: 100%;
    padding: 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}

.login {
    background-color: lightgoldenrodyellow;
}
</style>

<script>
import { ref } from 'vue';

const email = ref('');
const password = ref('');

// Функция отправки формы
const submitForm = () => {
    console.log('Отправлено:', email.value, password.value);
    // Здесь можно добавить логику обработки формы, например, отправку данных на сервер
};
</script>

<template>
    <div class="search-container">

        <!-- Значок слева от инпута для открытия параметров поиска -->
        <button class="params-button" @click="showParams = !showParams">
            <i class="fa-solid fa-filter">P</i>
        </button>

        <!-- Инпут для ввода текста -->
        <input type="text" v-model="searchText" @keyup.enter="onSearch" placeholder="Введите название места..."
            class="search-input" />

        <!-- Всплывающее меню с параметрами поиска -->
        <transition name="fade">
            <div v-if="showParams" class="params-menu">
                <ul>
                    <li><label><input type="checkbox"> Только с отзывами</label></li>
                    <li><label><input type="checkbox"> С фото</label></li>
                    <li><label><input type="radio" name="sortBy" value="rating"> По рейтингу</label></li>
                    <li><label><input type="radio" name="sortBy" value="distance"> По расстоянию</label></li>
                </ul>
            </div>
        </transition>

        <!-- Кнопка поиска со стрелкой -->
        <button class="search-button" @click="onSearch">
            <i class="fa-solid fa-arrow-right-long"></i>
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const searchText = ref('');
const showParams = ref(false);

// Функция обработки поиска
const onSearch = () => {
    // Здесь будет логика отправки запроса на сервер
    console.log('Поиск:', searchText.value);
};
</script>

<style scoped>
.search-container {
    border: 1px solid;
    display: flex;
    align-items: center;
    padding: 1rem;
}

.params-button {
    background-color: #f9f9f9;
    border: none;
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;
    margin-left: -40px;
}

.params-menu {
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    padding: 10px;
    border-radius: 6px;
}

.params-menu ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.params-menu li {
    margin-bottom: 5px;
}

.search-input {
    padding: 10px;
    border-radius: 20px 0 0 20px;
    border: none;
    outline: none;
    width: 200px;
}


.search-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 0 20px 20px 0;
    cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
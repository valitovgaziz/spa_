<template>
    <div class="menu">
        <img src="./images/icons/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" alt="menu">
        <ul>
            <li><router-link to="/profile">Профиль</router-link></li>
            <li>Настройки</li>
            <li><router-link to="/about">О нас</router-link></li>
            <li><router-link to="/support">Написать в техпотдержку</router-link></li>
            <li> <router-link to="/feetback">Оставить отзыв</router-link></li>
            <li>Вход/Выход</li>
        </ul>
    </div>
</template>

<style scoped>
.menu {
    background-color: darkgreen;
    width: fit-content;
}

ul {
    margin: 0 0.5rem 0.5rem 0;
}

li {
    margin: 3px 0;
    border: solid 1px black;
    border-radius: 1rem;
    padding: 0 0.5rem;
}

li:hover {
    cursor: pointer;
    background-color: rgb(153, 204, 204);
    border-radius: 1rem;
}
</style>

<script>
export default {
    name: 'menu',
}
</script>
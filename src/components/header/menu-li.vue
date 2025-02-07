<template>
    <ul id="ul-m" :class="{ visible: isMenuVisible }">
        <li v-on:click="$refs.profile.$el.click()"><router-link to="/profile" ref="profile">Профиль</router-link></li>
        <li v-on:click="$refs.settings.$el.click()"><router-link to="/settings" ref="settings">Настройки</router-link>
        </li>
        <li v-on:click="$refs.about.$el.click()"><router-link to="/about" ref="about">О нас</router-link></li>
        <li v-on:click="$refs.support.$el.click()"><router-link to="/support" ref="support">Написать в
                техпотдержку</router-link></li>
        <li v-on:click="$refs.feetback.$el.click()"><router-link to="/feetback" ref="feetback">Оставить
                отзыв</router-link></li>
        <li v-on:click="$refs.registration.$el.click()"><router-link to="/registration"
                ref="registration">Регистрация</router-link></li>
        <li v-on:click="$refs.login.$el.click()"><router-link to="/login" ref="login">Войти</router-link></li>
        <li v-on:click="$refs.logout.$el.click()"><router-link to="/logout" ref="logout">Выйти</router-link></li>
    </ul>
</template>

<script>
export default {
    name: 'menu-li',
}
</script>

<style>
#ul-m {
    position: absolute;
    top: 3rem;
    right: 1rem;
    width: fit-content;
    visibility: hidden;
    margin: auto;
    border: 1px solid;
}

.visible {
    visibility: visible !important;
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
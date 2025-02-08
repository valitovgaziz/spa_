<template>
    <div class="menu" v-on:click="toggleMenu">
        <HamburgerMenu :isMenuVisible="isMenuVisible" />
        <ul id="ul-m" :class="{ visible: isMenuVisible }">
            <li v-on:click="$refs.profile.$el.click()"><router-link to="/profile" ref="profile">Профиль</router-link>
            </li>
            <li v-on:click="$refs.settings.$el.click()"><router-link to="/settings"
                    ref="settings">Настройки</router-link>
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
    </div>
</template>

<style scoped>
.menu {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
}

#ul-m {
    position: absolute;
    top: 3rem;
    right: 1rem;
    width: fit-content;
    visibility: hidden;
    margin: auto;
    border-radius: 1rem;
    box-shadow: 1px 2px 3px blue;
    padding: 0.5rem;
}

li {
    width: fit-content;
    padding: 0.3rem;
}

.visible {
    visibility: visible !important;
}

li:hover {
    cursor: pointer;
    background-color: rgb(153, 204, 204);
    border-radius: 0.3rem;
}
</style>

<script>
import HamburgerMenu from './toggleMenu.vue';

export default {
    name: 'menu',
    components: {
        HamburgerMenu,
    },
    data() {
        return {
            isMenuVisible: false,
        }
    },
    mounted() {
        document.addEventListener('click', this.closeMenuIfClickedOutside)
    },
    beforeUnmount() {
        document.removeEventListener('click', this.closeMenuIfClickedOutside)
    },
    methods: {
        toggleMenu() {
            this.isMenuVisible = !this.isMenuVisible;
        },
        closeMenuIfClickedOutside(event) {
            const menuElement = this.$el;
            if (!menuElement.contains(event.target)) {
                this.isMenuVisible = false;
            }
        },
    }

}
</script>
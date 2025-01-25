<template>
    <div class="footer">
        <router-link to="/about">О нас</router-link>
        <MenuIcon />
        <router-link to="/">На главную</router-link>
    </div>
</template>

<style scoped>
.footer {
    height: 3rem;
    background-color: darkmagenta;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 2rem;
}
</style>

<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue';
export default {
    components: {
        MenuIcon,
    },
    name : 'footer',
};
</script>
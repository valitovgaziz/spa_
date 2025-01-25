<template>
    <div class="footer">
        <router-link to="/about">О нас</router-link>
        <router-link to="/">
            <img src="./images/icons/home_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" alt="home">
        </router-link>
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
    name: 'footer',
};
</script>
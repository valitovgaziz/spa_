<template>
    <div class="header">
        <router-link to="/about"><img src="./images/logo150x150.png" alt="logo">ООО "ИКЦ Ял Арба"</router-link>
        <Menu />
    </div>
</template>


<style>
.header {
    background-color: aquamarine;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 2rem;
}

img {
    height: 1.5rem;
}

</style>


<script>
import Menu from './header/menu.vue';

export default {
    components: {
        Menu,
    },
    name: 'header',
}
</script>
<template>
    <div class="header">
        <router-link to="/about" id="rl-about"><img src="./images/logo150x150.png" alt="logo"><p>ООО "ИКЦ Ял Арба"</p></router-link>
        <Menu />
    </div>
</template>


<style>
.header {
    width: 100%;
    background-color: aquamarine;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 3rem;
}

#rl-about {
    display: flex;
    flex-direction: row;
    align-items: center;
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
<template>
    <div class="header">
        <router-link to="/about" id="rl-about"><img src="../images/logo150x150.png" alt="logo"></router-link>
        <p>Trip*Freedom*Adventure</p>
        <Menu />
    </div>
</template>


<style scoped>
.header {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border-radius: 1rem;
    background-color: aquamarine;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 3rem;
}

#rl-about {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 1rem;
    padding: 0 1rem 0 1rem;
}

#rl-about:hover {
    cursor: pointer;
    background-color: rgb(155, 236, 236);
}

img {
    height: 1.5rem;
    padding: 0 1rem 0 0;
}

</style>


<script>
import Menu from './menu.vue';

export default {
    components: {
        Menu,
    },
    name: 'header',
}
</script>
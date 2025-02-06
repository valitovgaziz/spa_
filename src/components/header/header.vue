<template>
    <div class="header">
        <Logo />
        <TFA />
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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 3rem;
}
</style>


<script>
import Menu from './menu.vue';
import Logo from './logo-rl-about.vue';
import TFA from './tripFreedomAdventure.vue';

export default {
    components: {
        Menu,
        Logo,
        TFA,
    },
    name: 'header',
}
</script>
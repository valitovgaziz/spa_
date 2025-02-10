<template>
    <div class="header">
        <Logo />
        <DarkThemeToggleI />
        <Lang />
        <Menu />
    </div>
</template>



<script>
import Menu from './headerMemu.vue';
import Logo from './logo-rl-about.vue';
import Lang from '../../locales/langToggle.vue';
import DarkThemeToggleI from './darkThemeToggle.vue';

export default {
    components: {
        Menu,
        Logo,
        Lang,
        DarkThemeToggleI,
    },
    name: 'header',
}
</script>



<style scoped>
.header {
    max-width: 1024px;
    width: 50%;
    min-width: 400px;
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
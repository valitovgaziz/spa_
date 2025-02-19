<template>
    <div class="header">
        <LogoH />
        <DarkThemeToggleI />
        <Lang />
        <Flag />
        <MenuH />
    </div>
</template>



<script>
import MenuH from './headerMemu.vue';
import LogoH from './logo-rl-about.vue';
import Lang from '../../locales/langToggle.vue';
import DarkThemeToggleI from './darkThemeToggle.vue';
import Flag from '@/components/header/flagProfile.vue';

export default {
    components: {
        Flag,
        MenuH,
        LogoH,
        Lang,
        DarkThemeToggleI,
    },
    name: 'headerM',
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
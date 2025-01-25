<template>
    <div class="footer">
        <router-link to="/about">О нас</router-link>
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
export default {
    name : 'footer',
}
</script>
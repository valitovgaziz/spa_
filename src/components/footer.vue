<template>
    <div class="footer">
        <p>footer</p>
        <router-link to="/about">О нас</router-link>
        <router-link to="/">На главную</router-link>
    </div>
</template>

<style scoped>
.footer {
    background-color: darkmagenta;
    display: flex;
    flex-direction: row;
}
</style>

<script>
export default {
    name : 'footer',
}
</script>
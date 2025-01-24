<template>
    <div class="footer">
        <router-link to="/about">about</router-link>
        <h1>This is an footer</h1>
    </div>
</template>

<style scoped>
.footer {
    background-color: darkmagenta;
    display: flexbox;
}
</style>

<script>
export default {
    name : 'footer',
}
</script>
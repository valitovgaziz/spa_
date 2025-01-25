<template>
    <div class="header">
        <router-link to="/about"><img src="./images/logo150x150.png" alt="logo">ООО "ИКЦ Ял Арба"</router-link>
    </div>
</template>


<style scoped>
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
export default {
    name : 'header',
}
</script>
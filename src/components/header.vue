<template>
    <div class="header">
        <router-link to="/about"><img src="./images/logo150x150.png" alt="logo">ООО "ИКЦ Ял Арба"</router-link>
        <div class="menu">
            <img src="./images/icons/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" alt="menu">
        </div>
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

.menu {

}
.menu:hover {
    cursor: pointer;
    background-color: rgb(75, 137, 137);
}
</style>


<script>
export default {
    name : 'header',
}
</script>
<template>
    <router-link to="/about" id="rl-about"><img src="../images/logo150x150.png" alt="logo"></router-link>
</template>

<style scoped>
#rl-about {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 1rem;
    height: 1rem;
    width: 1rem;
}

#rl-about:hover {
    cursor: pointer;
    background-color: rgb(78, 102, 94);
}

img {
    height: 2rem;
    box-shadow: 1px 2px 3px rgb(117, 194, 208);
    border-radius: 50%;
    padding: 0.4rem;
}
</style>

<script>

</script>
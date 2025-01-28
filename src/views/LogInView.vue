<template>
    <div class="main">
        <Header />
        <LogIn />
        <Footer />
    </div>
</template>

<style></style>



<script>
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';
import LogIn from '../components/logInOut/login.vue';

export default {
    components: {
        Header,
        Footer,
        LogIn,
    },
};
</script>
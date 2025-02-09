<template>
    <FHeader />
    <LogIn />
    <Footer />
</template>

<style></style>



<script>
import FHeader from '../components/header/fullHeader.vue';
import Footer from '../components/footer/footer.vue';
import LogIn from '../components/inout/login.vue';

export default {
    components: {
        FHeader,
        Footer,
        LogIn,
    },
};
</script>
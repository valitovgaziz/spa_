<template>
    <FHeader />
    <LogOut />
    <Footer />
</template>

<style></style>



<script>
import FHeader from '../components/header/fullHeader.vue';
import Footer from '../components/footer/footer.vue';
import LogOut from '../components/inout/logout.vue';

export default {
    components: {
        FHeader,
        Footer,
        LogOut,
    },
};
</script>
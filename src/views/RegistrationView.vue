<template>
    <FHeader />
    <Registration />
    <Footer />
</template>

<style></style>



<script>
import FHeader from '../components/header/fullHeader.vue';
import Footer from '../components/footer/footer.vue';
import Registration from '../components/inout/registration.vue';

export default {
    components: {
        FHeader,
        Footer,
        Registration,
    },
};
</script>
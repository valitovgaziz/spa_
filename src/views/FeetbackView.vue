<template>
    <FHeader />
    <Feetback />
    <Footer />
</template>

<style></style>



<script>
import FHeader from '../components/header/fullHeader.vue';
import Footer from '../components/footer.vue';
import Feetback from '../components/feetback/feetback.vue';

export default {
    components: {
        FHeader,
        Footer,
        Feetback,
    },
};
</script>
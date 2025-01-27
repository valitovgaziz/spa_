<template>
    <div class="main">
        <Header />
        <Feetback />
        <Footer />
    </div>
</template>

<style>
</style>



<script>
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';
import Feetback from '../components/feetback.vue';

export default {
    components: {
        Header,
        Footer,
        Feetback,
    },
};
</script>
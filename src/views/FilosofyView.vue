<template>
    <FHeader />
    <Filosofy />
    <Footer />
</template>

<style>

</style>

<script>
import FHeader from '../components/header/fullHeader.vue';
import Footer from '../components/footer/footer.vue';
import Filosofy from '../components/filosofy.vue';

export default {
    components: {
        Footer,
        FHeader,
        Filosofy,
    },
}
</script>
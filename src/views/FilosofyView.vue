<template>
    <Header />
    <Filosofy />
    <Footer />
</template>

<style>

</style>

<script>
import Filosofy from '../components/filosofy.vue';
import Header from '../components/header/header.vue';
import Footer from '../components/footer.vue';

export default {
    components: {
        Footer,
        Header,
        Filosofy,
    },
}
</script>
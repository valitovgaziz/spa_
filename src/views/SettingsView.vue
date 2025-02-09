<template>
    <FHeader />
    <Settings />
    <Footer />
</template>

<style></style>

<script>
import FHeader from '../components/header/fullHeader.vue';
import Footer from '../components/footer/footer.vue';
import Settings from '../components/settings.vue';

export default {
    components: {
        FHeader,
        Footer,
        Settings,
    },
};
</script>
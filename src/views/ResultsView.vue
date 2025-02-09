<template>
    <FHeader />
    <SearchLine />
    <Results />
    <Footer />
</template>

<style></style>



<script>
import FHeader from '../components/header/fullHeader.vue';
import Footer from '../components/footer/footer.vue';
import Results from '../components/saerch_results/results.vue';
import searchLine from '@/components/searchLine/searchLine.vue';
import SearchLine from '@/components/searchLine/searchLine.vue';

export default {
    components: {
        FHeader,
        Footer,
        Results,
        SearchLine,
    },
};
</script>
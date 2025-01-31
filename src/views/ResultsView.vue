<template>
    <div class="main">
        <Header />
        <SearchLine />
        <Results />
        <Footer />
    </div>
</template>

<style></style>



<script>
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';
import Results from '../components/saerch_results/results.vue';
import searchLine from '@/components/searchLine.vue';
import SearchLine from '@/components/searchLine.vue';

export default {
    components: {
        Header,
        Footer,
        Results,
        SearchLine,
    },
};
</script>
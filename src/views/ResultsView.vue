<template>
    <FHeader />
    <SearchLine />
    <Results />
    <FooterB />
</template>

<style></style>



<script>
import FHeader from '../components/header/fullHeader.vue';
import FooterB from '../components/footerB/footerB.vue';
import Results from '../components/saerch_results/results.vue';
import searchLine from '@/components/searchLine/searchLine.vue';
import SearchLine from '@/components/searchLine/searchLine.vue';

export default {
    components: {
        FHeader,
        FooterB,
        Results,
        SearchLine,
    },
};
</script>
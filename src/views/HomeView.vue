<template>
  <FHeader />
  <SearchLine />
  <FooterB />
</template>


<style src="../assets/main.css"></style>

<script>
import FHeader from '../components/header/fullHeader.vue';
import FooterB from '../components/footerB/footerB.vue';
import SearchLine from '../components/searchLine/searchLine.vue';

export default {
  components: {
    FHeader,
    FooterB,
    SearchLine,
  },
};
</script>
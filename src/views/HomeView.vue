<template>
  <FHeader />
  <SearchLine />
  <Footer />
</template>


<style src="../assets/main.css"></style>

<script>
import FHeader from '../components/header/fullHeader.vue';
import Footer from '../components/footer/footer.vue';
import SearchLine from '../components/searchLine/searchLine.vue';

export default {
  components: {
    FHeader,
    Footer,
    SearchLine,
  },
};
</script>
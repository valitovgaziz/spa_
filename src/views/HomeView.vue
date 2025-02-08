<template>
  <Header />
  <SearchLine />
  <Footer />
</template>


<style src="../assets/main.css"></style>

<script>
import Header from '../components/header/fullHeader.vue';
import Footer from '../components/footer.vue';
import SearchLine from '../components/searchLine/searchLine.vue';

export default {
  components: {
    Header,
    Footer,
    SearchLine,
  },
};
</script>
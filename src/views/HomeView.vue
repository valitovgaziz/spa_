<template>
  <Header />
  <SearchLine />
  <Footer />
</template>


<style src="../assets/main.css"></style>

<script>
import Header from '../components/header/header.vue';
import Footer from '../components/footer.vue';
import SearchLine from '../components/searchLine.vue';

export default {
  components: {
    Header,
    Footer,
    SearchLine,
  },
};
</script>
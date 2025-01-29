<template>
  <div class="main">
    <Header />
    <SearchLine />
    <Footer />
  </div>
</template>


<style src="../assets/css/style.css">
</style>

<script>
import Header from '../components/header.vue';
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
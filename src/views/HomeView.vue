<template>
  <Header />
  <SearchLine />
  <Footer />
</template>


<style>
@media (min-width: 1024px) {
  .main {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
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
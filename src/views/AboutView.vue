<template>
  <Header />
  <About />
  <Footer />
</template>

<style></style>



<script>
import Header from '../components/header/header.vue';
import Footer from '../components/footer.vue';
import About from '../components/about.vue';

export default {
  components: {
    Header,
    Footer,
    About,
  },
};
</script>
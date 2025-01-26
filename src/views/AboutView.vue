<template>
  <div class="main">
    <Header />
    <About />
    <Footer />
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    background-color: rgb(179, 231, 185);
  }
}
</style>



<script>
import Header from '../components/header.vue';
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
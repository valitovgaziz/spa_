<template>
  <Header />
  <About />
  <h1>Our news</h1>
  <Commits />
  <Footer />
</template>

<style></style>



<script>
import Header from '../components/header/header.vue';
import Footer from '../components/footer.vue';
import About from '../components/about/about.vue';
import Commits from '../components/about/commits.vue';

export default {
  components: {
    Header,
    Footer,
    About,
    Commits,
  },
};
</script>
<template>
  <FHeader />
  <About />
  <Developers />
  <Commits />
  <Footer />
</template>

<style></style>



<script>
import FHeader from '../components/header/fullHeader.vue';
import Footer from '../components/footer/footer.vue';
import About from '../components/about/about.vue';
import Commits from '../components/about/commits.vue';
import Developers from '../components/about/developers.vue';

export default {
  components: {
    FHeader,
    Footer,
    About,
    Developers,
    Commits,
  },
};
</script>
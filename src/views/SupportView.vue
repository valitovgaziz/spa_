<template>
  <div class="main">
    <Header />
    <Support />
    <Footer />
  </div>
</template>

<style></style>



<script>
import Header from '../components/header/header.vue';
import Footer from '../components/footer.vue';
import Support from '../components/support.vue';

export default {
  components: {
    Header,
    Footer,
    Support,
  },
};
</script>
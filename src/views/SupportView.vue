<template>
  <FHeader />
  <Support />
  <Footer />
</template>

<style></style>



<script>
import FHeader from '../components/header/fullHeader.vue';
import Footer from '../components/footer.vue';
import Support from '../components/support.vue';

export default {
  components: {
    FHeader,
    Footer,
    Support,
  },
};
</script>
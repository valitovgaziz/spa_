<template>
  <FHeader />
  <Profile />
  <Footer />
</template>


<style></style>

<script>
import FHeader from '../components/header/fullHeader.vue';
import Footer from '../components/footer.vue';
import Profile from '../components/profile/profile.vue';

export default {
  components: {
    FHeader,
    Footer,
    Profile,
  },
};
</script>
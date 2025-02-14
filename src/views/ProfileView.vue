<template>
  <FHeader />
  <Profile />
  <FooterB />
</template>


<style></style>

<script>
import FHeader from '../components/header/fullHeader.vue';
import FooterB from '../components/footerB/footerB.vue';
import Profile from '../components/profile/profile.vue';

export default {
  components: {
    FHeader,
    FooterB,
    Profile,
  },
};
</script>
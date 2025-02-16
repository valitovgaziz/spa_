<template>
  <FHeader />
  <Support />
  <FooterB />
</template>

<style></style>



<script>
import FHeader from '../components/header/fullHeader.vue';
import FooterB from '../components/footerB/footerB.vue';
import Support from '../components/support.vue';

export default {
  name: 'support',
  components: {
    FHeader,
    Support,
    FooterB
  }
}
</script>
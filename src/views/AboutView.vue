<template>
  <FHeader />
  <About />
  <Developers />
  <Commits />
  <FooterB />
</template>

<script>
import FHeader from '../components/header/fullHeader.vue';
import FooterB from '../components/footerB/footerB.vue';
import About from '../components/about/about.vue';
import Commits from '../components/about/commits.vue';
import Developers from '../components/about/developers.vue';

export default {
  name: 'about',
  components: {
    FHeader,
    About,
    Developers,
    Commits,
    FooterB
  }
}

</script>

<style></style>
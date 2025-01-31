<template>
    <div class="main">
      <Header />
      <Settings />
      <Footer />
    </div>
  </template>
  
  
  <style>
  </style>
  
  <script>
  import Header from '../components/header/header.vue';
  import Footer from '../components/footer.vue';
  import Settings from '../components/settings.vue';
  
  export default {
    components: {
      Header,
      Footer,
      Settings,
    },
  };
  </script>
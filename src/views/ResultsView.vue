<template>
    <div class="main">
      <Header />
      <Results />
      <Footer />
    </div>
  </template>
  
  <style>
  
  </style>
  
  
  
  <script>
  import Header from '../components/header.vue';
  import Footer from '../components/footer.vue';
  import Results from '../components/serch_results/results.vue';
  
  export default {
    components: {
      Header,
      Footer,
      Results,
    },
  };
  </script>
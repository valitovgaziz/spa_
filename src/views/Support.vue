<template>
    <div class="main">
      <Header />
      <Footer />
    </div>
  </template>
  
  <style scoped>
  @media (min-width: 1024px) {
    .about {
      background-color: rgb(179, 231, 185);
    }
  }
  </style>
  
  
  
  <script>
  import Header from '../components/header.vue';
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
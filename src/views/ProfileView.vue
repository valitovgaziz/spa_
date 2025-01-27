<template>
    <div class="main">
      <Header />
      <Profile />
      <Footer />
    </div>
  </template>
  
  
  <style scoped>
  
  </style>
  
  <script>
  import Header from '../components/header.vue';
  import Footer from '../components/footer.vue';
  import Profile from '../components/profile.vue';
  
  export default {
    components: {
      Header,
      Footer,
      Profile,
    },
  };
  </script>
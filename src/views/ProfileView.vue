<template>
    <div class="main">
      <Header />
      <Profile />
      <Footer />
    </div>
  </template>
  
  
  <style scoped>
  .main {
    min-height: fit-content;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    background-color: wheat;
  }
  
  @media (min-width: 1024px) {
    .main {
      min-height: 100vh;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
    }
  }
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
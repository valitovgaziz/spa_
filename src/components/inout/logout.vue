<template>
    <button @click="logout">Logout</button>
  </template>
  
  <script>
  export default {
    name: 'LogoutCooky',
    methods: {
      async logout() {
        try {
          await this.$store.dispatch('logout');
          this.$router.push('/login');
        } catch (error) {
          alert('Logout failed');
        }
      },
    },
  };
  </script>
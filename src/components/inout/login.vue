<template>
    <form @submit.prevent="login">
      <input v-model="credentials.email" type="email" placeholder="Email" required />
      <input v-model="credentials.password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </template>
  
  <script>
  export default {
    name: 'LoginCooky',
    data() {
      return {
        credentials: {
          email: '',
          password: '',
        },
      };
    },
    methods: {
      async login() {
        try {
          await this.$store.dispatch('login', this.credentials);
          this.$router.push('/');
        } catch (error) {
          alert('Login failed');
        }
      },
    },
  };
  </script>
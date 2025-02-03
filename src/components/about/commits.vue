<template>
    <div v-if="loading">Загрузка...</div>
    <ul v-else-if="error">
      Произошла ошибка: {{ error }}
    </ul>
    <ul v-else>
      <li v-for="commit in commits" :key="commit.sha">
        <strong>{{ commit.sha.slice(0, 8) }}:</strong> {{ commit.commit.message }}
      </li>
    </ul>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        loading: true,
        commits: [],
        error: null,
      };
    },
    mounted() {
      this.fetchCommits();
    },
    methods: {
      async fetchCommits() {
        try {
          const response = await axios.get('https://api.github.com/repos/valitovgaziz/spa_/commits', {
            headers: {
              Accept: 'application/vnd.github.v3+json',
            },
          });
          this.commits = response.data;
        } catch (err) {
          this.error = err.message || 'Произошла неизвестная ошибка';
        } finally {
          this.loading = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  </style>x``
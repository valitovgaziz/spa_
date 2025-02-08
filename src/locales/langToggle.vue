<template>
    <div class="language-selector">
      <div class="lang-icon" @click="toggleDropdown">
        <i>{{ $i18n.locale }}</i>
      </div>
      <div v-if="isDropdownOpen" class="dropdown-menu">
        <div
          v-for="lang in languages"
          :key="lang.code"
          class="dropdown-item"
          @click="changeLanguage(lang.code)"
        >
          {{ lang.name }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import languages from './languages.json';
  export default {
    data() {
      return {
        isDropdownOpen: false,
        languages: languages.languages,
      };
    },
    methods: {
        changeLanguage(lang) {
            this.$i18n.locale = lang;
        this.isDropdownOpen = false; // Закрыть меню после выбора языка
      },
      toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
        },

    closeDropdown(event) {
      // Проверяем, был ли клик вне меню
      if (!this.$el.contains(event.target)) {
        this.isDropdownOpen = false;
      }
    },
    },
  };
  </script>
  
  <style scoped>
  .language-selector {
    position: relative;
    display: inline-block;
  }
  
  .lang-icon {
    cursor: pointer;
    font-size: 1.5em;
    color: #333;
    box-shadow: 1px 2px 3px rgb(117, 194, 208);
    border-radius: 50%;
    padding: 0.5rem;
  }
  
  .dropdown-menu {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    z-index: 1000;
    box-shadow: 1px 2px 3px rgb(117, 194, 208);
  }
  
  .dropdown-item {
    padding: 8px 16px;
    cursor: pointer;
    color: #333;
  }
  
  .dropdown-item:hover {
    background-color: rgb(201, 228, 233);
  }
  </style>
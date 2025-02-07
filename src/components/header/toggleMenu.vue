<template>
    <div class="hamburger-menu" @click="toggleMenu">
      <div class="hamburger-line" :class="{ 'line-1': isOpen }"></div>
      <div class="hamburger-line" :class="{ 'line-2': isOpen }"></div>
      <div class="hamburger-line" :class="{ 'line-3': isOpen }"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HamburgerMenu',
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isOpen = !this.isOpen;
        this.$emit('toggle', this.isOpen);
      },
    },
  };
  </script>
  
  <style scoped>
  .hamburger-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 24px;
    cursor: pointer;
  }
  
  .hamburger-line {
    width: 100%;
    height: 3px;
    background-color: #333;
    transition: all 0.3s ease;
  }
  
  .line-1 {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .line-2 {
    opacity: 0;
  }
  
  .line-3 {
    transform: rotate(-45deg) translate(5px, -5px);
  }
  </style>
<template>
  <div class="hamburger" @click="toggleMenu">
      <div :class="['line', { 'line-1': isMenuVisible }]"></div>
      <div :class="['line', { 'line-2': isMenuVisible }]"></div>
      <div :class="['line', { 'line-3': isMenuVisible }]"></div>
  </div>
</template>

<script>
export default {
  name: 'HamburgerMenu',
  props: {
      isMenuVisible: {
          type: Boolean,
          required: true,
      },
  },
};
</script>

<style scoped>
.hamburger {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 24px;
}

.line {
  width: 100%;
  height: 3px;
  background-color: black;
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
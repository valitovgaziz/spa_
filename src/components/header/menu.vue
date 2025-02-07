<template>
    <div class="menu" v-on:click="toggleMenu">
        <HamburgerMenu />
        <MenuLi />
    </div>
</template>

<style scoped>
.menu {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
}
</style>

<script>
import HamburgerMenu from './toggleMenu.vue';
import MenuLi from './menu-li.vue';

export default {
    name: 'menu',
    components: {
        MenuLi,
        HamburgerMenu,
    },
    data() {
        return {
            isMenuVisible: false,
        }
    },
    mounted() {
        document.addEventListener('click', this.closeMenuIfClickedOutside)
    },
    beforeUnmount() {
        document.removeEventListener('click', this.closeMenuIfClickedOutside)
    },
    methods: {
        toggleMenu() {
            this.isMenuVisible = !this.isMenuVisible;
        },
        closeMenuIfClickedOutside(event) {
            const menuElement = this.$el;
            if (!menuElement.contains(event.target)) {
                this.isMenuVisible = false;
            }
        },
    }

}
</script>
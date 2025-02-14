<template>
    <FHeader />
    <Settings />
    <FooterB />
</template>

<style></style>

<script>
import FHeader from '../components/header/fullHeader.vue';
import FooterB from '../components/footerB/footerB.vue';
import Settings from '../components/settings.vue';

export default {
    components: {
        FHeader,
        FooterB,
        Settings,
    },
};
</script>
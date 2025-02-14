<template>
    <FHeader />
    <LogOut />
    <FooterB />
</template>

<style></style>



<script>
import FHeader from '../components/header/fullHeader.vue';
import FooterB from '../components/footerB/footerB.vue';
import LogOut from '../components/inout/logout.vue';

export default {
    components: {
        FHeader,
        FooterB,
        LogOut,
    },
};
</script>
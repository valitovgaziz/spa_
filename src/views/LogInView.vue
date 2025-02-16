<template>
    <FHeader />
    <LogIn />
    <FooterB />
</template>

<style></style>



<script>
import FHeader from '../components/header/fullHeader.vue';
import FooterB from '../components/footerB/footerB.vue';
import LogIn from '../components/inout/inout.vue';

export default {
    name: 'LogInView',
    components: {
        FHeader,
        LogIn,
        FooterB
    }
}
</script>
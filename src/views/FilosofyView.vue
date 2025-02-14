<template>
    <FHeader />
    <Filosofy />
    <FooterB />
</template>

<style>

</style>

<script>
import FHeader from '../components/header/fullHeader.vue';
import FooterB from '../components/footerB/footerB.vue';
import Filosofy from '../components/filosofy.vue';

export default {
    components: {
        FooterB,
        FHeader,
        Filosofy,
    },
}
</script>
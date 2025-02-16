<template>
    <FHeader />
    <Feetback />
    <FooterB />
</template>

<style></style>



<script>
import FHeader from '../components/header/fullHeader.vue';
import FooterB from '../components/footerB/footerB.vue';
import Feetback from '../components/feetback/feetback.vue';

export default {
    name: 'reviews',
    components: {
        FHeader,
        Feetback,
        FooterB,
    }
}
</script>
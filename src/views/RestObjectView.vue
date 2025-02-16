<template>
    <FHeader />
    <RestObject  :place="mockPlace" />
    <FooterB />
</template>

<style></style>



<script>
import FHeader from '../components/header/fullHeader.vue';
import FooterB from '../components/footerB/footerB.vue';
import RestObject from '../components/restObject/restObject.vue';

export default {
    name: 'restObject',
    components: {
        FHeader,
        RestObject,
        FooterB,
    }
}
</script>
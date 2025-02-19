<template>
    <FHeader />
    <RegistrationComponent />
    <FooterB />
</template>

<style></style>



<script>
import FHeader from '../components/header/fullHeader.vue';
import FooterB from '../components/footerB/footerB.vue';
import RegistrationComponent from '../components/inout/registration.vue';

export default {
    name: 'RegistrationView',
    components: {
        FHeader,
        RegistrationComponent,
        FooterB,
    }
}
</script>
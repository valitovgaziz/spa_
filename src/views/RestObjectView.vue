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
    components: {
        FHeader,
        FooterB,
        RestObject,
    },
    data() {
        return {
            mockPlace: {
                id: 1,
                image: 'https://example.com/image.jpg',
                name: 'Название места',
                type: 'Тип места',
                coordinates: '55.7558° N, 37.6173° E',
                contacts: [
                    { label: 'Телефон', value: '+7 495 123-45-67' },
                    { label: 'Email', value: 'info@example.com' }
                ],
                reviews: [
                    { author: 'Иван Иванов', text: 'Отличное место!' },
                    { author: 'Марина Петрова', text: 'Прекрасный сервис!' }
                ]
            }
        };
    }
};
</script>
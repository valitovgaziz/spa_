<template>
    <div class="about">
        <h1>Freedom & Adventure</h1>
        <p>Приложение для туристов</p>
        <p>Прошу потдержать проект</p>
        <button v-on:click="donat" class="donat-coffee">Донат на кофе</button>
        <img src="./images/photo_2025-01-25_05-57-24.jpg" alt="Донат QRcod" class="QRcod">
    </div>
</template>

<style scoped>
.about {
    background-color: rgb(137, 183, 182);
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.donat-coffee {
    margin: 1rem;
    background-color: rgb(89, 219, 109);
    box-shadow: 0 4px 8px 0 rgba(27, 45, 37, 0.2);
}

.QRcod {
    height: 200px;
    display: flexbox;
}
</style>

<script>
export default {
    methods: {
        donat() {
            window.open("https://www.tinkoff.ru/rm/r_fFXNVwPxmH.VMEQXkfWxO/Ho4MN83486", "_blank");
        }
    }
}
</script>
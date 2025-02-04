<template>
    <div class="search_line">
        <form @submit.prevent="search" id="search_form" name="search_request" action="results">
            <label for="search_input" class="f-item">Путешествия - Свобода - Приключения!</label>
            <input id="search_input" type="text" autofocus placeholder=".   .   ." class="f-item" v-model="query">
            <button type="submit">Искать</button>
        </form>
    </div>
</template>

<style>
.search_line {
    background-color: rgb(135, 222, 152);
    display: flex;
    flex-direction: column;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.f-item {
    margin: 0 0 0.4rem 0;
}
</style>


<script>
export default {
    name: 'serach_line',
    data() {
        return {
            query: ''
        }
    },
    methods: {
        search() {
            this.$router.push('/results');
            console.log(this.query);
        }
    }
}

</script>
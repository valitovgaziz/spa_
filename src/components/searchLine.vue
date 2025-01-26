<template>
    <div class="search_line">
        <form action="HTML/searchResult.html" id="search_form" name="search_request" target="_self">
            <label for="search_input">Введите желаемый вид отдыха</label>
            <input id="search_input" type="text" autofocus placeholder=".   .   .">
        </form>
    </div>
</template>

<style scoped>
.search_line {
    background-color: rgb(135, 222, 152);
    display: flex;
    flex-direction: column;
}
form {
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
}
</style>


<script>
export default {
    name: 'serach_line',
}
</script>
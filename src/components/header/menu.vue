<template>
    <div class="menu" v-on:click="OpenClose">
        <img src="../images/icons/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" alt="menu" id="img-m">

        <ul id="ul-m">
            <li><router-link to="/profile">Профиль</router-link></li>
            <li>Настройки</li>
            <li><router-link to="/about">О нас</router-link></li>
            <li><router-link to="/support">Написать в техпотдержку</router-link></li>
            <li> <router-link to="/feetback">Оставить отзыв</router-link></li>
            <li>Вход/Выход</li>
        </ul>

    </div>
</template>

<style scoped>
.menu {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

#img-m {
    height: 100%;
    border: solid 1px rgb(33, 159, 181);
    border-radius: 1rem;
}

#img-m:hover {
    cursor: pointer;
    background-color: rgb(71, 135, 105);
}

#ul-m {
    visibility: hidden;
    margin: 0 0.5rem 0.5rem 0;
    border: 1px solid;
}

li {
    margin: 3px 0;
    border: solid 1px black;
    border-radius: 1rem;
    padding: 0 0.5rem;
}

li:hover {
    cursor: pointer;
    background-color: rgb(153, 204, 204);
    border-radius: 1rem;
}
</style>

<script>
export default {
    name: 'menu',
    methods: {
        OpenClose: OpenCloseM
    }
}

function OpenCloseM() {
    var ul = document.querySelector('ul');
    if (ul.style.visibility === 'hidden') {
        ul.style.visibility = 'visible';
    } else {
        ul.style.visibility = 'hidden';
    }
}

</script>
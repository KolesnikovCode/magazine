<template>
    <v-bottom-nav app fixed value="true" dark>
        <div class="wrapper">
            <v-icon to="/">shopping_cart</v-icon>
            <div class="text">
                <p>В вашей <a href="/">корзине</a>: {{ itemsInCart }} товаров</p>
            </div>
        </div>
    </v-bottom-nav>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        itemsInCart() {
            return this.$store.state.basket
        }
    }
}
</script>

<style scoped>
.wrapper {
    cursor: default;
    background-color: #3F52B5;
    display: flex;
    justify-content: center;
    align-items: center;
}

.text {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin-top: 19px;
}

.text a {
    color: #fff;
}
</style>

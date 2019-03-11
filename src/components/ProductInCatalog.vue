<template>
    <v-layout class="item">
        <v-flex xs6 sm6 md4 lg3 d-inline-flex>
            <transition name="fade">
            <v-card>
                <v-img
                :src="img"
                aspect-ratio="1.8"
                ></v-img>
                <div class="discript">
                    <p>{{title}}</p> <span class="price">{{price}} &#x20bd;</span>
                </div>
                <p class="bottom__discr">{{description}}</p>
                <div class="bottomLine">
                    <span>Количество</span>
                    <input type="number" id="numberOfItems" v-model="counter">
                    <v-btn color="indigo" dark @click="addToCart">В корзину</v-btn>
                </div>
            </v-card>
            </transition>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    props: {
        img: String,
        title: String,
        price: String,
        description: String
    },
    data() {
        return {
            counter: 1
        }
    },
    methods: {
        addToCart() {
            this.$store.commit('addToBasket', this.counter)
        }
    }
}
</script>

<style scoped>
.item {
    margin: 0 .5em 0 .5em;
}

.discript {
    display: flex;
    justify-content: space-around;
    margin-top: 1em;
    font-size: 1.4em;
}

.bottom__discr {
    padding: 0 1em 0 1em;
    text-align: center;
}

.bottomLine {
    display: flex;
    justify-content: space-between;
    padding: 0 1em 0 2em;
    align-items: center;
}

#numberOfItems {
    width: 3em;
    height: 2.5em;
    border: 1px solid gray;
    text-align: center;
}

/* Fade in-out effect */
.fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>

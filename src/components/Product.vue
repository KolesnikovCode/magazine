<template>
  <v-layout>
    <v-flex xs10 sm8 md6 lg4 offset-lg4 offset-xs1 offset-sm2 offset-md3 class="item"  @click="viewDetails = !viewDetails">
        <v-card>
            <v-img
          :src="img"
          aspect-ratio="2"
        ></v-img>
        <div class="description">
            <h3 class="headline mb-0">{{ title }}</h3>
            <span class="price">{{ price }} &#x20bd;</span>
        </div>
        <transition name="fade" mode="in-out">
            <p v-if="viewDetails" class="details">{{ details }}</p>
        </transition>
        </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
    props: {
        img: String,
        title: String,
        price: String,
        details: String
    },
    data() {
        return {
            viewDetails: false
        }
    },
}
</script>

<style scoped>
.item {
    cursor: pointer;
}

.item:hover {
    border: 1px solid #b6b6b6;
}

.description {
    display: flex;
    justify-content: space-between;
    padding: 0 1em 0 1em;
}

.price {
    font-size: 1.6em;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}

.details {
    font-size: 1.2em;
    padding: 0 1.2em 0 1.2em;
    margin: 0;
}
</style>

<template>
    <div class="wrapper">
        <v-content>
            <h1>Cвежие поступления</h1>
            <transition name="fade">
                <div v-if="show" class="content">
                    <Product 
                    class="product" 
                    img="http://www.magazinultau.ro/files/2017/10/ke_prod_0129287001357213169.big_.jpg" 
                    title="Super Cool 1000"
                    price="1499"
                    details="Модель начального уровня. Увеличивает приток воздуха к элементам охлаждения ноутбука"
                    />
                    <Product 
                    class="product" 
                    img="https://fora.kz/images/content/products/590083/primary_cooler-master-notepal-i300-r9-nbc-300l-gp-green-light9bdd44949d5117509fe081a7af11d424.jpg" 
                    title="Super Cool 2000"
                    price="1999"
                    details="Модель среднего уровня. Обеспечивает оптимальное охлаждение сохраняя низкий уровень шума"
                    />
                    <Product class="product"
                    img="https://www.notebook.hu/notebook.hu/default/cache/images/product/800_600/9/6/96036-2.jpg" 
                    title="Super Cool 3000"
                    price="2999"
                    details="Флагманская модель Super Cool 3000. Обеспечивает наилучшее охлаждение при минимальном уровне шума"
                    />
                </div>
            </transition>
            <div class="btn">
                <v-btn color="indigo" dark to="/products">Перейти в каталог</v-btn>
            </div>
        </v-content>
    </div>
</template>

<script>
import Product from '@/components/Product.vue'
export default {
    components: {
        Product
    },
    data() {
        return {
            show: false,
        }
    },
    mounted() {
        this.show = !this.show
    },
    methods: {
        routeToProducts() {
            this.$router.push('/sss')
        }
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
    margin-top: 1em;
    margin-bottom: 2em;
    cursor: default;
}

.product {
    margin-top: 1em;
}

.content {
    display: flex;
    flex-direction: column-reverse;
}

.wrapper {
    margin-bottom: 4em;
}

.btn {
    display: flex;
    justify-content: center;
    margin-top: 2em;
}

/* Fade in-out effect */
.fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>

<template>
    <div class="wrapper">
        <v-layout>
            <transition name="fade">
                <v-content v-if="showed">
                    <h1>Показать варианты</h1>
                    <div class="buttons">
                        <v-btn @click="showOnlyWithLights">С подсветкой</v-btn>
                        <v-btn @click="showOnlyWithoutLights">Без подсветки</v-btn>
                        <v-btn @click="showAll">Все</v-btn>
                    </div>
                            <v-flex justify-start row fill-height offset-lg2 offset-md2 offset-sm3 offset-xs1>
                                <v-container class="container">
                                <ProductInCatalog 
                                img="https://img.ktc.ua/img/base/1/4/18524.jpg"
                                title="Super Cool 3000"
                                price="2999"
                                description="Флагманская модель Super Cool 3000. Обеспечивает наилучшее охлаждение при минимальном шуме"
                                v-if="isVisibleNoLight"
                                class="item"
                                />
                                <ProductInCatalog 
                                img="https://fora.kz/images/content/products/590083/primary_cooler-master-notepal-i300-r9-nbc-300l-gp-green-light9bdd44949d5117509fe081a7af11d424.jpg"
                                title="Super Cool 2000"
                                price="1999"
                                v-if="isVisibleLight"
                                description="Модель среднего уровня. Обеспечивает оптимальное охлаждение сохраняя низкий уровень шума"
                                />
                                <ProductInCatalog 
                                img="http://www.magazinultau.ro/files/2017/10/ke_prod_0129287001357213169.big_.jpg"
                                title="Super Cool 1499"
                                price="1999"
                                v-if="isVisibleNoLight"
                                description="Модель среднего уровня. Обеспечивает оптимальное охлаждение сохраняя низкий уровень шума"
                                />
                                <ProductInCatalog 
                                img="https://img.ktc.ua/img/base/1/4/18524.jpg"
                                title="Super Cool 3000"
                                price="2999"
                                v-if="isVisibleNoLight"
                                description="Флагманская модель Super Cool 3000. Обеспечивает наилучшее охлаждение при минимальном шуме"
                                />
                                <ProductInCatalog 
                                img="https://fora.kz/images/content/products/590083/primary_cooler-master-notepal-i300-r9-nbc-300l-gp-green-light9bdd44949d5117509fe081a7af11d424.jpg"
                                title="Super Cool 2000"
                                price="1999"
                                v-if="isVisibleLight"
                                description="Модель среднего уровня. Обеспечивает оптимальное охлаждение сохраняя низкий уровень шума"
                                />
                                <ProductInCatalog 
                                img="http://www.magazinultau.ro/files/2017/10/ke_prod_0129287001357213169.big_.jpg"
                                title="Super Cool 1499"
                                price="1999"
                                v-if="isVisibleNoLight"
                                description="Модель среднего уровня. Обеспечивает оптимальное охлаждение сохраняя низкий уровень шума"
                                />
                                <ProductInCatalog 
                                img="https://img.ktc.ua/img/base/1/4/18524.jpg"
                                title="Super Cool 3000"
                                price="2999"
                                v-if="isVisibleNoLight"
                                description="Флагманская модель Super Cool 3000. Обеспечивает наилучшее охлаждение при минимальном шуме"
                                />
                                <ProductInCatalog 
                                img="https://fora.kz/images/content/products/590083/primary_cooler-master-notepal-i300-r9-nbc-300l-gp-green-light9bdd44949d5117509fe081a7af11d424.jpg"
                                title="Super Cool 2000"
                                price="1999"
                                v-if="isVisibleLight"
                                description="Модель среднего уровня. Обеспечивает оптимальное охлаждение сохраняя низкий уровень шума"
                                />
                                <ProductInCatalog 
                                img="http://www.magazinultau.ro/files/2017/10/ke_prod_0129287001357213169.big_.jpg"
                                title="Super Cool 1499"
                                price="1999"
                                v-if="isVisibleNoLight"
                                description="Модель среднего уровня. Обеспечивает оптимальное охлаждение сохраняя низкий уровень шума"
                                />
                                <ProductInCatalog 
                                img="https://img.ktc.ua/img/base/1/4/18524.jpg"
                                title="Super Cool 3000"
                                price="2999"
                                v-if="isVisibleNoLight"
                                description="Флагманская модель Super Cool 3000. Обеспечивает наилучшее охлаждение при минимальном шуме"
                                />
                                <ProductInCatalog 
                                img="http://www.magazinultau.ro/files/2017/10/ke_prod_0129287001357213169.big_.jpg"
                                title="Super Cool 1499"
                                price="1999"
                                v-if="isVisibleNoLight"
                                description="Модель среднего уровня. Обеспечивает оптимальное охлаждение сохраняя низкий уровень шума"
                                />
                                <ProductInCatalog 
                                img="https://img.ktc.ua/img/base/1/4/18524.jpg"
                                title="Super Cool 3000"
                                price="2999"
                                v-if="isVisibleNoLight"
                                description="Флагманская модель Super Cool 3000. Обеспечивает наилучшее охлаждение при минимальном шуме"
                                />
                                </v-container>
                            </v-flex>
                </v-content>
            </transition>
        </v-layout>
    </div>
</template>

<script>
import ProductInCatalog from '@/components/ProductInCatalog.vue'
export default {
    components: {
        ProductInCatalog
    },
    data() {
        return {
            isVisibleLight: true,
            isVisibleNoLight: true,
            showed: false
        }
    },
    methods: {
        showOnlyWithLights() {
            this.isVisibleLight = true
            this.isVisibleNoLight = false
        },
        showOnlyWithoutLights() {
            this.isVisibleLight = false
            this.isVisibleNoLight = true
        },
        showAll() {
            this.isVisibleLight = true
            this.isVisibleNoLight = true
        }
    },
    mounted() {
        this.showed = true
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
    margin-top: 1em;
}

.buttons {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 1em;
}

.item {
    display: inline;
    margin: 0 1.5em 0 1.5em;
}

/* Fade in-out effect */
.fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>

<template>
<v-content>
    <transition name="fade">
        <div class="delivery" v-if="show">
            <h2>Мы заинтересованы в том, чтобы доставить Ваш заказ в максимально сжатые сроки. Доставляем 7 дней в неделю и 24 часа в сутки.</h2>
            <ul class="list">
                <li><b>Доставка до адреса по линиям метро Москвы и Московской области</b></li>
                    <span>(Стоимость всего от 248 рублей. Для Московской области действует ограничение по удаленности - не более 10 минут от метро, а далее с разумной доплатой (стоимость рассматривается индивидуально в каждом конкретном случае и зависит от дальности расположения и удобства проезда). Если мы не сможем дозвониться до Вас в течение 5 часов (в рабочее время), заказ будет аннулирован. Надеемся на Ваше понимание.)</span>
                <li><b>Бесплатная доставка при заказе от 5000 рублей</b></li>
                    <span>(Условие распростроняется только при доставке по Москве и Московской области)</span>
                <li><b>Возможна доставка сторонними курьерскими службами</b></li>
                    <span>(Стоимость доставки зависит от тарифов выбранной Вами курьерской службы)</span>
            </ul>
        </div>
    </transition>
</v-content>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    },
    mounted() {
        this.show = true
    }
}
</script>

<style scoped>
h2 {
    text-align: center;
    margin-bottom: 2em;
}
.delivery {
    margin-top: 15em;
    font-size: 1em;
}

.list {
    width: 500px;
    margin: 0 auto;
}

/* Fade in-out effect */
.fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>

<template>
<transition name="fade">
    <div class="regForm" v-if="show">
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                    <v-toolbar dark color="indigo">
                        <v-toolbar-title>Регистрация</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                        <v-text-field prepend-icon="person" name="login" label="e-mail" type="text" v-model="email"></v-text-field>
                        <v-text-field id="password" prepend-icon="lock" name="password" label="Пароль" type="password" v-model="password"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" registration>Зарегистрироваться</v-btn>
                    </v-card-actions>
                    </v-card>
                </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </div>
</transition>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            show: false
        }
    },
    mounted() {
        this.show = true
    }
}
</script>

<style scoped>
.regForm {
    margin-top: 15em;
}

/* Fade in-out effect */
.fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>

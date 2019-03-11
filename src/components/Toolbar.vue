<template>
<div>
  <v-navigation-drawer color="indigo" absolute temporary v-model="drawer" class="hidden-md-and-up">
    <v-list>
      <v-list-tile v-for="(item, i) in menuItems" :key="i">
        <v-list-tile-content>
          <v-list-tile-title><router-link :to="item.route">{{ item.text }}</router-link></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar color="indigo" dark app>
    <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-toolbar-title class="toolbar_text">Cooler Mag</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down" v-for="(item, i) in menuItems" :key="i">
      <v-btn flat :to="item.route">{{ item.text }}</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    }
  },
  computed: {
    menuItems() {
      return this.$store.state.userAuth ? [
        {
          text: 'Главная',
          route: '/'
        },
        {
          text: 'Каталог',
          route: '/products'
        },
        {
          text: 'Кабинет',
          route: '/profile'
        },
        {
          text: 'Доставка',
          route: '/delivery'
        },
        {
          text: 'Выход',
          route: '/'
        },
      ] : 
      [
        {
          text: 'Главная',
          route: '/'
        },
        {
          text: 'Каталог',
          route: '/products'
        },
        {
          text: 'Доставка',
          route: '/delivery'
        },
        {
          text: 'Регистрация',
          route: '/reg'
        },
        {
          text: 'Вход',
          route: '/sign'
        },
      ]
    }
  }
}
</script>

<style scoped>

.toolbar_text {
  text-transform: uppercase;
  cursor: default;
}
</style>

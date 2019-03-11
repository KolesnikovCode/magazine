<template>
  <div id="app">
    <v-app>
      <Toolbar />
      <router-view></router-view>
      <BottomBar />
    </v-app>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue'
import BottomBar from './components/BottomBar'

export default {
  name: 'App',
  components: {
    Toolbar,
    BottomBar
  },
  data () {
    return {
      //
    }
  }
}
</script>

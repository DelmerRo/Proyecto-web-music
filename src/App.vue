<template>
  <div id="app">
    <div class="jumbotron">
    <NavBar></NavBar>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>

</style>

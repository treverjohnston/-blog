<template>
  <div id="app">
    <div>
      <!-- New <a> tag -->
      <router-link :to="{name: 'Home'}">Home</router-link>
      <router-link :to="{name: 'Blogs'}">Blogs</router-link>
    </div>
    <hr>
    <router-view></router-view>
    <hr>
    <footer>
      Footer goes here
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }

  

</script>

<style>

</style>
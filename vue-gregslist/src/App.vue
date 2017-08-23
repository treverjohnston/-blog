<template>
  <div id="app">
    <top></top>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
  import Foot from './components/Foot'
  import Top from './components/Top'

  export default {
    name: 'app',
    components: {
            Foot,
            Top
        }
  }

  

</script>

<style>
  body{
    font-family: 'PT Sans', sans-serif;
    background-color: #f2f2f2;
  }

  a{
    color: black;
  }

  hr{
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}


.para{
        text-align: justify;
    }
</style>
<template>
  <div id="app">
    <router-view/>
    <Footernav/>
  </div>
</template>
<script>
  import  Footernav from "./components/FooterNav/Footernav.vue"
  export default {
    components:{
      Footernav
    }
  }
</script>

<style>

</style>

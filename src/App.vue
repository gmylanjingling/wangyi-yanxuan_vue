<template>
  <div id="app">
    <router-view/>
    <Footernav/>
  </div>
</template>
<script>
  import axios from 'axios'
  import  Footernav from "./components/FooterNav/Footernav.vue"

  export default {
    mounted () {
      console.log(this)
      this.$store.dispatch('getHome')


    },
 components: {
   Footernav
 }
 }
</script>

<style>

</style>

<template>
    <div id="app">
      <app-header></app-header>
      <router-view/>
      <app-footer></app-footer>
    </div>
</template>

<script>
 import AppHeader from './components/AppHeader.vue'
 import AppFooter from './components/AppFooter.vue'
 export default {
     name: 'App',
     components: { AppHeader, AppFooter}
}
</script>

<style>
body {
    /* font-size: 16px;
    padding: 20px 100px 0px 100px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif; */
    margin: 150px 0 50px 0;
    padding: 0;
    background: url(./assets/piano1_bw.jpg) no-repeat center fixed;
    background-size: cover;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
}
</style>
<template>
  <div id="app">
    <router-link to="/">
      <img class="logo" alt="Vue logo" src="./assets/img/ballon2.png">
    </router-link>
    <!-- Content -->
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  @import './assets/css/app.css';
</style>

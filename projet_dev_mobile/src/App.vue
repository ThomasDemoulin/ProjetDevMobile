<template>
  <div id="app">
    <img class="logo" alt="Vue logo" src="./assets/img/ballon2.png">
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

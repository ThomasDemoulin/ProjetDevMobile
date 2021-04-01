<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        CECI EST LE CALENDRIER DE {{idChampionnat}}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Calendrier",
  props:{
      idChampionnat: Number,
  },
};
</script>

<style>
  @import '../assets/css/calendrier.css';
</style>

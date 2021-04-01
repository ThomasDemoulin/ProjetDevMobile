<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        CECI EST LE CLASSEMENT DE {{idChampionnat}}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Classement",
  props:{
      idChampionnat: Number,
  },
};
</script>

<style>
  @import '../assets/css/classement.css';
</style>

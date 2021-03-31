<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <SelectionChampionnat/>
      </div>
    </div>
  </section>
</template>

<script>
import SelectionChampionnat from './SelectionChampionnat.vue';
export default {
  components: { SelectionChampionnat },
  name: "Classement",
};
</script>

<style>
  @import '../assets/css/classement.css';
</style>

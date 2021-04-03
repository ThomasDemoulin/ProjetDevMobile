<template>
  <section class="hero homepage">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Application Football
        </h1>
        <h2>
          Venez voir les derniers résultats de votre équipe préférée !
        </h2>
        <div class="columns">
          <div class="column">
            <router-link :to="{name: 'SelectionChampionnat', params: { mode: 'calendrier' }}" tag="button" class="button">
              Calendrier
            </router-link>
          </div>
          <div class="column">
            <router-link :to="{name: 'SelectionChampionnat', params: { mode: 'classement' }}" tag="button" class="button">
              Classement
            </router-link>
          </div>
          <div class="column">
            <router-link to="/todo" tag="button" class="button">
              TODO
            </router-link>
          </div>
          <div class="column">
            <router-link to="/todo" tag="button" class="button">
              TODO
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style>
  @import '../assets/css/homepage.css';
</style>

<template>
  <section class="hero calendrier">
    <div class="hero-body">
      <div class="container">
        CALENDRIER : {{calendrier.competition?.name}}
        <div v-for="match in calendrier.matches" :key="match.id">
          Journée {{match.matchday}} : {{match.homeTeam.name}} {{match.score.fullTime.homeTeam}} - {{match.score.fullTime.awayTeam}} {{match.awayTeam.name}}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  name: "Calendrier",
  props:{
      idChampionnat: Number,
  },
  data(){
      return{
          calendrier:{}
      }
  },
  mounted() {
    const url = "http://api.football-data.org/v2/competitions/" + this.idChampionnat + "/matches";
    axios
      .get(url, {
            headers: {
                'X-Auth-Token': '172572c9c3c44a3aa525d5fa18cd5457' //the token is a variable which holds the token
            },
        }
      )
      .then((response) => {
        this.calendrier = response.data;
        console.log(response);
      })
      .catch((error) => {
        console.log(error); // TODO : FAIRE UN TOAST CAPACITOR (Premier plugin)
      });
  },
};
</script>

<style>
  @import '../assets/css/calendrier.css';
</style>

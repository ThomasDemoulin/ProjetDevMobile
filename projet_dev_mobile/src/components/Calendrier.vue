<template>
  <section class="hero calendrier">
    <div class="hero-body">
      <div class="container">
        CALENDRIER : {{calendrier?.competition?.name}} / Journée {{currentMatchday}}
        <table class="table">
          <thead>
            <tr>
              <th style="color: white; text-align: right" class="domicileColonne">Equipe Domicile</th>
              <th style="color: white; text-align: center" class="scoreColonne">Score</th>
              <th style="color: white; text-align: left" class="exterieurColonne">Equipe Extérieur</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="match in calendrier?.matches" :key="match?.id">
              <td style="text-align: right" class="domicileColonne">{{match?.homeTeam?.name}}</td>
              <td style="text-align: center" class="scoreColonne">{{match?.score?.fullTime?.homeTeam}} - {{match?.score?.fullTime?.awayTeam}}</td>
              <td style="text-align: left" class="exterieurColonne">{{match?.awayTeam?.name}}</td>
            </tr>
          </tbody>
        </table>
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
      currentMatchday: Number,
  },
  data(){
      return{
          calendrier:{}
      }
  },
  mounted() {
    const url = "http://api.football-data.org/v2/competitions/" + this.idChampionnat + "/matches?matchday=" + this.currentMatchday;
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

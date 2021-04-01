<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        CLASSEMENT : {{classement.competition.name}}
        <div v-for="position in classement.standings[0].table"
            :key="position.team.id">
          {{position.team.name}}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Classement",
  props:{
      idChampionnat: Number,
  },
  data(){
      return{
          classement:[]
      }
  },
  mounted() {
    const url = "http://api.football-data.org/v2/competitions/" + this.idChampionnat + "/standings";
    axios
      .get(url, {
            headers: {
                'X-Auth-Token': '172572c9c3c44a3aa525d5fa18cd5457' //the token is a variable which holds the token
            },
        }
      )
      .then((response) => {
        this.classement = response.data;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
  @import '../assets/css/classement.css';
</style>

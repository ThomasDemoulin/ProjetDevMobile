<template>
  <section class="hero classement">
    <div class="hero-body">
      <div class="container">
        CLASSEMENT : {{classement?.competition?.name}}
        <table class="table">
          <thead>
            <tr>
              <th style="color: white"><abbr title="Position">Pos</abbr></th>
              <th style="color: white">Equipe</th>
              <th style="color: white"><abbr title="Journées">Jou</abbr></th>
              <th style="color: white"><abbr title="Victoires">V</abbr></th>
              <th style="color: white"><abbr title="Nuls">N</abbr></th>
              <th style="color: white"><abbr title="Défaites">D</abbr></th>
              <th style="color: white"><abbr title="Buts pour">BP</abbr></th>
              <th style="color: white"><abbr title="Buts contre">BC</abbr></th>
              <th style="color: white"><abbr title="Difference">Diff</abbr></th>
              <th style="color: white"><abbr title="Points">Pts</abbr></th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th><abbr title="Position">Pos</abbr></th>
              <th>Equipe</th>
              <th><abbr title="Journées">Jou</abbr></th>
              <th><abbr title="Victoires">V</abbr></th>
              <th><abbr title="Nuls">N</abbr></th>
              <th><abbr title="Défaites">D</abbr></th>
              <th><abbr title="Buts pour">BP</abbr></th>
              <th><abbr title="Buts contre">BC</abbr></th>
              <th><abbr title="Difference">Diff</abbr></th>
              <th><abbr title="Points">Pts</abbr></th>
            </tr>
          </tfoot>
          <tbody>
            <tr v-for="(equipe, position) in classement?.standings?.[0]?.table" :key="position?.team?.id">
              <th>{{position + 1}}</th>
              <td>{{equipe?.team?.name}}</td>
              <td>{{equipe?.playedGames}}</td>
              <td>{{equipe?.won}}</td>
              <td>{{equipe?.draw}}</td>
              <td>{{equipe?.lost}}</td>
              <td>{{equipe?.goalsFor}}</td>
              <td>{{equipe?.goalsAgainst}}</td>
              <td>{{equipe?.goalDifference}}</td>
              <td>{{equipe?.points}}</td>
            </tr>
          </tbody>
        </table>
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
        console.log(error); // TODO : FAIRE UN TOAST CAPACITOR (Premier plugin)
      });
  },
};
</script>

<style>
  @import '../assets/css/classement.css';
</style>

<template>
  <section class="hero classement">
    <div class="hero-body">
      <div class="container">
        CLASSEMENT : {{response?.competition?.name}}
        <table class="table" v-for="classement in groupesAAfficher" :key="classement?.group">
          <thead>
            <tr>
              <th v-bind:style="blancStyle"><abbr title="Position">Pos</abbr></th>
              <th v-bind:style="blancStyle">Equipe</th>
              <th v-bind:style="blancStyle"><abbr title="Journées">Jou</abbr></th>
              <th v-bind:style="blancStyle"><abbr title="Victoires">V</abbr></th>
              <th v-bind:style="blancStyle"><abbr title="Nuls">N</abbr></th>
              <th v-bind:style="blancStyle"><abbr title="Défaites">D</abbr></th>
              <th v-bind:style="blancStyle"><abbr title="Buts pour">BP</abbr></th>
              <th v-bind:style="blancStyle"><abbr title="Buts contre">BC</abbr></th>
              <th v-bind:style="blancStyle"><abbr title="Difference">Diff</abbr></th>
              <th v-bind:style="blancStyle"><abbr title="Points">Pts</abbr></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(equipe, position) in classement?.table" :key="equipe?.team?.id">
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
import { Plugins } from '@capacitor/core';
const { Toast } = Plugins;

export default {
  name: "Classement",
  props:{
      idChampionnat: Number,
  },
  data(){
      return{
          response:[],
          groupesAAfficher: [],
          blancStyle: {
            'color': 'white',
          },
      }
  },
  methods: {
    async toastErreurAPI(error) {
      await Toast.show({
        duration: 'long',
        text: 'L\'appel API n\'a pas pu être effectué : l\'API nous limite à 10 requêtes gratuites par minute ! ' + error
      });
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
        this.response = response.data;
        response.data.standings.forEach(classement => {
          if (classement?.type === 'TOTAL') {
            this.groupesAAfficher.push(classement);
          }
        });
        console.log(response);
      })
      .catch((error) => {
        this.toastErreurAPI(error);
        console.log(error);
      });
  },
};
</script>

<style>
  @import '../assets/css/classement.css';
</style>

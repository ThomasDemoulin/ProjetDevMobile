<template>
  <section class="hero championnat">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-multiline">
            <Championnat
            v-for="championnat in championnats"
            :key="championnat.id"
            class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen"
            :championnat="championnat"
            :mode="mode"
            />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Championnat from './Championnat.vue';
import { Plugins } from '@capacitor/core';
const { Toast } = Plugins;

export default {
  components: { Championnat },
  name: "SelectionChampionnat", 
  data(){
      return{
          championnats:[]
      }
  },
  props: {
      mode: String,
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
    axios
      .get(
        "http://api.football-data.org/v2/competitions?plan=TIER_ONE", {
            headers: {
              'X-Auth-Token': 'df3bab244ac64d57971819531df71b8a' //the token is a variable which holds the token
            }
        }
      )
      .then((response) => {
        this.championnats = response.data.competitions;
        console.log(this.championnats);
      })
      .catch((error) => {
        this.toastErreurAPI(error);
        console.log(error);
      });
  },
};
</script>

<style>
  @import '../assets/css/selectionChampionnat.css';
</style>

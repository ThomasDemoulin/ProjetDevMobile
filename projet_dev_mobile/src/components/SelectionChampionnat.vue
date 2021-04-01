<template>
  <section class="hero">
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
  mounted() {
    axios
      .get(
        "http://api.football-data.org/v2/competitions?plan=TIER_ONE", {
            headers: {
                'X-Auth-Token': '172572c9c3c44a3aa525d5fa18cd5457' //the token is a variable which holds the token
            }
        }
      )
      .then((response) => {
        this.championnats = response.data.competitions;
        console.log(this.championnats);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
  @import '../assets/css/selectionChampionnat.css';
</style>

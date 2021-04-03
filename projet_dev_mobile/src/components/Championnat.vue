<template>
    <router-link :to="{name: 'Classement', params: { idChampionnat: championnat.id }}" v-if="mode === 'classement'" class="card">
        <div class="card-content">
            <div class="media">
            <div class="media-content">
                <p class="title is-4">{{ championnat.name }}</p>
                <p class="subtitle is-6">{{ championnat.area.name }}</p>
            </div>
            </div>
        </div>
    </router-link>
    <router-link :to="{name: 'Calendrier', params: { idChampionnat: championnat.id, currentMatchday: championnat.currentSeason?.currentMatchday }}" v-else class="card">
        <div class="card-content">
            <div class="media">
            <div class="media-content">
                <p class="title is-4">{{ championnat.name }}</p>
                <p class="subtitle is-6">{{ championnat.area.name }}</p>
            </div>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: "Championnat",
    props:{
        championnat:{},
        mode: String,
    }
};
</script>

<style>
  @import '../assets/css/championnat.css';
</style>

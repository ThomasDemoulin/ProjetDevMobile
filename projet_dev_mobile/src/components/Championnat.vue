<template>
   <div class="card">
        <div class="card-content">
            <div class="media">
            <div class="media-content">
                <p class="title is-4">{{ championnat.name }}</p>
                <p class="subtitle is-6">{{ championnat.area.name }}</p>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Championnat",
    props:{
        championnat:{},
    }
};
</script>

<style>
  @import '../assets/css/championnat.css';
</style>

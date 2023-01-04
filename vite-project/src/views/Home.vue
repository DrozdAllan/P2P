<template>
  <div>
    <div class="q-py-md text-h4">
      These are the games that went from playstation consoles to PC
    </div>
    <div class="row justify-center q-gutter-md q-mx-none">
      <q-card v-for="game in results" flat bordered style="width: 310px">
        <q-card-section class="text-weight-bold">
          {{ game.attributes.title }}
        </q-card-section>
        <q-card-section class="q-pa-none">
          <q-img width="200px"
                 :src="`http://localhost:1337${game.attributes.image.data.attributes.formats.small.url}`"/>
        </q-card-section>
        <q-card-section class="lineClamp">
          {{ game.attributes.description }}
        </q-card-section>
        <q-card-section>
          <q-btn color="primary" unelevated no-caps class="text-weight-bold" :to="`/game/${game.id}`">Read more</q-btn>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref, onBeforeMount} from 'vue'
import shave from "shave";

const api = import.meta.env.VITE_API_URL;

const name: string = 'Allan';
const results = ref(null);

onBeforeMount(() => {
  console.log(api + '/games');
  fetch(api + '/games?fields=title,description&populate=image&sort=pcReleaseDate:desc').then((response) => response.json()).then((data) =>
      results.value = data.data);
})
</script>

<style>
.lineClamp {
  height: 300px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
}
</style>

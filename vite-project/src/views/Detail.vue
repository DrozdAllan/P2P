<template>
  <div class="col">
    <div class="row">
      <div v-if="loading">LOADING</div>
      <div v-else flat bordered class="col-3 q-ma-md">
        {{ result.attributes.title }}
      </div>
    </div>
    <div class="v-row">
      <!--TODO: erreur dans la console sur les 2 release date-->
      Playstation release :<br> {{ result.attributes.pcReleaseDate }}


      <q-card-section class="q-pa-none">
        <q-img width="200px"
               :src="`http://localhost:1337${result.attributes.image.data.attributes.formats.small.url}`"/>
      </q-card-section>

      PC release :<br> {{ result.attributes.playstationReleaseDate }}
    </div>
    <div class="v-row">

      {{ result.attributes.description }}

    </div>
  </div>

</template>
<script setup lang="ts">
import {ref, onBeforeMount} from 'vue'
import {useRoute} from 'vue-router';

const api = import.meta.env.VITE_API_URL;

const name = ref<string>('Allan');
const loading = ref(true);
const result = ref(null);

onBeforeMount(async () => {
  await fetch(api + '/games/' + useRoute().params.id + '?populate=image').then((response) => response.json()).then((data) => result.value = data.data);
  loading.value = false;
})
</script>

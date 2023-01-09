<template>
  <div v-if="result" class="col">
    <div class="row justify-center">
      <div class="q-ma-md text-h4">
        {{ result.attributes.title }}
      </div>
    </div>

    <div class="row flex-center q-ma-md">
      <div class="col-4">
        Release date on Playstation :<br> {{ result.attributes.pcReleaseDate }}
      </div>
      <div class="col-4">
        <q-img width="350px" class="rounded-borders"
               :src="`http://localhost:1337${result.attributes.image.data.attributes.formats.small.url}`"/>
      </div>
      <div class="col-4"> Release date on PC :<br> {{ result.attributes.playstationReleaseDate }}</div>
    </div>

    <div class="row flex-center">
      <div class="col-6">
        {{ result.attributes.description }}
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
import {ref, onBeforeMount} from 'vue'
import {useRoute} from 'vue-router';
import {useHead} from "@vueuse/head";

const api = import.meta.env.VITE_API_URL;

const result = ref(null);

onBeforeMount(async () => {
  await fetch(api + '/games/' + useRoute().params.id + '?populate=image')
      .then(response => response.json())
      .then(response => {
        useHead({
          title: `P2P - ${response.data.attributes.title}`
        });
        result.value = response.data;
      });
});
</script>

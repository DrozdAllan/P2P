<template>
  <!--  TODO: add page titles with game names-->
  <div class="col">
    <div v-if="!result" class="row">LOADING</div>
    <div v-else class="row justify-center">
      <div class="q-ma-md text-h4">
        <!--      TODO : skeleton -->
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

// TODO: problème lifecycle ? data.attributes cherché trop tot pour le v-if ?
onBeforeMount(() => {
  fetch(api + '/games/' + useRoute().params.id + '?populate=image')
      .then((response) => response.json())
      .then((data) => {
        useHead({
          title: data.data.attributes.title
        });
        return result.value = data.data;
      });
});
</script>

<template>
	 <div>
		  <div class="q-py-md">
				These are the games that went from playstation consoles to PC
		  </div>
		  <div class="row">
				<q-card v-for="game in results" flat bordered class="col-3 q-ma-md">
					 <q-card-section>
						  {{ game.attributes.title }}
					 </q-card-section>
					 <q-separator inset />
					 <q-card-section>
						  Playstation release : {{ game.attributes.pcReleaseDate }} <br> PC release :
						  {{ game.attributes.playstationReleaseDate }}
					 </q-card-section>
					 <q-separator inset />
					 <q-card-section class="ellipsis">
						  {{ game.attributes.description }}
					 </q-card-section>
					 <q-btn class="q-mb-xs" :to="`/game/${game.id}`">read more</q-btn>
				</q-card>
		  </div>
	 </div>
</template>
<script setup lang="ts">
import {ref, onBeforeMount} from 'vue'

const api = import.meta.env.VITE_API_URL;

const name: string ='Allan';
const results = ref(null);

onBeforeMount(() => {
    console.log(api + '/games');
    fetch(api + '/games').then((response) => response.json()).then((data) => results.value = data.data);
})
</script>

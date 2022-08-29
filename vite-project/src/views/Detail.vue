<template>
	 <div>
		  <div class="row">
				<div v-if="loading">LOADING</div>
				<q-card v-else flat bordered class="col-3 q-ma-md">
					 <q-card-section>
						  {{ result.attributes.title }}
					 </q-card-section>
					 <q-separator inset />
					 <q-card-section>
						  Playstation release : {{ result.attributes.pcReleaseDate }} <br> PC release :
						  {{ result.attributes.playstationReleaseDate }}
					 </q-card-section>
					 <q-separator inset />
					 <q-card-section class="ellipsis">
						  {{ result.attributes.description }}
					 </q-card-section>
				</q-card>
		  </div>
	 </div>
</template>
<script setup lang="ts">
import {ref, watch, onMounted} from 'vue'
import {useRoute} from 'vue-router';

const api = import.meta.env.VITE_API_URL;

const name = ref<string>('Allan');
const loading = ref(true);
const result = ref(null);

onMounted(async () => {
    await fetch(api + '/games/' + useRoute().params.id).then((response) => response.json()).then((data) => result.value = data.data);
    loading.value = false;
})
</script>

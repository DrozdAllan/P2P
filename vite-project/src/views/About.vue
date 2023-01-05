<template>
  <div>
    <div class="q-py-md text-h4">
      About this app
    </div>
    <div class="flex-center">
      This app is developed by <a href="https://allandrozd.com/" target="_blank" class="text-weight-bold"
                                  style="text-decoration: none">Allan Drozd</a>
    </div>
  </div>
</template>

<script>
// TODO: régler probleme de titre dans le about
import {useHead} from "@vueuse/head";

useHead({
  title: 'P2P - Playstation To PC'
})
</script>
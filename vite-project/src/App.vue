<template>
	 <q-layout view="hHh lpR fFf">
		  <q-header bordered class="bg-primary text-white">
				<q-toolbar>
          <div class="q-mx-sm">
            P2P : Playstation To PC
          </div>
          <q-separator vertical inset color="white" />
          <router-link to="/" style="text-decoration: none;color: white" class="q-mx-sm">
            Home
          </router-link>
          <q-separator vertical inset color="white" />
          <router-link to="/about" style="text-decoration: none;color: white" class="q-mx-sm">
            About
          </router-link>

				</q-toolbar>
		  </q-header>
		  <q-page-container class="text-center">
				<router-view></router-view>
		  </q-page-container>
	 </q-layout>
</template>

<script setup>
</script>
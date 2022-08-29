<template>
	 <q-layout view="hHh lpR fFf">
		  <q-header bordered class="bg-primary text-white">
				<q-toolbar>
					 <q-toolbar-title>
						  <router-link to="/" style="text-decoration: none;color: white">
								<q-avatar>
									 <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
								</q-avatar>
								P2P : Playstation To PC
					 </router-link>
					 </q-toolbar-title>
				</q-toolbar>
		  </q-header>
		  <q-page-container class="text-center">
				<router-view></router-view>
		  </q-page-container>
	 </q-layout>
</template>


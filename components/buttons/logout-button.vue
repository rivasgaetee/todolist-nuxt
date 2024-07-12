<template>
  <button @click="logout">Logout</button>
</template>

<script setup lang="ts">
import {navigateTo, useNuxtApp} from "#app";
import {useAuthStore} from "~/stores/auth";

const { $auth0 } = useNuxtApp()
const authStore = useAuthStore()

const logout = () => {
  $auth0.logout({
    returnTo: 'http://localhost:3000/login'
  })
  authStore.clearAuth()
}
</script>

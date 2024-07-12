<template>
  <button @click="logout">Logout</button>
</template>

<script setup lang="ts">
import {navigateTo, useNuxtApp} from "#app";

const logout = async () => {
  const { $auth0 } = useNuxtApp()
  await $auth0.logout()
  navigateTo('/login')
}
</script>

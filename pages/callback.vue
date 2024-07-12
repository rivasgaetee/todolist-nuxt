<template>
  <div>Loading...</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { navigateTo, useNuxtApp } from '#app'
const { $auth0 } = useNuxtApp()

onMounted(async () => {
  try {
    await $auth0.handleRedirectCallback()
    const user = await $auth0.getUser()
    const token = await $auth0.getTokenSilently()
    if (user) {
      navigateTo('/profile')
    } else {
      navigateTo('/login')
    }
  } catch (error) {
    console.error('Error handling redirect callback:', error)
    navigateTo('/login');
  }
})
</script>

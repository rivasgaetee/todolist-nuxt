<template>
  <div>Loading...</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { navigateTo, useNuxtApp } from '#app'
import { useAuthStore } from '~/stores/auth'

const { $auth0 } = useNuxtApp()
const authStore = useAuthStore()

onMounted(async () => {
  try {
    await $auth0.handleRedirectCallback()
    const user = await $auth0.getUser()
    const token = await $auth0.getTokenSilently()
    if (user && token) {
      authStore.setUser(user)
      authStore.setToken(token)
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

<template>
  <div v-if="user">
    <h1>Welcome, {{ user.name }}</h1>
    <p>Email: {{ user.email }}</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["auth"]
})
import { ref, onMounted } from 'vue'
import { useNuxtApp } from '#app'
import { useAuthStore } from '~/stores/auth'

const { $auth0 } = useNuxtApp()
const authStore = useAuthStore()
const user = ref(authStore.user)

const logout = () => {
  $auth0.logout({
    returnTo: window.location.origin
  })
  authStore.clearAuth()
}

onMounted(() => {
  user.value = authStore.user
})
</script>

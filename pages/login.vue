<template>
  <div>
    <button @click="login">Login</button>
    <button @click="logout">Logout</button>
    <div v-if="user">
      <p>Welcome, {{ user.name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useNuxtApp } from '#app'

const { $auth0 } = useNuxtApp()
const user = ref<any>(null)

const login = async () => {
  await $auth0.loginWithRedirect()
}

const logout = () => {
  $auth0.logout({
    returnTo: window.location.origin
  })
}

const getUser = async () => {
  user.value = await $auth0.getUser()
}

onMounted(() => {
  getUser()
})
</script>

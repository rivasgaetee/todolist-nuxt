<template>
  <div>
    <button @click="login">Login</button>
    <logout-button></logout-button>
    <div v-if="user">
      <p>Welcome, {{ user.name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useNuxtApp } from '#app'
import LogoutButton from "~/components/buttons/logout-button.vue";

const { $auth0 } = useNuxtApp()
const user = ref<any>(null)

const login = async () => {
  await $auth0.loginWithRedirect()
}

const getUser = async () => {
  user.value = await $auth0.getUser()
}

onMounted(() => {
  getUser()
})
</script>

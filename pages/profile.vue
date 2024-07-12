<template>
  <div v-if="user">
    <h1>Welcome, {{ user.name }}</h1>
    <p>Email: {{ user.email }}</p>
    <logout-button></logout-button>
  </div>
</template>

<script setup lang="ts">
import LogoutButton from "~/components/buttons/logout-button.vue";

definePageMeta({
  middleware: ["auth"]
})
import { ref, onMounted } from 'vue'
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const user = ref(authStore.user)

onMounted(() => {
  user.value = authStore.user
})
</script>

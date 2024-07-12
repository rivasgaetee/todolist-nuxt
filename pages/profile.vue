<template>
  <div v-if="user">
    <h1>Welcome, {{ user.name }}</h1>
    <p>Email: {{ user.email }}</p>
    <logout-button></logout-button>
    <hr>
    <div v-if="loading">Loading tasks...</div>
    <div v-if="error">{{ error }}</div>
    <ul v-if="tasks.length">
      <li v-for="task in tasks" :key="task.id">{{ task.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import LogoutButton from "~/components/buttons/logout-button.vue";

definePageMeta({
  middleware: ["auth"]
})
import { ref, onMounted } from 'vue'
import { useAuthStore } from '~/stores/auth'
import { useTasks } from '~/composables/useTasks'

const authStore = useAuthStore()
const user = ref(authStore.user)

const { tasks, loading, error, fetchTasks } = useTasks()

onMounted(() => {
  user.value = authStore.user
  user.value = authStore.user
  if (user.value) {
    fetchTasks()
  }
})
</script>

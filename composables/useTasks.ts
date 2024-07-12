import { ref } from 'vue'
import { getTasks } from '~/services/tasks'

export const useTasks = () => {
  const tasks = ref<any[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchTasks = async () => {
    loading.value = true
    error.value = null
    try {
      tasks.value = await getTasks()
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return {
    tasks,
    loading,
    error,
    fetchTasks
  }
}

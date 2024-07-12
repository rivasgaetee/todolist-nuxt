import { apiService } from './api'

export const getTasks = () => {
  return apiService.get('/tasks/')
}

export const createTask = (task: any) => {
  return apiService.post('/tasks', task)
}

export const updateTask = (id: string, task: any) => {
  return apiService.put(`/tasks/${id}`, task)
}

export const deleteTask = (id: string) => {
  return apiService.delete(`/tasks/${id}`)
}

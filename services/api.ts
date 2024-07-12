import { useAuthStore } from '~/stores/auth'

const apiBaseUrl = 'http://localhost:8000/api'

const getHeaders = () => {
  const authStore = useAuthStore()

  if (!authStore.token) {
    throw new Error('No token available')
  }

  return {
    'Authorization': `Bearer ${authStore.token}`,
    'Content-Type': 'application/json'
  }
}

const request = async (endpoint: string, options: RequestInit = {}) => {
  const response = await fetch(`${apiBaseUrl}${endpoint}`, {
    ...options,
    headers: {
      ...getHeaders(),
      ...options.headers
    }
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'API request failed')
  }

  return response.json()
}

export const apiService = {
  get: (endpoint: string) => request(endpoint),
  post: (endpoint: string, data: any) => request(endpoint, {
    method: 'POST',
    body: JSON.stringify(data)
  }),
  put: (endpoint: string, data: any) => request(endpoint, {
    method: 'PUT',
    body: JSON.stringify(data)
  }),
  delete: (endpoint: string) => request(endpoint, {
    method: 'DELETE'
  })
}

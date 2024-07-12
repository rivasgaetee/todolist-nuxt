import { defineStore } from 'pinia'

// TODO: DEFINIR TIPO DE USUARIO
export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as any | null,
    token: null as string | null,
  }),
  actions: {
    setUser(user: any) {
      localStorage.setItem('user', JSON.stringify(user))
      this.user = user
    },
    setToken(token: string) {
      localStorage.setItem('token', token)
      this.token = token
    },
    getUser() {
      const user = localStorage.getItem('user')
      if (user) {
        this.user = JSON.parse(user)
      }
    },
    getToken() {
      const token = localStorage.getItem('token')
      if (token) {
        this.token = token
      }
    },
    clearAuth() {
      this.user = null
      this.token = null
    }
  }
})

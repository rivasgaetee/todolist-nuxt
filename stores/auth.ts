import { defineStore } from 'pinia'

// TODO: DEFINIR TIPO DE USUARIO
export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as any | null,
    token: null as string | null,
  }),
  actions: {
    setUser(user: any) {
      console.log('user', user);
      this.user = user
    },
    setToken(token: string) {
      console.log('token', token);
      this.token = token
    },
    clearAuth() {
      this.user = null
      this.token = null
    }
  }
})

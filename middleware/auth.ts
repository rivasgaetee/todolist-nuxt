import { defineNuxtRouteMiddleware, navigateTo, useNuxtApp } from '#imports'

export default defineNuxtRouteMiddleware((to, from) => {
  const { $auth0 } = useNuxtApp()
  if (!$auth0.loggedIn) {
    return navigateTo('/login')
  }
})

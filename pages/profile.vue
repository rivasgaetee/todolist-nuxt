<template>
  <div>
    <p>Welcome</p>
    <pre>
      {{ user }}
    </pre>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useNuxtApp} from "#app";
const { $auth0 } = useNuxtApp();
const user = ref<any>(null);

const getUser = async () => {

}

onMounted(() => {
  getUser()
})
</script>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const searchTerm = ref('')
const handleSubmit = () => {
  router.push({ name: 'HomeView', params: { search: searchTerm.value } })
  searchTerm.value = ''
}
</script>

<template>
  <v-form @submit.prevent="handleSubmit">
    <v-text-field
      v-model="searchTerm"
      append-inner-icon="mdi-magnify"
      class="mx-4"
      density="compact"
      hide-details
      placeholder="Procure seu produto"
      variant="solo"
      @click:append-inner="handleSubmit"
    />
  </v-form>
</template>

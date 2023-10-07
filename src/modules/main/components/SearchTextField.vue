<script setup lang="ts">
import { ref } from 'vue'

const searchTerm = ref('')
const handleSubmit = () => {
  console.log(searchTerm.value)
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

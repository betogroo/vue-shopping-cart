<script setup lang="ts">
interface Props {
  active: boolean | string
}
const props = defineProps<Props>()
</script>

<template>
  <v-overlay
    class="align-center justify-center"
    :model-value="active === true"
  >
    <v-progress-circular
      color="primary"
      indeterminate
      size="64"
    ></v-progress-circular>
  </v-overlay>
</template>

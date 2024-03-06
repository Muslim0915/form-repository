<script setup>
import AppForm from "@/components/AppForm.vue";

</script>
<template>
  <v-app class="app bg-gray-800">
    <v-container fluid class="h-100 flex-column flex justify-center align-center">

      <AppForm />

    </v-container>
  </v-app>
</template>

<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100%;
}
</style>

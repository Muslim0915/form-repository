<script setup>

import AppInput from "@/components/ui/AppInput.vue";
import {useDataStore} from "@/store";
const store = useDataStore();
</script>

<template>
  <AppInput
    v-for="input in store.mentorInputs"
    :key="input.id"
    :placeholder="input.placeholder"
  />
</template>

<style scoped lang="scss">

</style>

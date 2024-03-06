<script setup>
import {useDataStore} from "@/store";

const store = useDataStore();
import AppInput from "@/components/ui/AppInput.vue";
</script>

<template>
  <AppInput
    v-for="input in store.individualUsers"
    :key="input.id"
    :placeholder="input.placeholder"
    :type="input.type"
  />
</template>

<style scoped lang="scss">

</style>

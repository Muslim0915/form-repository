<script setup>

import {useDataStore} from "@/store";

const store = useDataStore();

</script>

<template>
  <div class="flex justify-between items-center gap-4">
    <v-btn size="large" class="mt-4 bg-red-700 size-1/2 align-self-center text-white" @click="store.closeForms()">Назад</v-btn>
    <v-btn size="large" class="mt-4 bg-blue-700 size-1/2 align-self-center text-white" @click="store.checkInputValues()">Подтвердить</v-btn>
  </div>
</template>

<style scoped lang="scss">

</style>

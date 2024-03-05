<script setup>
import AppSelect from "@/components/ui/AppSelect.vue";
import {useDataStore} from "@/store/index.js";
const store = useDataStore();

const options = store.countriesOption;

</script>

<template>
  <div class="flex gap-5 flex-col p-10 bg-white">

    <h1 class="text-3xl text-gray-800 font-bold my-2">Заголовок сайта</h1>

    <AppSelect
      label="Выберите вашу страну"
      :items="options"
      @update:modelValue="store.getCountries($event)"
    />
    <v-btn @click="store.hideMainFormGroup()" variant="tonal" type="button" size="large" class="bg-gray-800 text-white">
      Подтвердить
    </v-btn>
  </div>
</template>

<style scoped lang="scss">

</style>

<script setup>

import {useDataStore} from "@/store/index.js";
import AppInput from "@/components/ui/AppInput.vue";
import AppSelect from "@/components/ui/AppSelect.vue";
import AppSubmit from "@/components/ui/AppSubmit.vue";

const store = useDataStore();

</script>

<template>
  <div class="bg-white rounded-2xl w-[800px] max-sm:w-full p-10 flex gap-2 flex-col">
    <h2 class="text-2xl text-gray-800 font-bold text-center tracking-widest"> Индивидуальное участие </h2>
    <AppInput
        v-for="input in store.individualUsers"
        :key="input.id"
        :placeholder="input.placeholder"
        :type="input.type"
    />
    <AppInput
        v-for="input in store.mentorInputs"
        :key="input.id"
        :placeholder="input.placeholder"
    />
    <AppSelect
    label="Выберите возрастную группу"
    :items="store.ageOptions"
    @update:modelValue="store.chooseAgeCategory($event)"
    />
    <AppSelect
      label="Выберите категорию"
      :items="store.filteredUsersOptionValues"
      :disabled="store.isOptionDisabled"
      @update:modelValue="store.chooseSportCategory($event)"
    />
    <div class="w-full text-white gap-4 flex justify-between align-center">
    <v-file-input class="bg-gray-500 rounded text-white" label="Загрузите файл для обработки"></v-file-input>
    <v-file-input class="bg-gray-500 rounded text-white" label="Загрузите файл для обработки"></v-file-input>
    </div>
    <AppSubmit />
  </div>
</template>

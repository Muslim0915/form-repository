<script setup>

import {useDataStore} from "@/store/index.js";
import AppSelect from "@/components/ui/AppSelect.vue";
import AppSubmit from "@/components/ui/AppSubmit.vue";
import IndividualUserInputs from "@/components/formGroups/IndividualUserInputs.vue";
import MentorInputs from "@/components/formGroups/MentorInputs.vue";
import {useI18n} from "vue-i18n";

const store = useDataStore();
const {t} = useI18n();

</script>

<template>
  <div class="bg-white rounded-2xl w-[800px] max-sm:w-full p-10 flex gap-2 flex-col">
    <h2 class="text-2xl text-gray-800 font-bold text-center tracking-widest" v-text="t('Индивидуальное участие')"> </h2>
    <IndividualUserInputs />
    <MentorInputs />
    <div class="flex items-center gap-2 justify-space-between">
      <AppSelect
        label="Выберите возрастную группу"
        :items="store.ageOptions"
        v-model="store.getAgeOptionValue"
        @update:modelValue="store.chooseAgeCategory($event)"
      />
      <AppSelect
        label="Выберите категорию участия"
        :items="store.filteredUsersOptionValues"
        :disabled="store.isOptionDisabled"
        v-model="store.selectedSportOption"
        @update:modelValue="store.chooseSportCategory($event)"
      />
    </div>
    <div class="w-full text-white gap-4 flex justify-between align-center max-sm:flex-col max-sm:gap-2 max-sm:align-baseline max-sm:justify-start">
    <v-file-input class="w-full bg-gray-500 rounded text-white" label="Загрузите файл для обработки"></v-file-input>
    <v-file-input class="w-full bg-gray-500 rounded text-white" label="Загрузите файл для обработки"></v-file-input>
    </div>
    <AppSubmit />
  </div>
</template>

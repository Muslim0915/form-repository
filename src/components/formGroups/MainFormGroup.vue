<script setup>
import AppSelect from "@/components/ui/AppSelect.vue";
import {useDataStore} from "@/store/index.js";
import {useI18n} from "vue-i18n";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher.vue";

const store = useDataStore();
const options = store.countriesOption;
const { t } = useI18n();
</script>

<template>
  <div class="flex gap-5 flex-col">

    <h1 class="text-3xl text-gray-800 font-bold my-2">Заголовок сайта</h1>
          <AppSelect
            label="Страна"
            :items="options"
            v-model="store.selectedCountry"
            @update:modelValue="store.getCountries($event)"
          />
    <LanguageSwitcher />
    <div class="flex gap-10 flex-col my-8">
      <AppSelect
        :items="store.participationOption"
        label="Выберите тип участие"
        v-model="store.selectedParticipation"
        @update:modelValue="store.chooseParticipation($event)"
      />
      <AppSelect
        v-if="store.isParticipationOVZOptionShown"
        label="Выберите тип участие"
        :items="store.participationOVZOption"
        v-model="store.selectedParticipationOVZ"
        @update:modelValue="store.chooseParticipationOVZ($event)"
      />
    </div>

  </div>
</template>

<script setup>
import {useI18n} from 'vue-i18n';
import {ref} from "vue";

const {locale, t} = useI18n();

const supportedLanguages = [
  {id: 1,label: 'Русский', value: 'ru'},
  {id: 2,label: 'Беларуская', value: 'be'},
  {id: 3,label: 'Қазақша', value: 'kk'},
  {id: 4,label: 'Oʻzbek', value: 'uz'},
];

const selectedLanguage = ref(locale.value);

const changeLanguage = () => {
  locale.value = selectedLanguage.value;
};
</script>
<template>
  <div>
    <label for="languageSelect">Выберите язык:</label>
    <select
      class="text-black bg-white px-3 py-2
    transition-all cursor-pointer
    hover:border-blue-600/30 border
    border-gray-200 rounded-lg
    outline-blue-600/50 appearance-none
    invalid:text-black/30 w-full"
      id="languageSelect"
      v-model="selectedLanguage"
      @change="changeLanguage"
    >
      <option disabled value="">Выберите язык</option>
      <option v-for="lang in supportedLanguages" :key="lang.id" :value="lang.value">{{ lang.label }}</option>
    </select>
<!--    <AppSelect-->
<!--    :items="supportedLanguages"-->
<!--    v-model="selectedLanguage"-->
<!--    @update:modelValue="changeLanguage()"-->
<!--    />-->
  </div>
</template>


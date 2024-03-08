<script setup>

import AppInput from "@/components/ui/AppInput.vue";
import {useDataStore} from "@/store";
import {useI18n} from "vue-i18n";
const store = useDataStore();

const {t} = useI18n()
</script>

<template>
  <AppInput
    v-for="input in store.mentorInputs"
    :key="input.id"
    :placeholder="t(input.placeholder)"
  />
</template>

<style scoped lang="scss">

</style>

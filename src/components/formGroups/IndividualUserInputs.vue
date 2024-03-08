<script setup>
import {useDataStore} from "@/store";
import {useI18n} from "vue-i18n";

const {t} = useI18n();

const store = useDataStore();
import AppInput from "@/components/ui/AppInput.vue";
</script>

<template>
  <AppInput
    v-for="input in store.individualUsers"
    :key="input.id"
    :placeholder="t(input.placeholder)"
    :type="input.type"
  />
</template>

<style scoped lang="scss">

</style>

<script setup>

import {useI18n} from "vue-i18n";

const {t} = useI18n();

const props = defineProps({
  text: {
    type: String,
    required: true
  },
})

</script>

<template>
  <v-btn
    variant="tonal"
    class=" text-white tracking-widest"
  >{{ t(props.text) }}</v-btn>
</template>

<style scoped lang="scss">

</style>

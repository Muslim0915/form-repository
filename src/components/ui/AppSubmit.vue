<script setup>
import { useDataStore } from "@/store";
import AppButton from "@/components/ui/AppButton.vue";
// import {Button} from "@/components/ui/button";

const store = useDataStore();
</script>

<template>
  <div
    class="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4"
  >
    <AppButton
      size="large"
      class="mt-4 bg-red-700 size-full sm:size-1/2 align-self-center text-white"
      @click="store.closeForms()"
      text="Назад"
    />
    <AppButton
      size="large"
      class="mt-4 bg-blue-700 size-full sm:size-1/2 align-self-center text-white"
      @click="store.checkInputValues()"
      text="Подтвердить"
    />
    <!--    <Button type="submit">Подтвердить</Button>-->
  </div>
</template>

<style scoped lang="scss"></style>

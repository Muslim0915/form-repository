<script setup>
import {useDataStore} from "@/store/index.js";
import AppButton from "@/components/ui/AppButton.vue";

const store = useDataStore();
</script>

<template>
  <div class="flex gap-10 flex-col p-10 bg-white">
    <h2 class="text-2xl text-gray-800 font-bold text-center tracking-widest">Заголовок</h2>
    <div class="flex gap-10 flex-wrap">
      <AppButton
        class="bg-amber-accent-3 hover:bg-amber-accent-4"
        text="Индивидуальное"
        @click="store.showIndividualUsers()"
      />
      <AppButton
        class="bg-red-400 hover:bg-red-500"
        text="Командное"
        @click="store.showTeamUsers()"
      />
      <AppButton
        class="bg-blue-400 hover:bg-blue-500"
        text="Я наставник"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>

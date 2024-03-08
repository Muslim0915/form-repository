<script setup>


import AppButton from "@/components/ui/AppButton.vue";

import {useDataStore} from "@/store";
import IndividualUserInputs from "@/components/formGroups/IndividualUserInputs.vue";
import AppSelect from "@/components/ui/AppSelect.vue";


const props = defineProps({
  userTitle: {
    type: String,
    default: 'Участник',
  },
})
const emit = defineEmits(['deleteTeamUser']);
const deleteTeamUser = () => {
  emit('deleteTeamUser');
}
// filteredTeamUsersOptionValue

const store = useDataStore();
</script>

<template>
  <h3 class=" text-gray-800 font-bold tracking-widest">{{props.userTitle}}</h3>
  <div class="grid max-sm:grid-cols-1 grid-cols-2 gap-4">
    <IndividualUserInputs />
  </div>
    <div class="grid max-sm:grid-cols-1 grid-cols-2 gap-4">
      <AppSelect
        label="Выберите возрастную группу"
        :items="store.ageOptions"
        v-model="store.getAgeOptionValue"
        @update:modelValue="store.chooseAgeCategory($event)"
      />
      <AppSelect
        label="Выберите категорию участия"
        :items="store.filteredTeamUsersOptionValue"
        :disabled="store.isOptionDisabled"
        v-model="store.selectedSportOption"
        @update:modelValue="store.chooseSportCategory($event)"
      />
    </div>


    <div
      :class="store.teamUsers.length <= 1 ? 'justify-center': ''"
      class="w-full h-full flex justify-center items-center gap-4">
      <AppButton
        text="Добавить"
        class="bg-green-600 hover:bg-green-500 rounded-e text-white"
        @click="store.addTeamUser()"
      />
      <AppButton
      v-if="store.teamUsers.length > 1"
      text="Удалить"
      class="bg-red-600 hover:bg-red-500 rounded-2xl text-white"
      @click="deleteTeamUser()"
    />

    </div>


</template>

<style scoped lang="scss">

</style>

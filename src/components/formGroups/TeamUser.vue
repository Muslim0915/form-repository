<script setup>

import AppInput from "@/components/ui/AppInput.vue";
import AppButton from "@/components/ui/AppButton.vue";

import {useDataStore} from "@/store";

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


const store = useDataStore();
</script>

<template>
  <h3 class=" text-gray-800 font-bold tracking-widest">{{props.userTitle}}</h3>
  <div class="grid max-sm:grid-cols-1 grid-cols-3 gap-4">
    <div
      class="flex justify-center items-center"

      v-for="user in store.individualUsers"
      :key="user.id"
    >
      <AppInput
        :placeholder="user.placeholder"
      />
    </div>
    <div
      :class="store.teamUsers.length <= 1 ? 'justify-center': ''"
      class="w-full h-full flex justify-between items-center gap-4">
      <AppButton
        text="Добавить"
        class="bg-green-600 hover:bg-green-500 rounded-2xl text-white"
        :class="store.teamUsers.length <= 1 ? 'h-100 justify-self-center': ''"
        @click="store.addTeamUser()"
      />
      <AppButton
      v-if="store.teamUsers.length > 1"
      text="Удалить"
      class="bg-red-600 hover:bg-red-500 rounded-2xl text-white"
      @click="deleteTeamUser()"
    />
    </div>
  </div>

</template>

<style scoped lang="scss">

</style>

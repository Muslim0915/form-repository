<script setup>

import MentorInputs from "@/components/formGroups/MentorInputs.vue";
import TeamUser from "@/components/formGroups/TeamUser.vue";
import {useDataStore} from "@/store";
import AppSubmit from "@/components/ui/AppSubmit.vue";

const store = useDataStore();
</script>

<template>
  <div class="bg-white rounded-2xl w-[800px] max-sm:w-full p-10 flex gap-2 flex-col">
    <h2 class="text-2xl text-gray-800 font-bold text-center tracking-widest">Менторство</h2>
    <div class="w-full text-white gap-4 flex flex-column">
      <div class="w-full grid max-sm:grid-cols-1 grid-cols-2 gap-4 my-4">
        <MentorInputs />
      </div>
      <TeamUser v-for="user in store.teamUsers"
                :key="user.id"
                :userTitle="user.user"
                @deleteTeamUser="store.deleteTeamUser(user)" />
    <div class="w-full grid max-sm:grid-cols-1 grid-cols-2 gap-4 my-4"><v-file-input class="bg-gray-500 rounded text-white" label="Загрузите файл для обработки"></v-file-input>
    <v-file-input class="bg-gray-500 rounded text-white" label="Загрузите файл для обработки"></v-file-input>
    </div>
    </div>
    <AppSubmit />
  </div>
</template>

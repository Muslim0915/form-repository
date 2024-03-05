<script setup>

import {useDataStore} from "@/store";

const store = useDataStore();
import TeamUser from "@/components/formGroups/TeamUser.vue";
import AppSubmit from "@/components/ui/AppSubmit.vue";
</script>

<template>
  <div class="flex gap-4 flex-col p-10 max-sm:p-5 bg-white rounded-2xl w-[800px] max-sm:w-full">
    <h2 class="text-2xl mb-5 text-gray-800 font-bold text-center tracking-widest">Командная участие</h2>
    <TeamUser v-for="user in store.teamUsers"
              :key="user.id"
              :userTitle="user.user"
              @deleteTeamUser="store.deleteTeamUser(user)"
    />
    <AppSubmit />
  </div>
</template>

<style lang="scss" scoped>

</style>

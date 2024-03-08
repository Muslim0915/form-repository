<script setup lang="ts">
import {useDataStore} from "@/store";
import MainFormGroup from "@/components/formGroups/MainFormGroup.vue";
import IndividualUser from "@/components/formGroups/IndividualUser.vue";
import TeamUsers from "@/components/formGroups/TeamUsers.vue";
import MentorFormGroup from "@/components/formGroups/MentorFormGroup.vue";
import {useI18n} from "vue-i18n";
import AppButton from "@/components/ui/AppButton.vue";

const {t} = useI18n();

const store = useDataStore();

</script>

<template>
  <form action="#" class="relative">
    <div class="form-group flex flex-column bg-white rounded-2xl w-[800px] max-sm:w-full p-10" v-if="store.isMainFormGroupShown">
    <MainFormGroup  />
      <AppButton
        @click="store.hideMainFormGroup()"
        type="button"
        size="large"
        class="align-self-center bg-gray-800"
        text="Подтвердить">
      </AppButton>
    </div>
    <div class="form-group" v-else>
    <IndividualUser v-if="store.isIndividualUsersShown" />
    <TeamUsers v-if="store.isTeamUsersShown" />
      <MentorFormGroup v-if="store.isMentorFormGroupShown" />
    </div>
  </form>
</template>

<style lang="scss" scoped>


</style>

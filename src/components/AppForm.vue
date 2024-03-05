<script setup>
import {useDataStore} from "@/store/index.js";
import MainFormGroup from "@/components/formGroups/MainFormGroup.vue";
import AdditionalFormGroup from "@/components/formGroups/AdditionalFormGroup.vue";
import IndividualUser from "@/components/formGroups/IndividualUser.vue";
import TeamUsers from "@/components/formGroups/TeamUsers.vue";

const store = useDataStore();

</script>

<template>
  <form action="" class="relative">
<!--    <select name="" id="" class="position-absolute top-0 right-0">-->
<!--      <option value="UZ">уз</option>-->
<!--    </select>-->
    <MainFormGroup v-if="store.isMainFormGroupShown" />
    <AdditionalFormGroup v-if="store.isAdditionalFormGroupShown" />
    <IndividualUser v-if="store.isIndividualUsersShown" />
    <TeamUsers v-if="store.isTeamUsersShown" />
  </form>
</template>

<style lang="scss" scoped>


</style>

<script setup lang="ts">
import {useDataStore} from "@/store";
import { useForm } from 'vee-validate'
import MainFormGroup from "@/components/formGroups/MainFormGroup.vue";
import AdditionalFormGroup from "@/components/formGroups/AdditionalFormGroup.vue";
import IndividualUser from "@/components/formGroups/IndividualUser.vue";
import TeamUsers from "@/components/formGroups/TeamUsers.vue";
import { toTypedSchema } from '@vee-validate/zod'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import * as z from 'zod'

const formSchema = toTypedSchema(z.object({
  username: z.string().min(2).max(50),
}))
const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted!', values)
})

const store = useDataStore();

</script>

<template>
  <form @submit="onSubmit" class="relative">
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

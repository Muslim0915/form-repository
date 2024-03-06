<script setup>
import {useDataStore} from "@/store/index.js";

const props = defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  value:{
    type: String,
    default: '',
  }
});

const store = useDataStore();
</script>

<template>
    <input class="w-full h-10 border-2 outline-gray-500 border-solid border-gray-300 p-2 rounded" type="text"
        :placeholder="props.placeholder"
           :class="useDataStore().inputErrored ? 'border-red-500' : 'border-gray-300'"
    />
</template>

<style scoped lang="scss">


</style>

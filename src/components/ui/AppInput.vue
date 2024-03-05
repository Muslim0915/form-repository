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

const inputValue = props.value

const store = useDataStore();
</script>

<template>
    <input class="w-full border-2 outline-gray-500 border-solid border-gray-300 p-2 rounded" type="text"
        :placeholder="props.placeholder"
    />
</template>

<style scoped lang="scss">

input.error{
  border: 1px solid red;
}

</style>

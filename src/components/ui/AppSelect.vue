<script setup>


import {ref} from "vue";
import {useI18n} from "vue-i18n";
const { t } = useI18n();

const props = defineProps({
  label: {
    type: String,
  },
  items: {
    type: Array,
    default: () => [],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  value:{
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
})
const selectedOption = ref(props.modelValue);

const emit = defineEmits(['update:modelValue']);

const updateValue = () =>{
  emit('update:modelValue', selectedOption)
}

</script>

<template>
  <label> {{ t(props.label) }}

  <select
    class="text-black bg-white px-3 py-2
    transition-all cursor-pointer
    hover:border-blue-600/30 border
    border-gray-200 rounded-lg
    outline-blue-600/50 appearance-none
    invalid:text-black/30 w-full"
    @change="updateValue()"
    :value="props.modelValue"
    :disabled="props.disabled"
    v-model="selectedOption"
  >
    <option disabled :value="''" :selected="!props.modelValue">{{t(props.label)}}</option>
    <option
      v-for="item in props.items"
      :key="item.id"
      :value="item.value"
      >{{t(item.label)}}</option>
  </select>
  </label>
</template>

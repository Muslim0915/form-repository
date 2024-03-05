<script setup>

const props = defineProps({
  text: {
    type: String,
    required: true
  },
})

</script>

<template>
  <v-btn
    variant="tonal"
    class=" text-white tracking-widest"
  >{{ props.text }}</v-btn>
</template>

<style scoped lang="scss">

</style>

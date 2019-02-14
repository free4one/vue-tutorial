<template>
  <div>
    <h1>{{ size }}, {{ color }} dog chased me</h1>
    <input :value="size" @input="$emit('update:size', $event.target.value)">
    <input :value="color" @input="$emit('update:color', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: 'Doggie',
  props: ['size', 'color'],
};
</script>

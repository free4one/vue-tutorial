<template>
  <li>
    {{ title }}
    <button v-on:click="$emit('remove')">X</button>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['title'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2,
h3 {
  font-weight: normal;
}
</style>

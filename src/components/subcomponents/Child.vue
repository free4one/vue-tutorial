<template>
  <span>{{ myMessage }}</span>
</template>

<script>
export default {
  name: 'Child',
  props: ['myMessage'],
};
</script>

<style scoped>
span {
  color: chocolate;
  text-align: adjust;
  font-weight: bold;
  font-size: 14px;
}
</style>

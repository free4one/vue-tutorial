<template>
  <div>
    <span>{{ todo.text }}</span>
    <span>{{ todo.isComplete }}</span>
  </div>
</template>

<script>
export default {
  name: 'ChildObject',
  props: { todo: Object },
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

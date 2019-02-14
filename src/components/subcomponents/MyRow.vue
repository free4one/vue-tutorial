<template>
  <tr>
    <td class="no">{{ index }}</td>
    <td class="content">{{ title }}</td>
  </tr>
</template>

<script>
export default {
  name: 'MyRow',
  props: ['index', 'title'],
};
</script>

<style scoped>
.no {
  font-weight: bold;
  color: rgb(255, 137, 2);
  border: 1px solid red;
}
.content {
  text-align: adjust;
  color: rgb(255, 137, 2);
  border: 1px solid red;
}
</style>

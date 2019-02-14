<template>
  <div class="child">
    <slot v-bind:text="slotText"></slot>
  </div>
</template>

<script>
export default {
  name: 'ChildSlotScope',
  data() {
    return {
      slotText: 'hello from child',
    };
  },
};
</script>

<style scoped>
.child {
  border: 1px solid red;
}
</style>

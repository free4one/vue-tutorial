<template>
  <div v-show="someChildProperty">Child</div>
</template>

<script>
export default {
  name: 'ChildComponent',
  data() {
    return {
      someChildProperty: true,
    };
  },
};
</script>

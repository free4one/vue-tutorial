<template>
  <div id="demo">
    <button @click="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'FadeDemo',
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style lang="sass" scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .5s; }
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ { opacity: 0; }
</style>

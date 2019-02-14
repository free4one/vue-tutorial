<template>
  <div id="dynamic-fade-demo" class="demo">
    Fade In:
    <input type="range" v-model="fadeInDuration" min="0" v-bind:max="maxFadeDuration">
    Fade Out:
    <input
      type="range"
      v-model="fadeOutDuration"
      main="0"
      v-bind:max="maxFadeDuration"
    >
    <transition
      v-bind:css="false"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
    >
      <p v-if="show">hello</p>
    </transition>
    <button v-if="stop" v-on:click="stop = false; show = false">Start animating</button>
    <button v-else v-on:click="stop = true">Stop it!</button>
  </div>
</template>

<script>
export default {
  name: 'DynamicFadeDemo',
  data() {
    return {
      show: true,
      fadeInDuration: 1000,
      fadeOutDuration: 1000,
      maxFadeDuration: 1500,
      stop: true,
    };
  },
  mounted() {
    this.show = false;
  },
  methods: {
    beforeEnter(el) {
      const cstEl = el;
      cstEl.style.opacity = 0;
    },
    enter(el, done) {
      const vm = this;
      // eslint-disable-next-line no-undef
      Velocity(
        el,
        { opacity: 1 },
        {
          duration: this.fadeInDuration,
          complete() {
            done();
            if (!vm.stop) vm.show = false;
          },
        },
      );
    },
    leave(el, done) {
      const vm = this;
      // eslint-disable-next-line no-undef
      Velocity(
        el,
        { opacity: 0 },
        {
          duration: this.fadeOutDuration,
          complete() {
            done();
            vm.show = true;
          },
        },
      );
    },
  },
};
</script>

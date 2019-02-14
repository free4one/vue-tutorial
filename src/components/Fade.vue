<template>
  <transition
    name="fade"
    mode="out-in"
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:before-leave="beforeLeave"
    v-on:leave="leave"
  >
    <slot></slot>
  </transition>
</template>

<script>
export default {
  props: {
    duration: {
      default: false,
    },
  },
  methods: {
    beforeEnter(el) {
      // eslint-disable-next-line no-param-reassign
      el.style.opacity = 0;
    },
    enter(el, done) {
      const vm = this;
      // eslint-disable-next-line no-undef
      Velocity(
        el,
        { opacity: 1 },
        {
          duration: vm.duration ? vm.duration : 500,
          easing: [0.39, 0.67, 0.04, 0.98],
          complete() {
            done();
          },
        },
      );
    },
    beforeLeave(el) {
      // eslint-disable-next-line no-param-reassign
      el.style.opacity = 1;
    },
    leave(el, done) {
      const vm = this;
      // eslint-disable-next-line no-undef
      Velocity(
        el,
        { opacity: 0 },
        {
          duration: vm.duration ? vm.duration : 500,
          easing: [0.39, 0.67, 0.04, 0.98],
          complete() {
            done();
          },
        },
      );
    },
  },
};
</script>

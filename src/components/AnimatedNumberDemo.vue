<template>
  <div id="animated-number-demo">
    <input v-model.number="number" type="number" step="20">
    <p>{{ animatedNumber }}</p>
  </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  name: 'animated-number-demo',
  data() {
    return {
      number: 0,
      tweenedNumber: 0,
    };
  },
  created() {
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js',
    );
    document.head.appendChild(script);
  },
  computed: {
    animatedNumber() {
      return this.tweenedNumber.toFixed(0);
    },
  },
  watch: {
    number(newValue) {
      TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
    },
  },
};
</script>

<template>
  <span class="tweened-number">{{ tweeningValue }}</span>
</template>

<script>
import TWEEN from '@tweenjs/tween.js';

export default {
  props: {
    // The value that we'll be tweening to.
    value: {
      type: Number,
      required: true,
    },

    // How long the tween should take. (In milliseconds.)
    tweenDuration: {
      type: Number,
      default: 500,
    },
  },

  created() {
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      'https://cdnjs.cloudflare.com/ajax/libs/tween.js/16.3.5/Tween.min.js',
    );
    document.head.appendChild(script);
  },

  watch: {
    // Whenever `props.value` changes, update the tween.
    value(newVal, oldVal) {
      this.tween(newVal, oldVal);
    },
  },

  // This holds the temporary state of the tweened value.
  data() {
    return {
      tweeningValue: 0,
    };
  },

  mounted() {
    this.tween(0, this.value);
  },

  methods: {
    // This is our main logic block. It handles tweening from a start value to an end value.
    tween(start, end) {
      let frameHandler;

      // Handles updating the tween on each frame.
      // eslint-disable-next-line func-names
      const animate = function (currentTime) {
        // eslint-disable-next-line no-undef
        TWEEN.update(currentTime);
        frameHandler = requestAnimationFrame(animate);
      };

      // eslint-disable-next-line no-undef
      const myTween = new TWEEN.Tween({ tweeningValue: start })
        .to({ tweeningValue: end }, this.tweenDuration)
        // Be careful to not to do too much here! It will slow down the app.
        .onUpdate(() => {
          this.tweeningValue = parseInt(myTween.tweeningValue, 10).toFixed(2);
        })
        .onComplete(() => {
          // Make sure to clean up after ourselves.
          cancelAnimationFrame(frameHandler);
        })
        // This actually starts the tween.
        .start();

      frameHandler = requestAnimationFrame(animate);
    },
  },
};
</script>

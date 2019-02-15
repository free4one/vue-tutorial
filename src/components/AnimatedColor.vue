<template>
  <div id="animated-color">
    <input v-model="colorQuery" v-on:keyup.enter="updateColor" placeholder="Enter a color">
    <button v-on:click="updateColor">Update</button>
    <p>Preview:</p>
    <span
      v-bind:style="{
       backgroundColor: tweenedCSSColor }"
      class="animated-color-color-preview"
    ></span>
    <p>{{ tweenedCSSColor }}</p>
  </div>
</template>

<script>
export default {
  name: 'AnimatedColor',
  data() {
    return {
      colorQuery: '',
      color: {
        red: 0,
        green: 0,
        blue: 0,
        alpha: 1,
      },
      tweenedColor: {},
    };
  },
  beforeCreate() {
    // eslint-disable-next-line no-undef
    this.Color = net.brehaut.Color;
  },
  created() {
    const firstScript = document.createElement('script');
    firstScript.setAttribute(
      'src',
      'https://cdn.jsdelivr.net/npm/tween.js@16.3.4',
    );
    document.head.appendChild(firstScript);

    // const secondsScript = document.createElement('script');
    // secondsScript.setAttribute(
    //   'src',
    //   'https://cdn.jsdelivr.net/npm/color-js@1.0.3',
    // );
    // document.head.appendChild(secondsScript);

    this.tweenedColor = Object.assign({}, this.color);
  },
  watch: {
    color() {
      function animate() {
        // eslint-disable-next-line no-undef
        if (TWEEN.update()) {
          requestAnimationFrame(animate);
        }
      }

      // eslint-disable-next-line no-undef
      new TWEEN.Tween(this.tweenedColor).to(this.color, 750).start();

      animate();
    },
  },
  computed: {
    tweenedCSSColor() {
      // eslint-disable-next-line no-undef
      return new Color({
        red: this.tweenedColor.red,
        green: this.tweenedColor.green,
        blue: this.tweenedColor.blue,
        alpha: this.tweenedColor.alpha,
      }).toCSS();
    },
  },
  methods: {
    updateColor() {
      // eslint-disable-next-line no-undef
      this.color = new Color(this.colorQuery).toRGB();
      this.colorQuery = '';
    },
  },
};
</script>

<style scoped>
.animated-color-color-preview {
  display: inline-block;
  width: 50px;
  height: 50px;
}
</style>

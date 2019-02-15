<template>
  <div>
    <p>This number does move-y things.
      <animated-counter :value="myValue"></animated-counter>
    </p>
    <p>
      You can change the tweened number here:
      <input type="text" v-model="myValue">
    </p>
    <!-- It transitions like magic! Magic with a bunch of code behind it, that is. -->
  </div>
</template>
<script>
import AnimatedCounter from './AnimatedCounter';

export default {
  name: 'ExampleComponent',

  components: {
    AnimatedCounter,
  },

  data() {
    return {
      myValue: 100,
    };
  },

  computed: {
    inputMyValue() {
      return parseInt(this.myValue, 10);
    },
  },
};
</script>

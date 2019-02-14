<template>
  <div class="demoMain">
    <div id="counter-event-example" class="demo">
      <p>{{ total }}</p>
      <button-counter v-on:increment="incrementTotal"></button-counter>
      <button-counter v-on:increment="incrementTotal"></button-counter>
    </div>
    <h1>Customer Transition Class</h1>
    <div class="example-3">
      <button @click="show3 = !show3">Toggle render</button>
      <transition
        name="custom-classes-transition"
        enter-active-class="animated tada"
        leave-active-class="animated bounceOutRight"
      >
        <p v-if="show3">hello</p>
      </transition>
    </div>
  </div>
</template>

<script>
import ButtonCounter from './subcomponents/ButtonCounter';

export default {
  name: 'CounterEvent',
  data() {
    return {
      total: 0,
      show3: true,
    };
  },
  methods: {
    incrementTotal() {
      this.total += 1;
    },
  },
  components: {
    'button-counter': ButtonCounter,
  },
};
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/animate.css@3.5.1");
.demoMain {
  width: 100%;
  text-align: -webkit-center;
}
.demo {
  font-size: 28px;
  font-weight: bold;
  color: chocolate;
  width: 500px;
  border: 1px solid rgb(83, 255, 4);
  border-radius: 2px;
  padding: 2px 3px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  overflow-x: auto;
}
.example-3 {
  width: 500px;
  height: 200px;
  border: 1px solid rgb(83, 255, 4);
  border-radius: 2px;
  padding: 2px 3px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  overflow-x: auto;
}
</style>

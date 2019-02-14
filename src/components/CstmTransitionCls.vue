<template>
  <div class="main">
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
export default {
  name: 'CstmTransitionCls',
  data() {
    return {
      show3: true,
    };
  },
};
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/animate.css@3.5.1");
.main {
  width: 100%;
  text-align: -webkit-center;
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

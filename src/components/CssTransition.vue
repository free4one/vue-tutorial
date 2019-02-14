<template>
  <div>
    <div id="example-1">
      <h1>CSS 트랜지션</h1>
      <button @click="show1 = !show1">Toggle render</button>
      <transition name="slide-fade">
        <p v-if="show1">hello</p>
      </transition>
    </div>
    <div id="example-2">
      <h1>CSS 애니메이션</h1>
      <button @click="show2 = !show2">Toogle show</button>
      <transition name="bounce">
        <p v-if="show2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris facilisis enim libero, at lacinia diam fermentum id.
          Pellentesque habitant morbi tristique senectus et netus.
        </p>
      </transition>
    </div>
    <div id="example-3">
      <h1>Customer Transition Class</h1>
      <button @click="show = !show">Toggle render</button>
      <transition
        name="custom-classes-transition"
        enter-active-class="animated tada"
        leave-active-class="animated bounceOutRight"
      >
        <p v-if="show">hello</p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CssTransition',
  data() {
    return {
      show: true,
      show1: true,
      show2: true,
    };
  },
};
</script>

<style lang="scss" scoped>
/* 애니메이션 진입 및 진출은 다른 지속 시간 및 */
/* 타이밍 기능을 사용할 수 있습니다. */
.slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@import url("https://cdn.jsdelivr.net/npm/animate.css@3.5.1");
</style>

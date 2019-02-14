<template>
  <div class="main">
    <div id="jstransition">
      <button @click="show = !show">Toggle</button>
      <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
        v-bind:css="false"
      >
        <p v-if="show">Demo</p>
      </transition>
    </div>
    <div class="dynamicComponent">
      <input type="radio" value="v-a" id="a" v-model="view">
      <label for="a">A</label>
      <input type="radio" value="v-b" id="b" v-model="view">
      <label for="b">B</label>
      <transition name="component-fade" mode="out-in">
        <component v-bind:is="view"></component>
      </transition>
    </div>
    <!-- <div id="list-demo">
      <button v-on:click="add">Add</button>
      <button v-on:click="remove">Remove</button>
      <transition-group name="list" tag="p">
        <span v-for="item in items" v-bind:key="item" class="list-item">{{ item }}</span>
      </transition-group>
    </div>
    <div id="flip-list-demo" class="demo">
      <button v-on:click="shuffle">Shuffle</button>
      <transition-group name="flip-list" tag="ul">
        <li v-for="item in secondsItems" v-bind:key="item">{{ item }}</li>
      </transition-group>
    </div>-->
    <div id="list-complete-demo" class="demo">
      <button v-on:click="shuffle">Shuffle</button>
      <button v-on:click="add">Add</button>
      <button v-on:click="remove">Remove</button>
      <transition-group name="list-complete" tag="p">
        <span v-for="item in items" v-bind:key="item" class="list-complete-item">{{ item }}</span>
      </transition-group>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  name: 'JSTransition',

  // created() {
  //   const jsVelocity = document.createElement('script');
  //   jsVelocity.setAttribute(
  //     'src',
  //     'https://cdnjs.cloudflare.com/ajax/libs/velocity/2.0.3/velocity.min.js',
  //   );
  //   document.head.appendChild(jsVelocity);
  // },

  components: {
    'v-a': {
      template: '<div>Component A</div>',
    },
    'v-b': {
      template: '<div>Component B</div>',
    },
  },

  data() {
    return {
      show: false,
      view: 'v-a',
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
      // secondsItems: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  },

  methods: {
    beforeEnter(el) {
      const cEl = el;
      cEl.style.opacity = 0;
    },

    enter(el, done) {
      velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 });
      velocity(el, { fontSize: '1em' }, { complete: done });
    },

    leave(el, done) {
      velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 });
      velocity(el, { rotateZ: '100deg' }, { loop: 2 });
      velocity(
        el,
        {
          rotateZ: '45deg',
          translateY: '30px',
          translateX: '30px',
          opacity: 0,
        },
        { complete: done },
      );
    },

    randomIndex() {
      return Math.floor(Math.random() * this.items.length);
    },

    add() {
      // eslint-disable-next-line no-plusplus
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove() {
      this.items.splice(this.randomIndex(), 1);
    },

    shuffle() {
      this.items = this.lodash.shuffle(this.items);
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  text-align: -webkit-center;
}
#jstransition,
#list-demo,
.dynamicComponent {
  width: 500px;
  height: 100px;
  border: 1px solid red;
}
.demo {
  width: 500px;
  height: 300px;
  border: 1px solid red;
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter,
.component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to
/* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.flip-list-move {
  transition: transform 1s;
}
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list.complete-leave-active {
  position: absolute;
}
</style>

<template>
  <div class="main">
    <input v-model="query">
    <transition-group
      name="staggered-fade"
      tag="ul"
      v-bind:css="false"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
    >
      <li
        v-for="(item, index) in computedList"
        v-bind:key="item.msg"
        v-bind:data-index="index"
      >{{ item.msg }}</li>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'StaggeredListDemo',
  data() {
    return {
      query: '',
      list: [
        { msg: 'Bruce Lee' },
        { msg: 'Jackie Chan' },
        { msg: 'Chuck Norris' },
        { msg: 'Jet Li' },
        { msg: 'Kung Fury' },
      ],
    };
  },
  computed: {
    computedList() {
      const vm = this;
      return this.list.filter(
        item => item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1,
      );
    },
  },
  methods: {
    beforeEnter(el) {
      const elVal = el;
      elVal.style.opacity = 0;
      elVal.style.height = 0;
    },

    enter(el, done) {
      const delay = el.dataset.index * 150;
      setTimeout(() => {
        // eslint-disable-next-line no-undef
        Velocity(el, { opacity: 1, height: '1.6em' }, { complete: done });
      }, delay);
    },

    leave(el, done) {
      const delay = el.dataset.index * 150;
      setTimeout(() => {
        // eslint-disable-next-line no-undef
        Velocity(el, { opacity: 0, height: 0 }, { complete: done });
      }, delay);
    },
  },
};
</script>

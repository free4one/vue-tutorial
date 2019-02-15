<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h3>
      <router-link to="/tutorial">Totorial for Vue.js</router-link>
    </h3>
    <h3>
      <router-link to="/listenEvent">Listen event for Vue.js</router-link>
    </h3>
    <h3>
      <router-link to="/formBinding">Form binding for Vue.js</router-link>
    </h3>
    <h3>
      <router-link to="/regComponent">Regist component for Vue.js</router-link>
    </h3>
    <h3>
      <router-link to="/parent">Parent for Vue.js</router-link>
    </h3>
    <h3>
      <router-link to="/counterEvent">Counter Event for Vue.js</router-link>
    </h3>
    <h3>
      <router-link to="/speaks">Speaks for Vue.js</router-link>
    </h3>
    <h3>
      <router-link to="/useCustomEvent">Use custom event for Vue.js</router-link>
    </h3>
    <h3>
      <router-link to="/wrapperComponent">Wrapper component for Vue.js</router-link>
    </h3>
    <h3>
      <router-link to="/travel">Travel Map(slot-scope example) for Vue.js</router-link>
    </h3>
    <h3>
      <router-link to="/fadeDemo">Fade demo for Vue.js</router-link>
    </h3>
    <h3>
      <router-link to="/cssTransition">CSS Tracsition for Vue.js</router-link>
    </h3>
    <h3>
      <router-link to="/cstmTransitionCls">Customer Transition Class for Vue.js</router-link>
    </h3>
    <h3>
      <router-link to="/jstransition">JavaScript Transition for Vue.js</router-link>
    </h3>
    <h3>
      <router-link to="/fade">Fade for Vue.js</router-link>
    </h3>
    <h3>
      <router-link to="/lazysudoku">Lazy Sudoku for Vue.js</router-link>
    </h3>
    <h3>
      <router-link to="/staggeredListDemo">Staggered List Demo for Vue.js</router-link>
    </h3>
    <h3>
      <router-link to="/dynamicTransition">Dynamic fade Demo for Vue.js</router-link>
    </h3>
    <h3>
      <router-link to="/animatedNumberDemo">Animated Number Demo for Vue.js</router-link>
    </h3>
    <h3>
      <router-link to="/exampleComponent">Example for Animated Counter</router-link>
    </h3>
    <h3>
      <router-link to="/animatedColor">Example for Animated Color</router-link>
    </h3>

    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">Forum</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2,
h3 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

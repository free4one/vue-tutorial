<template>
  <div class="demoMain">
    <div class="demo">
      <!-- HTML은 kebab-case -->
      <child-component my-message="안녕하세요!"></child-component>
    </div>
    <br>
    <div class="demo">
      <label for="inParentMsg">부모 입력 메시지:</label>
      <input id="inParentMsg" v-model="parentMsg">
      <br>
      <label for="childMsg">자식에 표시되는 메시지:</label>
      <child-component id="childMsg" v-bind:my-message="parentMsg"></child-component>
    </div>
    <div class="demo">
      <child-object v-bind:todo="todo"></child-object>
    </div>
  </div>
</template>

<script>
import Child from './subcomponents/Child';
import ChildObject from './subcomponents/ChildObject';

export default {
  name: 'Parent',
  data() {
    return {
      parentMsg: '',
      todo: {
        text: 'Learn Vue',
        isComplete: false,
      },
    };
  },
  components: {
    'child-component': Child,
    'child-object': ChildObject,
  },
};
</script>

<style scoped>
.demoMain {
  width: 100%;
  text-align: -webkit-center;
}
.demo {
  width: 500px;
  border: 1px solid rgb(83, 255, 4);
  border-radius: 2px;
  padding: 25px 35px;
  margin-top: 1em;
  margin-bottom: 40px;
  font-size: 1.2em;
  line-height: 1.5em;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  overflow-x: auto;
}
</style>

<template>
  <div class="demoMain">
    <div class="demo">
      <input v-model="message" placeholder="여기를 수정해보세요.">
      <p>메시지: {{ message }}</p>
    </div>
    <div class="demo">
      <span>여러 줄을 가지는 메시지:</span>
      <p style="white-space: pre-line">{{ messages }}</p>
      <br>
      <textarea v-model="messages" placeholder="여러줄을 입력해 보세요."></textarea>
    </div>
    <div class="demo">
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox">{{ checked }}</label>
    </div>
    <div class="demo">
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="jhon" value="Jhon" v-model="checkedNames">
      <label for="jhon">Jhon</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>체크한 이름: {{ checkedNames }}</span>
    </div>
    <div class="demo">
      <input type="radio" id="one" value="One" v-model="picked">
      <label for="one">One</label>
      <br>
      <input type="radio" id="two" value="Two" v-model="picked">
      <label for="Two">Two</label>
      <br>
      <span>선택: {{ picked }}</span>
    </div>
    <div class="demo">
      <select v-model="selected">
        <option disabled value>Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>선택함: {{ selected }}</span>
    </div>
    <div class="demo">
      <v-select multiple v-model="multipleSelected" v-bind:options="multipleOptions"></v-select>
      <br>
      <span>Selected: {{ multipleSelected }}</span>
    </div>
    <div class="demo">
      <select v-model="forSelected">
        <option
          v-for="option in forOptions"
          v-bind:vlaue="option.value"
          v-bind:key="option.id"
        >{{ option.text }}</option>
      </select>
      <span>Selected: {{ forSelected }}</span>
    </div>
    <div class="demo">
      <!-- 'picked'는 선택시 문자열 "a" 입니다. -->
      <input type="radio" v-model="picked" value="a">

      <!-- 'toggle'는 true 또는 false 입니다. -->
      <input type="checkbox" v-model="toggle">

      <!-- 'selected'는 "ABC" 선택시 'abc' 입니다. -->
      <select v-model="selected">
        <option value="abc">ABC</option>
      </select>
    </div>
    <div class="demo">
      <input type="checkbox" v-model="toggle" true-value="yes" false-value="no">
      <span>선택: {{ toggle }}</span>
      <br>
      <input type="radio" v-model="pick" v-bind:value="a">
      <span>선택: {{ pick }}</span>
      <br>
      <select v-model="optSelected">
        <!-- inline object literal -->
        <option v-bind:value="{ number: 123 }">123</option>
      </select>
      <span>선택: {{ optSelected.number }}</span>
    </div>
    <div class="demo">
      <!-- "input" 대신 "change" 이후에 동기화 됩니다. -->
      <input v-model.lazy.trim="msg">
      <span>입력됨: {{ msg }}</span>
      <br>
      <input v-model.number="age" type="number">
      <span>입력됨: {{ age }}</span>
    </div>
  </div>
</template>

<script>
import vSelect from 'vue-select';

export default {
  name: 'FormBinding',
  data() {
    return {
      message: '',
      messages: '',
      checked: false,
      checkedNames: [],
      picked: '',
      selected: '',
      multipleSelected: [],
      multipleOptions: ['foo', 'bar', 'baz'],
      forSelected: '',
      forOptions: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' },
      ],
      toggle: 'no',
      a: 'yes',
      pick: 'no',
      optSelected: '',
      msg: '',
      age: 0,
    };
  },
  components: {
    'v-select': vSelect,
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

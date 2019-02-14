<template>
  <div>
    <div class="wrapper">
      <date-picker v-model="date"></date-picker>
      <p>
        Month: {{ date.month }}
        Year: {{ date.year }}
      </p>
    </div>
    <div class="wrapper">
      <stringy-date-picker v-model="value"></stringy-date-picker>
    </div>
    <div class="wrapper">
      <child-component></child-component>
    </div>
    <div class="wrapper">
      <h1>나는 보무 컨텐츠의 제목입니다.</h1>
      <my-component>
        <p>이것은 원본 컨텐츠 입니다.</p>
        <p>이것은 원본 중 추가 컨텐츠 입니다.</p>
      </my-component>
    </div>
    <app-layout>
      <h1 slot="header">여기에 페이지 제목이 위치합니다.</h1>

      <p>메인 컨텐츠의 단락입니다.</p>
      <p>하나 더 있습니다.</p>

      <p slot="footer">여기에 연락처 정보입니다.</p>
    </app-layout>
    <div class="wrapper">
      <h1>Child Slot Scope</h1>
      <child-slot-scope>
        <template slot-scope="props">
          <span>hello from parent</span>
          <span>{{ props.text }}</span>
        </template>
      </child-slot-scope>
    </div>
    <div class="wrapper">
      <h1>My Awesome List</h1>
      <my-awesome-list :items="{items}">
        <!-- scoped slot 역시 이름을 가질 수 있습니다. -->
        <li slot="item" slot-scope="props" class="my-fancy-item">{{ props.text }}</li>
      </my-awesome-list>
    </div>
  </div>
</template>

<script>
import DatePicker from './subcomponents/DatePicker';
import StringyDatePicker from './subcomponents/StringyDatePicker';
import ChildComponent from './subcomponents/ChildComponent';
import MyComponent from './subcomponents/MyComponent';
import AppLayout from './subcomponents/AppLayout';
import ChildSlotScope from './subcomponents/ChildSlotScope';
import MyAwesomeList from './subcomponents/MyAwesomeList';

export default {
  components: {
    'date-picker': DatePicker,
    'stringy-date-picker': StringyDatePicker,
    'child-component': ChildComponent,
    'my-component': MyComponent,
    'app-layout': AppLayout,
    'child-slot-scope': ChildSlotScope,
    'my-awesome-list': MyAwesomeList,
  },

  data() {
    return {
      date: {
        month: 1,
        year: 2019,
      },
      value: '10/2019',
    };
  },
};
</script>

<style scoped>
.wrapper {
  border: 1px solid red;
  border-collapse: separate;
  border-spacing: 15px;
  padding: 10px;
  border-radius: 10px;
}
</style>

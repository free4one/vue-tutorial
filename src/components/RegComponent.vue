<template>
  <div class="demoMain">
    <div class="demo">
      <my-component></my-component>
    </div>
    <div class="demo">
      <table>
        <th>
          <td class="head">NO.</td>
          <td class="head">TODO LIST</td>
        </th>
        <tr
          is="my-row"
          v-for="todo in todos"
          v-bind:key="todo.id"
          v-bind:title="todo.title"
          v-bind:index="todo.id">
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import MyComponent from './subcomponents/MyComponent';
import MyRow from './subcomponents/MyRow';

export default {
  name: 'RegComponent',
  data() {
    return {
      todos: [
        {
          id: 1,
          title: 'Do the dishes',
        },
        {
          id: 2,
          title: 'Take out the trash',
        },
        {
          id: 3,
          title: 'Mow the lawn',
        },
      ],
    };
  },
  components: {
    'my-component': MyComponent,
    'my-row': MyRow,
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
.head {
  text-align: center;
  font-weight: bold;
  color: rgb(162, 231, 0);
  border: 1px, solid, red;
}
table {
  border: 1px, solid, blue;
}
</style>

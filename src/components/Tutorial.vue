<template>
  <div class="tutorial">
    <input v-model="newTodoText" v-on:keyup.enter="addNewTodo" placeholder="Add a todo">
    <ul>
      <li
        is="todo-item"
        v-for="(todo, index) in todos"
        v-bind:key="todo.id"
        v-bind:title="todo.title"
        v-on:remove="todos.splice(index, 1)"
      ></li>
    </ul>
  </div>
</template>

<script>
import TodoItem from './subcomponents/TodoItem';

export default {
  name: 'Tutorial',
  data() {
    return {
      newTodoText: '',
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
      nextTodoId: 4,
    };
  },
  components: {
    'todo-item': TodoItem,
  },
  methods: {
    addNewTodo() {
      this.todos.push({
        id: (this.nextTodoId += 1),
        title: this.newTodoText,
      });
      this.newTodoText = '';
    },
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
</style>

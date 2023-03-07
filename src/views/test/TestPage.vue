<template>
  <div>
    <h1>Todo List</h1>
    <form @submit.prevent="addTodo">
      <input v-model="newTodoTitle" placeholder="Enter a new todo item" />
      <button type="submit">Add</button>
    </form>
    <form>
      <input v-model="searchTerm" placeholder="Search for a todo" />
      <button type="submit">Search</button>
    </form>
    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
        <p>{{ todo }}</p>
        <input type="checkbox" :checked="todo.completed" @change="toggleCompleted(todo.id)" />
        <span :class="{ completed: todo.completed }">{{ todo.title }}</span>
        <button @click="remove(todo.id)">X</button>
      </li>
    </ul>
    <button @click="test">test</button>
    <button @click="test1">test1</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useTodoStore, Todo } from '@/stores/index';

export default defineComponent({
  setup() {
    const todoStore = useTodoStore();

    const newTodoTitle = ref('');
    const searchTerm = ref('');

    const addTodo = () => {
      if (newTodoTitle.value.trim() !== '') {
        todoStore.add(newTodoTitle.value);
        newTodoTitle.value = '';
      }
    };

    const test = () => {
      todoStore.filterTodayTodos();
    };

    const test1 = () => {
      todoStore.filterTomorrowObjects();
    };

    const remove = (id: number) => {
      todoStore.remove(id);
    };

    const toggleCompleted = (id: number) => {
      todoStore.toggleCompleted(id);
    };

    const filteredTodos = computed(() =>
      todoStore.todos.filter((todo: Todo) => todo.title.toLowerCase().includes(searchTerm.value.toLowerCase()))
    );

    return {
      todos: todoStore.todos,
      newTodoTitle,
      searchTerm,
      filteredTodos,
      addTodo,
      remove,
      toggleCompleted,
      test,
      test1
    };
  },
});
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>

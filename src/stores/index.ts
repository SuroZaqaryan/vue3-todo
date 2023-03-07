import { defineStore } from 'pinia';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const useTodoStore = defineStore({
  id: 'todo',
  state: () => ({
    todos: [] as Todo[],
    nextId: 1,
    searchTerm: '',
  }),
  actions: {
    add(title: string) {
      const newTodo = {
        id: this.nextId,
        title,
        completed: false,
      };
      this.todos.push(newTodo);
      this.nextId++;
    },
    remove(id: number) {
      const index = this.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    },
    toggleCompleted(id: number) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    setSearchTerm(searchTerm: string) {
      this.searchTerm = searchTerm;
    },
  },
  getters: {
    filteredTodos(): any {
      return this.todos.filter((todo: Todo) =>
        todo.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
});

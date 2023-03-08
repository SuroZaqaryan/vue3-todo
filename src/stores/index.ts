import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import { TodoModel } from "@/models/todo.model"

export interface Todo {
  todos: TodoModel[];
}

export const useTodoStore = defineStore({
  id: 'todo',

  state: (): Todo => ({
    todos: [],
  }),

  actions: {
    add(title: string) {
      const newTodo = {
        id: uuidv4(),
        title,
        completed: false,
        createdAt: new Date(),
      };
      this.todos.push(newTodo);
    },

    sortedTodos(): any {
      return this.todos.sort((a: TodoModel, b: TodoModel) => a.createdAt.getTime() - b.createdAt.getTime());
    },

    // Today
    filterTodayTodos(): any {
      const today = new Date();
      const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

      return this.todos.filter((obj) => {
        const objDate = obj.createdAt;
        return objDate >= today && objDate < tomorrow;
      });
    },

    // filterTomorrowObjects
    filterTomorrowObjects(): any {
      const today = new Date();
      const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000); // Adding one day to today's date
      const nextDay = new Date(tomorrow.getTime() + 24 * 60 * 60 * 1000); // Adding one more day to get tomorrow's date

      return this.todos.filter((obj) => {
        const objDate = obj.createdAt;
        return objDate >= tomorrow && objDate < nextDay;
      });
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
  },
});

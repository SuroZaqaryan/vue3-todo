import { defineStore } from 'pinia';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { TodoModel } from "@/models/todo.model";

type TodoType = {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
};

export const useTodoStore = defineStore({
  id: 'todo',
  state: () => ({
    todos: [] as TodoModel[],
    searchTerm: '',
  }),
  actions: {
    add(title: string) {
      const newTodo = {
        id: uuidv4(),
        title,
        completed: false,
        createdAt: new Date(),
      };

      axios.post<TodoType>('http://localhost:4000/todos', newTodo)
        .then((response) => {
          this.todos.push(response.data);
        })
    },

    // Получаем сегодняшние заметки
    filterTodayTodos(): void {
      const today = new Date();
      const filteredTodos = this.todos.filter((item) => {
        const createdAtDate = new Date(item.createdAt);

        return (
          createdAtDate.getDate() === today.getDate() &&
          createdAtDate.getMonth() === today.getMonth() &&
          createdAtDate.getFullYear() === today.getFullYear()
        );
      });
      this.todos = filteredTodos;
    },

    async toggleCompleted(id: number) {
      await axios.patch<TodoType>(`http://localhost:4000/todos/${id}`, { completed: true })
        .then(() => {
          const todo = this.todos.find((todo) => todo.id === id);

          if (todo) {
            todo.completed = !todo.completed;
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },

    // filterTomorrowObjects
    filterTomorrowObjects(): any {
      const today = new Date();

      const yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 1);

      const newTodo = {
        id: uuidv4(),
        title: "Static todo",
        completed: false,
        createdAt: yesterday
      };

      axios.post<TodoType>('http://localhost:4000/todos', newTodo)
        .then((response) => {
          this.todos.push(response.data);
        })
    },

    async remove(id: number) {
      try {
        await axios.delete<TodoType>(`http://localhost:4000/todos/${id}`).then(() => {
          this.todos = this.todos.filter(todo => todo.id !== id)
        })
        // this.todos = this.todos.filter(todo => todo.id !== id)
      } catch (error) {
        console.log(error)
      }
    },

    setSearchTerm(searchTerm: string) {
      this.searchTerm = searchTerm;
    },
  },
  getters: {
    filteredTodos(): any {
      return this.todos.filter((todo: TodoModel) =>
        todo.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
});

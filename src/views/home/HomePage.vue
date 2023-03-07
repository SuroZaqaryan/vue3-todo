<script lang="ts">
import { ref, defineComponent, computed, onMounted, watch } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { getAuth, signOut } from "firebase/auth";
import { useUserStore } from "@/stores/user";
import { useTodoStore } from "@/stores/todo";
import { TodoModel } from "@/models/todo.model";

export default defineComponent({
  name: "HomePage",

  setup() {
    const auth = getAuth();
    const user = useUserStore();
    const router = useRouter();

    // Todo
    const todoStore = useTodoStore();
    const newTodoTitle = ref("");
    const searchTerm = ref("");

    const options = ["Все", "Сегодняшние"];
    const selectedOption = ref<string>("");

    // Получаем заметки из локального сервера
    onMounted(async () => {
      getAllTodos();
    });

    watch(selectedOption, (newValue) => {
      switch (newValue) {
        case "Все":
          // Фильтр для всех заметок
          getAllTodos();
          break;
        case "Сегодняшние":
          // Фильтр для сегодняшных заметок
          todoStore.filterTodayTodos();
          break;
        default:
          getAllTodos();
          break;
      }
    });

    // Добавление задачи
    const addTodo = () => {
      if (newTodoTitle.value.trim() !== "") {
        todoStore.add(newTodoTitle.value);
        newTodoTitle.value = "";
      }
    };

    const unCheck = () => (selectedOption.value = "");

    // Задача завершена
    const toggleCompleted = (id: number) => todoStore.toggleCompleted(id);

    // computed для поиска
    const filteredTodos = computed(() =>
      todoStore.todos.filter((todo: TodoModel) =>
        todo.title.toLowerCase().includes(searchTerm.value.toLowerCase())
      )
    );

    // Получаем заметки
    const getAllTodos = async () => {
      try {
        const res = await axios.get<TodoModel[]>("http://localhost:4000/todos");
        todoStore.todos = res.data;
      } catch (error) {
        console.error(error);
      }
    };

    // Удаление заметки
    const removeTodo = (id: number) => todoStore.remove(id);

    // Добовляет статистическую заметку со вчерашней датой
    const createTomorrowTodo = () => {
      todoStore.filterTomorrowObjects();
      selectedOption.value = "";
    };

    // Выход из аккаунта
    function handleSignOut() {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          localStorage.removeItem("user");
          router.push("/login");
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
    }

    return {
      user,
      options,
      searchTerm,
      newTodoTitle,
      filteredTodos,
      selectedOption,
      unCheck,
      addTodo,
      removeTodo,
      getAllTodos,
      handleSignOut,
      toggleCompleted,
      createTomorrowTodo,
    };
  },
});
</script>

<template>
  <div class="p-2 mobile:p-5">
    <div class="max-w-1xl m-auto">
      <div class="px-8 py-5 border border-[#bdbdbd]">
        <div
          class="flex items-center justify-between flex-wrap gap-3 rounded bg-indigo-700 p-3 mb-5"
        >
          <div>
            <h2 class="text-lg mobile:text-2xl text-white font-bold">
              {{ user.username }} 🧑
            </h2>
          </div>
          <div class="w-full mobile:w-auto">
            <button
              @click="handleSignOut"
              class="w-full bg-transparent text-white text-sm py-2 px-4 border border-white rounded"
            >
              Выйти из аккаунта
            </button>
          </div>
        </div>
        <div class="flex justify-between mb-5">
          <div>
            <h3 class="mb-1 text-xl">Список задач</h3>
            <p class="text-gray-600">Успевай больше и ничего не забывай</p>
          </div>
        </div>

        <form
          @submit.prevent="addTodo"
          class="block mobile:flex items-center gap-4 flex-wrap mobile:flex-nowrap"
        >
          <div class="basis-[90%] mb-4 mobile:mb-0">
            <input
              type="text"
              v-model="newTodoTitle"
              placeholder="Новая задача..."
              class="w-full rounded-lg text-sm border border-gray-400 focus:ring-0"
              maxlength="70"
              required
            />
          </div>
          <div class="basis-[10%]">
            <input
              type="submit"
              value="Добавить"
              class="w-full rounded-lg bg-indigo-700 hover:bg-indigo-600 cursor-pointer text-white py-2 px-4 text-sm"
            />
          </div>
        </form>
      </div>

      <div class="px-8 py-6 bg-gray-100">
        <div>
          <input
            type="text"
            v-model="searchTerm"
            placeholder="Поиск..."
            class="w-full rounded-lg text-sm border border-gray-400 focus:ring-0"
          />
        </div>

        <div
          class="flex flex-wrap justify-between items-end mt-4 bg-[#3f51b517] p-4 rounded"
        >
          <div>
            <div class="flex items-center">
              <img
                class="mr-2"
                width="22"
                height="22"
                src="@/assets/icons/filter-icon.svg"
              />
              <h3 class="text-lg">Фильтры</h3>
            </div>

            <div class="mt-2">
              <label for="all" class="flex items-center cursor-pointer mb-1">
                <input
                  v-model="selectedOption"
                  type="radio"
                  id="all"
                  name="all"
                  value="Все"
                  class="mr-2 cursor-pointer"
                />
                <span class="text-sm">Все</span>
              </label>

              <label for="todays" class="flex items-center cursor-pointer">
                <input
                  v-model="selectedOption"
                  type="radio"
                  id="todays"
                  name="todays"
                  value="Сегодняшние"
                  class="mr-2 cursor-pointer"
                />
                <span class="text-sm">Сегодняшние</span>
              </label>

              <button
                :disabled="selectedOption.length !== 0 ? false : true"
                @click="unCheck"
                class="bg-indigo-600 hover:bg-indigo-700 text-white mt-3 text-sm font-bold py-2 px-4 border border-indigo-700 rounded"
              >
                Сбросить фильтры
              </button>
            </div>
          </div>
          <div class="mt-4 md:mt-0">
            <!-- Данная кнопка добовляет статистическую заметку со вчерашневой датой для проверки роботоспособности фильтра -->
            <button
              @click="createTomorrowTodo"
              title="Данная кнопка добовляет статистическую заметку со вчерашневой датой для проверки роботоспособности фильтра"
              class="bg-red-500 hover:bg-red-400 text-white text-sm font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
            >
              Добавить заметку со вчерашневой датой
            </button>
          </div>
        </div>

        <div class="my-5">
          <p class="text-gray-600">Текущие задачи</p>
        </div>

        <div class="grid gap-4 grid-cols-1 grid-rows-2 md:grid-cols-2">
          <div
            v-for="todo in filteredTodos"
            :key="todo.id"
            :class="{ 'line-through': todo.completed }"
            class="flex items-center justify-between p-3 select-none rounded cursor-pointer border border-gray-400"
          >
            <label
              :for="todo.id.toString()"
              class="flex w-[90%] items-center cursor-pointer"
            >
              <div class="mr-2 bg-red-500">
                <input
                  type="checkbox"
                  :id="todo.id.toString()"
                  @change="toggleCompleted(todo.id)"
                  :checked="todo.completed"
                  class="flex cursor-pointer focus:ring-0"
                />
              </div>
              <div class="w-[90%]">
                <span class="todo-title">{{ todo.title }}</span>
              </div>
            </label>

            <div @click="removeTodo(todo.id)">
              <p class="text-red-500 text-sm font-semibold">Удалить</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.todo-title {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>

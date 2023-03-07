<script lang="ts">
import { useRouter } from 'vue-router'
import { defineComponent } from "vue";
import { getAuth, signOut } from "firebase/auth";
import { useUserStore } from '@/stores/user';


export default defineComponent({
  name: "App",

  setup() {
    const auth = getAuth();
    const user = useUserStore();
    const router = useRouter();

    function handleSignOut() {
      signOut(auth).then(() => {
       // Sign-out successful.
       localStorage.removeItem("user");
       router.push('/login');
      }).catch((error) => {
        // An error happened.
        console.log(error);
      });
    }

    return {
      user,
      handleSignOut
    };
  },
});
</script>

<template>
  <div class="p-5">
    <div class="max-w-1xl m-auto">
      <div class="px-8 py-5 border border-[#bdbdbd]">
        <div class="flex justify-between rounded bg-indigo-700 p-3 mb-5">
          <div>
            <h2 class="text-2xl text-white font-bold">{{ user.username }} 🧑</h2>
          </div>
          <div>
            <button
              @click="handleSignOut"
              class="bg-transparent text-white text-sm py-2 px-4 border border-white rounded"
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

        <div class="flex items-center gap-4">
          <div class="basis-[90%]">
            <input
              type="text"
              placeholder="Новая задача..."
              class="w-full rounded-lg text-sm border border-gray-400 focus:ring-0"
              required
            />
          </div>
          <div class="basis-[10%]">
            <input
              type="submit"
              value="Добавить"
              class="rounded-lg bg-indigo-700 hover:bg-indigo-600 cursor-pointer text-white py-2 px-4 text-sm"
            />
          </div>
        </div>
      </div>

      <div class="px-8 py-6 bg-gray-100">
        <div>
          <input
            type="text"
            placeholder="Поиск..."
            class="w-full rounded-lg text-sm border border-gray-400 focus:ring-0"
          />
        </div>

        <div class="my-5">
          <p class="text-gray-600">Текущие задачи</p>
        </div>

        <div class="grid gap-4 grid-cols-2 grid-rows-2">
          <label
            class="flex items-center p-3 select-none rounded cursor-pointer border border-gray-400"
            for="scales"
          >
            <div class="mr-2">
              <input
                id="scales"
                class="flex cursor-pointer focus:ring-0"
                type="checkbox"
              />
            </div>
            <div><span>Название задачи</span></div>
          </label>

          <label
            class="flex items-center p-3 select-none rounded cursor-pointer border border-gray-400"
            for="scales"
          >
            <div class="mr-2">
              <input
                id="scales"
                class="flex cursor-pointer focus:ring-0"
                type="checkbox"
              />
            </div>
            <div><span>Название задачи</span></div>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

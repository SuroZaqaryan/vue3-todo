<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { generateFakeData, Item } from "@/models/item.model";
import { useMainStore } from "@/stores/index";

export default defineComponent({
  name: "App",

  setup() {
    const items = ref<Item[]>([]);

    const mainStore = useMainStore();

    onMounted(() => {
      items.value = mainStore.items;
    });

    function createItem() {
      mainStore.createNewItem(generateFakeData());
    }

    function deleteItem(id: string) {
      mainStore.deleteItem(id);
    }

    function updateItem(id: string) {
      mainStore.updateItem(id, generateFakeData());
    }

    // const handleClickSignOut = async () => {
    //   try {
    //     await this.$gAuth.signOut();
    //     localStorage.setItem("user", this.Vue3GoogleOauth.isAuthorized);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    return {
      items,
      createItem,
      deleteItem,
      updateItem,
    };
  },
});
</script>

<template>
  <div class="p-5">
    <div class="max-w-1xl m-auto">
      <div class="px-8 py-5 border border-[#bdbdbd]">
        <div class="flex justify-between mb-5">
          <div>
            <h3 class="mb-1 text-xl">Список задач</h3>
            <p class="text-gray-600">Успевай больше и ничего не забывай</p>
          </div>

          <div class="mt-2">
            <button
              class="bg-transparent hover:bg-gray-600 text-black-600 text-sm hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
            >
              Выйти
            </button>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <div class="basis-[90%]">
            <input
              type="text"
              placeholder="Новая задача..."
              class="w-full rounded-lg text-sm border border-gray-400 focus:ring-0"
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

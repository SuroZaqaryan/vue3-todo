<template>
  <h1>Grocery List App</h1>

  <button @click="createItem">New Item</button>

  <div>
    <div
      v-for="(item, index) in items"
      :key="index"
      style="
        background-color: #f5f5f5;
        padding: 10px;
        margin-bottom: 10px;
        margin-top: 10px;
      "
    >
      <code>{{ item }}</code>
      <button @click="deleteItem(item.id)">Delete</button>
      <button @click="updateItem(item.id)">Update</button>
    </div>
  </div>
</template>

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

    return {
      items,
      createItem,
      deleteItem,
      updateItem,
    };
  },
});
</script>

<style scoped>
button {
  background-color: orange !important;
  border: 2px solid;
  margin: 5px !important;
}
</style>

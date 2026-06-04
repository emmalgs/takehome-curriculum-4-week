<template>
  <div style="padding:2rem;font-family:sans-serif">
    <h1>Inventory</h1>
    <!-- TODO: category filter, items table, add-item form, detail sidebar -->
    <p>Build your UI here. API base: http://localhost:8000</p>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
const items = ref([]);
onMounted(async () => {
  // TODO: const { data } = await axios.get('http://localhost:8000/items');
  // items.value = data;
});
</script>

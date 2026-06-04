<template>
  <div style="padding: 2rem; font-family: sans-serif">
    <h1>Employee Directory</h1>

    <!-- TODO: department filter dropdown -->
    <!-- departments: All, Engineering, Design, Product, Marketing -->
    <select @change="/* TODO: update filter and refetch */">
      <option value="">All departments</option>
    </select>

    <!-- TODO: employee list -->
    <div v-if="loading">Loading...</div>
    <div v-else-if="error" style="color: red">{{ error }}</div>
    <div v-else>
      <!-- TODO: render employees as cards -->
      <pre>{{ employees }}</pre>
    </div>

    <!-- TODO: profile card for selected employee -->
    <div v-if="selected" style="margin-top: 2rem; padding: 1rem; border: 1px solid #ccc">
      <h2>Profile</h2>
      <pre>{{ selected }}</pre>
      <button @click="selected = null">Close</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const API = 'http://localhost:8000';
const employees = ref([]);
const selected = ref(null);
const department = ref('');
const loading = ref(false);
const error = ref(null);

async function fetchEmployees() {
  loading.value = true;
  try {
    // TODO: fetch employees, apply department filter if set
    // const params = department.value ? { department: department.value } : {};
    // const { data } = await axios.get(`${API}/employees/`, { params });
    // employees.value = data;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
}

onMounted(fetchEmployees);
</script>

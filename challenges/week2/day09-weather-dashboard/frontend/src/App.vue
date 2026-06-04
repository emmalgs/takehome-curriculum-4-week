<template>
  <div style="padding: 2rem; font-family: sans-serif">
    <h1>Weather Dashboard</h1>

    <!-- TODO: city search input + button -->
    <input v-model="city" placeholder="Enter city..." @keyup.enter="fetchWeather" />
    <button @click="fetchWeather">Search</button>

    <div v-if="loading">Loading...</div>
    <div v-else-if="error" style="color:red">{{ error }}</div>
    <div v-else-if="weather">
      <!-- TODO: current conditions card -->
      <!-- TODO: 5-day forecast row (horizontal scroll) -->
      <pre>{{ weather }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const city = ref('');
const weather = ref(null);
const loading = ref(false);
const error = ref(null);

async function fetchWeather() {
  if (!city.value) return;
  loading.value = true;
  error.value = null;
  try {
    // TODO: fetch from backend /weather?city={city}
    // const { data } = await axios.get(`http://localhost:8000/weather?city=${city.value}`);
    // weather.value = data;
  } catch (err) {
    error.value = err.response?.data?.detail || err.message;
  } finally {
    loading.value = false;
  }
}
</script>

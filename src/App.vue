<template>
  <h1 class="text-center">Cek</h1>
  <compNav title="Ini title" description="iniDeskrip"></compNav>
</template>

<script setup>
import compNav from './components/navbar.vue';
import { onMounted } from 'vue';
// const sedikit = ref(1);
const ambildata = async () => {
  // const response = await fetch('http://localhost:3000/api/users');
  // const jsonData = await response.json();
  // console.log(jsonData);
  // sedikit.value = jsonData.users;
}
onMounted(() => {
  ambildata();
})
</script>

<style></style>

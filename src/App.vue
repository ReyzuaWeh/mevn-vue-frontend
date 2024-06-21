<template>
  <RouterView></RouterView>
</template>

<script setup>
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

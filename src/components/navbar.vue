<template>
    <nav class="bg-gray-800 text-zinc-300 py-5">
        <div class="flex justify-between px-3">
            <h1 class="font-bold text-3xl">MEVN Project</h1>
            <ul class="flex w-1/4 justify-between my-auto">
                <li :class="{ 'focus': (route.name == 'Home') }">
                    <router-link to="/">Home</router-link>
                </li>
                <li :class="{ 'focus': (route.name == 'About') }">
                    <router-link to="/about">About</router-link>
                </li>
                <li :class="{ 'focus': (route.name == 'Contact') }">
                    <router-link to="/about">Contact</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
import { useRoute } from 'vue-router';
export default {
    name: 'compNavbar',
    setup() {
        const route = useRoute()
        return {
            route
        }
    }
}
</script>
<style scoped>
li {
    font-size: 20px;
    color: honeydew;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    text-underline-offset: 0px;
}

li:hover {
    color: rgb(131, 131, 131);
    text-decoration: underline;
    text-underline-offset: 10px;
}

.focus {
    text-decoration: underline;
    text-underline-offset: 15px;
}
</style>
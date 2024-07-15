<template>
    <div class="min-h-screen flex align-middle min-w-full bg-[url('../assets/bgLogin.jpeg')] bg-cover">
        <form class="formLogin" @submit.prevent="login">
            <div class="mb-5">
                <label for="nama" class="block mb-2 text-sm font-medium text-stone-950 dark:text-white">
                    Username/Email
                </label>
                <input type="text" id="nama" v-model="nama"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div class="mb-5">
                <label for="password" class="block mb-2 text-sm font-medium text-stone-950 dark:text-white">
                    Password
                </label>
                <input type="text" id="password" v-model="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <!-- <div class="flex items-start mb-5">
                <div class="flex items-center h-5">
                    <input id="remember" type="checkbox" value=""
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        required />
                </div>
                <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember
                    me</label>
            </div> -->
            <button type="submit" class=" text-gray-200 bg-indigo-700 hover:bg-indigo-900 hover:text-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
                transition-all duration-500">
                Submit
            </button>
        </form>

    </div>
</template>
<script>
import { auth } from '../utils/instance';
export default {
    name: 'loginLayout',
    setup() {
        const { nama, password, err, login } = auth();
        return {
            nama,
            password,
            err,
            login
        }
    }
}
</script>
<style scoped></style>
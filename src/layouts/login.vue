<template>
    <div class="container bg-slate-500 max-h-screen">
        <form method="get" @submit.prevent="login">
            <label>Nama :</label>
            <input type="text" v-model="nama"><br>
            <label>Password :</label>
            <input type="text" v-model="password"><br>
            <button type="submit">Submit</button>
        </form>
        {{ err }}
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
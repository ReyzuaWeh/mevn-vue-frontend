<template>
    <div>
        {{ login }}
        <compNavbar></compNavbar>
        <router-view></router-view>
    </div>
</template>
<script>
import compNavbar from '../components/navbar.vue';
export default {
    name: 'mainLayout',
    components: {
        compNavbar
    },
    setup() {
        const login = sessionStorage.getItem('isLoggedIn') ? true : false;
        return {
            login
        }
    }
}
</script>
<style lang="">

</style>
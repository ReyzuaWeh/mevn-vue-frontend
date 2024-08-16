<template>
    <div>
        <compNavbar></compNavbar>
        <content class="flex p-10 w-full gap-x-10">
            <sidebar></sidebar>
            <router-view></router-view>
        </content>
    </div>
</template>
<script>
import sidebar from '@/components/sidebar.vue';
import compNavbar from '../components/navbar.vue';
export default {
    name: 'mainLayout',
    components: {
        compNavbar,
        sidebar
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
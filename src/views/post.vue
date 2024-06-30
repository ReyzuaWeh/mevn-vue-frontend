<template>
    <div class="max-w-md bg-slate-300 shadow-md rounded-md p-4 mb-4">
        {{ postingan.user }}
    </div>
</template>
<script>
import { onBeforeMount } from 'vue';
export default {
    name: 'viewPost',
    props: {
        postingan: {
            type: Object,
            required: true
        }
    },
    setup(props) {
        onBeforeMount(() => {
            console.log(props.postingan);
        })
    }
}
</script>
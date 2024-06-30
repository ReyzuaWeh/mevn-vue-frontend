<template>
    <div>
        <div v-if="dataPosts" class="flex flex-col-reverse">
            <ViewPost v-for="(post, index) in dataPosts.result" :key="index" :postingan="post" />
        </div>
    </div>
</template>
<script>
import { onBeforeMount, ref } from 'vue';
import ViewPost from './post.vue';
export default {
    name: 'viewHome',
    components: {
        ViewPost
    },
    setup() {
        const dataPosts = ref(null)
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/v1/post/read/post', {
                    method: 'POST',
                });
                dataPosts.value = await response.json();
                console.log(dataPosts.value)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        onBeforeMount(() => {
            fetchData()
        })
        return {
            dataPosts,
        }
    },
}
</script>

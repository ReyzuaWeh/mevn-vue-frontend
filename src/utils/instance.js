import Swal from 'sweetalert2';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export function auth() {
    const nama = ref("");
    const router = useRouter();
    const password = ref("");
    const err = ref()
    const login = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nama: nama.value,
                    password: password.value
                })
            });
            const jawab = await response.json();
            console.log(jawab);
            sessionStorage.setItem('token', JSON.stringify({
                value: jawab.value,
            }));
            err.value = !jawab.msg;
            if (!response.ok) {
                Swal.fire({
                    title: 'Gagal Login',
                    icon: 'error',
                    text: 'Username atau Email atau Password mungkin salah',
                    timer: 5000
                });
                return 0;
            }
            router.push('/');
        } catch (err) {
            console.log(err);
            Swal.fire({
                title: 'Tidak Dapat Login',
                icon: 'error',
                timer: 5000
            });
        }
    }
    return {
        nama,
        password,
        err,
        login
    }
}
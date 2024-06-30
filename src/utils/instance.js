import { ref } from 'vue';

export function auth() {
    const nama = ref("");
    const password = ref("");
    const err = ref()
    const login = async () => {
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nama: nama.value,
                password: password.value
            })
        });
        sessionStorage.setItem('token', JSON.stringify({
            value: true,
        }));
        sessionStorage.removeItem('isLoggedIn');
        const jawab = await response.json();
        console.log(jawab);
        err.value = jawab.message;
    }
    return {
        nama,
        password,
        err,
        login
    }
}
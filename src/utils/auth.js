const cekAuth = () => {
    const token = JSON.parse(sessionStorage.getItem('token') || localStorage.getItem('token'));
    console.log(token);
    return !token ? false : token.value;
}
export { cekAuth };

const cekAuth = () => {
    const token = sessionStorage.getItem('token') || localStorage.getItem('token');
    return !token ? false : true;
}
export { cekAuth };

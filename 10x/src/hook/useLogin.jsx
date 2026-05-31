import axios from 'axios';
function useLogin() {
    const Login = async ( email, password) => {
    try {
        const response = await axios.post('/api/login', { email, password });
        console.log('User logged in successfully', response.data);
        return response.data;
    } catch (error) {
        console.error('Login failed:', error);
    }
}
return { Login };
}

export default useLogin
import axios from 'axios';
function useRegister() {
 const Login = (username, phone, email , password) => { 
 try {
  const response = axios.post('/api/register',
     { username, phone, email, password });
    
    console.log('User registered successfully', response.data); 
    return response.data;
 } catch (error) {
    console.error('Registration failed:', error);
 }
}
return { Login };
}

export default useRegister
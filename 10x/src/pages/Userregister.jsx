/* eslint-disable no-unused-vars */
import React from 'react'
import useRegister from '../hook/useRegister';
function Userregister() {
const [username, setUsername] = React.useState('');
const [email, setEmail] = React.useState('');
const [phone, setPhone] = React.useState('');
const [password, setPassword] = React.useState('');
const { Login } = useRegister();
const handleSubmit =async (e) => {
    e.preventDefault();
    // Handle registration logic here
    await Login(username, email, password, phone);
};

  return (
    <>
    <form className="max-w-md mx-auto mt-10 p-6 bg-blue-100 rounded shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">User Registration</h1>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"/>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                Phone Number
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="Phone Number"/>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"/>
        </div>
        <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Register
            </button>
        </div>
    </form>
    
    </>

)
}

export default Userregister
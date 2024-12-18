import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import login from '../../assets/login.jpg'
import { Link } from "react-router-dom";
import axios from "axios";
const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Name, setName] = useState('');

    const handleSubmit =async (e) => {
        e.preventDefault();
        const payload = {
            Username: Name,
            email,password
        }
        const response =await axios.post('http://localhost:8008/api/register', payload,{
            withCredentials: true,
        })
        if(response){
            console.log(response.data.message);
        }
        console.log('Login attempt:', { email, password });
    };

    return (
        <div className='mx-6 h-[100vh] flex flex-col'>
            <Navbar></Navbar>
            <div className='flex  justify-center items-center bg-gray-50 flex-grow'>
                <div className='w-3/5 flex bg-slate-400 p-4 rounded-lg shadow-lg'>
                    <div className="w-1/2">

                        <img src={login} alt="login image" className="rounded-xl h-full w-full" />

                    </div>
                    <div className='w-1/2 px-8 md:px-16 flex flex-col justify-center'>
                        <h2 className="font-bold text-2xl text-[#002D74]">Register </h2>
                        <p className="text-xs mt-4 text-[#002D74]">If you are not a member, easily register here</p>
                        <form onSubmit={handleSubmit} className='mt-4'>
                            <div className='flex flex-col mt-4 gap-3'>
                                <label htmlFor="name" className="text-[#002D74]">Name</label>
                                <input
                                    className='w-full p-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#002D74]'
                                    type="name"
                                    id="name"
                                    value={Name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder='Enter Name ...'
                                    required
                                />
                            </div>
                            <div className='flex flex-col mt-4 gap-3'>
                                <label htmlFor="email" className="text-[#002D74]">Email</label>
                                <input
                                    className='w-full p-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#002D74]'
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Enter Email ...'
                                    required
                                />
                            </div>
                            <div className='flex flex-col mt-4 gap-3'>
                                <label htmlFor="password" className="text-[#002D74]">Password</label>
                                <input
                                    className='w-full p-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#002D74]'
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder='Enter your password here'
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-[#002D74] rounded-xl w-full mt-4 text-white py-2 hover:scale-105 duration-300"
                            >
                                Register
                            </button>
                        </form>


                        <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                            <p>Already have an account?</p>
                            <button
                                className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
                            >
                                <Link to='/login'>Login</Link>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;
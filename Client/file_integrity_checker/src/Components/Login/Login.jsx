import { Link } from 'react-router-dom';
import login from '../../assets/login.jpg'
import Navbar from '../Navbar/Navbar';
const Login = () => {
    return (
        <div className='mx-6 h-[100vh] flex flex-col'>
            <div>  <Navbar></Navbar></div>
            <div className='flex justify-center items-center  bg-gray-50'>

                <div className='w-3/5 flex bg-slate-400 p-4'>
                    <div className='w-1/2 px-8 md:px-16 '>
                        <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
                        <p className="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in</p>
                        <form className='mt-4'>
                            <div className='flex flex-col mt-4 gap-3'>
                                <label htmlFor="email">Email</label>
                                <input className='w-full p-2 rounded-xl' type="email" name='email' placeholder='Enter Email ...' />
                            </div>
                            <div className='flex flex-col mt-4 gap-3'>
                                <label htmlFor="password">Password</label>
                                <input className='w-full p-2 rounded-xl' type="password" name='password' placeholder='Enter your password here' />
                            </div>
                            <button className="bg-[#002D74] rounded-xl w-full mt-4 text-white py-2 hover:scale-105 duration-300">Login</button>
                        </form>
                        <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
                            <a href="#">Forgot your password?</a>
                        </div>

                        <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                            <p>Don`t have an account?</p>
                            <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"><Link>Register</Link></button>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <img className='rounded-lg object-cover' src={login} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
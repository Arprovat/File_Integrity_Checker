import { Link } from 'react-router-dom';
import { LuFileCheck2 } from "react-icons/lu";



const Navber = () => {
    return (
        <div className='flex  justify-between items-center  h-14 '>
      
                <div className="text-3xl  font-bold ">
                
                    <p className="bg-gradient-to-r flex justify-center items-center from-rose-950 via-rose-800 to-rose-900 bg-clip-text text-transparent hover:to-rose-950 hover:via-rose-800 hover:from-rose-900">Check <LuFileCheck2 className='text-rose-900 hover:text-rose-800'/>Integrity</p>
                </div>
          

            <div className='flex justify-center items-center gap-4 max-md:hidden text-black font-semibold'>
                <p className='hover:shadow-md hover:border-b-2 border-rose-900 ease-in-out duration-100 cursor-pointer'>View file</p>
                <p className='hover:shadow-md hover:border-b-2 border-rose-900 ease-in-out duration-100 cursor-pointer'>About</p>
                <p className='hover:shadow-md hover:border-b-2 border-rose-900 ease-in-out duration-100 cursor-pointer'>Contract</p>
            </div>
            <div className='h-10 rounded-lg w-20 hover:shadow-lg  bg-gradient-to-r from-rose-950 via-rose-800 to-rose-900 
             hover:to-rose-950 hover:via-rose-800 hover:from-rose-900 
            hover:scale-110 ease-in-out delay-100 duration-150 flex justify-center items-center bg-transparent border-2'>
                <button className='font-bold text-zinc-950 '><Link to='/login'>Login</Link></button>
            </div>

        </div>
    );
};

export default Navber;
import Navbar from "../Navbar/Navbar";
import bg_icon from '../../assets/bg-icon.png'
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="mx-6 h-[100vh]">
            <div>
                <Navbar></Navbar>
            </div>
            <div className="py-28 relative z-10">
                <h1 className="text-5xl  font-extrabold bg-gradient-to-r from-rose-950 via-rose-800 to-rose-900 bg-clip-text text-transparent   text-center">
                    Welcome to <br /> <TypeAnimation 
                          sequence={[
                            'File Integrity Checker...',
                            1000, 
                            'File Integrity ',
                            1000,
                            'File',
                            1000,
                            'File Integrity Checker...',
                            1000
                          ]}
                          wrapper="span"
                          speed={50}

                          style={{ display: 'inline-block' }} 
                          repeat={Infinity}
                    
                    />
                </h1>
                <p className="w-[60%] pt-6 mx-auto text-justify text-gray-800 font-semibold">
                Welcome to IntegrityVault, your secure companion for file integrity verification. Protect your files and ensure their authenticity with ease. Upload your files, generate unique digital fingerprints (hashes), and safeguard against unauthorized changes. Whether your an individual safeguarding personal documents or a professional ensuring data integrity, IntegrityVault is here to provide a seamless experience. Start your journey to file security today!
                </p>
                <div className="absolute top-20 right-4  z-0">
                    <img className="opacity-15" src={bg_icon} alt="Background Icon" />
                </div>
            
            <div className=" flex justify-evenly mx-auto items-center w-3/5 mt-8 ">
            <div className="flex justify-evenly mx-auto items-center w-3/5 mt-12">
    <div className="h-10 rounded-lg w-32 hover:shadow-lg 
        bg-gradient-to-r from-cyan-500 to-blue-500  
        hover:scale-110 ease-in-out delay-100 duration-150 
        flex justify-center items-center">
        <Link to="/register" className="font-bold text-zinc-950">
            Get Started
        </Link>
    </div>
    <div className="h-10 z-50 rounded-lg w-20 hover:shadow-lg 
        bg-gradient-to-r from-rose-950 via-rose-800 to-rose-900 
        hover:to-rose-950 hover:via-rose-800 hover:from-rose-900 
        hover:scale-110 ease-in-out delay-100 duration-150 
        flex justify-center items-center border-2">
        <Link to="/login" className="font-bold text-zinc-950">
            Login
        </Link>
    </div>
</div>


        </div></div></div>
    );
};

export default Home;

import { createBrowserRouter,  } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from './../Components/Register/Register';
import Main from "../Components/Main/Main";
import FileIntegrityChecker from "../Components/FileIntegrityChecck/FIleIntegrityCheck";



const Router = createBrowserRouter([
    {
        path:'/',
        element: <Home></Home>
    },
    {
        path:'/login',
        element: <Login></Login>
    },
    {
        path:'/register',
        element: <Register></Register>
    },
    {
            path:'/main',
            element: <Main></Main>,
            children:[
            {
                path: 'postAndCheck',
                element:<FileIntegrityChecker></FileIntegrityChecker>
            }

            ]
    }
])

export default Router
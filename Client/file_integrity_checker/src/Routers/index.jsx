import { createBrowserRouter,  } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";



const Router = createBrowserRouter([
    {
        path:'/',
        element: <Home></Home>
    },
    {
        path:'/login',
        element: <Login></Login>
    }
])

export default Router
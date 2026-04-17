import {createBrowserRouter} from "react-router"
import Login from "./features/pages/Login"
import Register from "./features/pages/Register"
import Protected from "./features/components/Protected"

export const router= createBrowserRouter([
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/",
        element:<Protected><h1> WELCOME TO MY HOUSE</h1></Protected>
    }
])
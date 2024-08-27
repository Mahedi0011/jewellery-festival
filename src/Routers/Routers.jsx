

import { createBrowserRouter } from "react-router-dom";
import Error from "../Component/ErrorPage/Error";
import Root from "../Component/Root/Root"; 
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/RegisterPage/Register";
import ProductAbout from "../Component/ProductAbout/ProductAbout";
import PrivetRoute from "../Component/PrivetRoute/PrivetRoute";
import Blog from "../Component/Blog/Blog";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: ([
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/productAbout',
                element:<PrivetRoute><ProductAbout></ProductAbout></PrivetRoute>
            },
            {
                path: '/blog',
                element:<PrivetRoute><Blog></Blog></PrivetRoute>
            },
        ]
        )
    },
]);



export default router;
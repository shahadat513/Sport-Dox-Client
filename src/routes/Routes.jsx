import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import AddEquipment from "../pages/AddEquipment";
import AllEquipment from "../pages/AllEquipment";
import CardDetails from "../components/CardDetails";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: "/allEquipment",
                element: <AllEquipment></AllEquipment>,
                loader: () => fetch('http://localhost:5000/products') 
                
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/addEquipment",
                element: <AddEquipment></AddEquipment>                

            },
            {
                path: "/cardDetails/:id",
                element: <CardDetails></CardDetails>,
                loader: () => fetch('http://localhost:5000/products') 
            },
            {
                path: "/signin",
                element: <SignIn></SignIn>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            }
        ]
    },
]);


export default routes;

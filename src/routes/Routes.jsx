import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import AddEquipment from "../pages/AddEquipment";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/addEquipment",
                element: <AddEquipment></AddEquipment>

            }
        ]
    },
]);


export default routes;

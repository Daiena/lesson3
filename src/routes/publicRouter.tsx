import {PublicLayout} from "components";
import {createBrowserRouter, RouteObject} from "react-router-dom";
const publicRoutes:RouteObject[]=[
    {
        path:"/",
        element: <PublicLayout />
    }
]

export const publicRouter=createBrowserRouter(publicRoutes);
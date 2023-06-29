import {PublicLayout} from "components";
import { AboutPage, ContactPage, ErrorPage, HomePage, ProductsPage } from "pages";
import TestPage from "pages/TestPage";

import {createBrowserRouter, RouteObject} from "react-router-dom";
const publicRoutes:RouteObject[]=[
    {
        path:"/",
        element: <PublicLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path:'/products',
                element: <ProductsPage/>,
            },
            {
                path:'/about',
                element: <AboutPage/>,
            },
            {
                path:'/contact',
                element: <ContactPage/>,
            },
            {
                path:'/contact/random/name',
                element: <TestPage/>,
            },
            {
                path:'/contact/random',
                element: <AboutPage/>,
            },
        ]
    },    
];

export const publicRouter=createBrowserRouter(publicRoutes);
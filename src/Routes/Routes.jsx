import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Product from "../Pages/Product/Product";

export const router = createBrowserRouter ([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/products/:id',
                element: <Products />
            },
            {
                path: '/product/:id',
                element: <Product />
            }
        ]
    }
])
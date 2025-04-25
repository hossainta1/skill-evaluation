import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import ProductList from "../pages/ProductList/ProductList";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import OrderPlace from "../components/OrderPlace/OrderPlace";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },

        {
            path: '/product',

            element: <ProductList></ProductList>
        },

        {
            path: "/product/:id",

            element: <ProductDetails></ProductDetails>
        },

        {
          path: "/order",
          element: <OrderPlace></OrderPlace>
        }
      ]
    },
  ]);
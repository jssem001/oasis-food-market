import React from "react"; import Home from "./pages/Home"; import BuyPage from "./pages/BuyPage";
import Latest from "./pages/Latest"; import MyProducts from "./pages/MyProducts";
import Settings from "./pages/Settings"; import Cart from "./pages/Cart"; import Checkout from "./pages/Checkout";
import Category1 from "./pages/category1"; import ErrorPage from "./pages/ErrorPage";
import SingleProduct from "./pages/SingleProduct"; import UpdateProduct from "./pages/UpdateProduct";
const router =[
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path:"/Latest",
    element: <Latest />
  },
  {
    path:"/MyProducts",
    element: <MyProducts />
  },
  {
    path:"/Settings",
    element: <Settings />
  },
  {
    path:"/Cart",
    element: <Cart />
  },
  {
    path:"/Category1",
    element: <Category1 />
  },
  {
    path: "/single-product/:id",
    element: <SingleProduct />
  },
  {
    path: "/update-product/:id",
    element: <UpdateProduct />
  },
  {
    path: "/buy-page/:id",
    element: <BuyPage />
  },
  {
    path:"/Checkout",
    element: <Checkout />
  }
  ];

export default router;
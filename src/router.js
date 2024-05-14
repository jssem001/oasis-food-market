import React from "react";
import Home from "./pages/Home";
import Latest from "./pages/Latest";
import MyProducts from "./pages/MyProducts";
import Settings from "./pages/Settings";
import Cart from "./pages/Cart";

const router =[
  {
    path: "/",
    element: <Home />
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
  }
  ];

export default router;
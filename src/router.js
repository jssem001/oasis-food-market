import React from "react"; import Home from "./pages/Home";
import Latest from "./pages/Latest"; import MyProducts from "./pages/MyProducts";
import Settings from "./pages/Settings"; import Cart from "./pages/Cart";
import Category1 from "./pages/category1";

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
  },
  {
    path:"/Category1",
    element: <Category1 />
  }
  ];

export default router;
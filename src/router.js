import React from "react";
import Home from "./pages/Home";
import Latest from "./pages/Latest";

const router =[
  {
    path: "/",
    element: <Home />
  },
  {
    path:"/Latest",
    element: <Latest />
  }
  ];

export default router;
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./router.js"

const routes = createBrowserRouter(router);
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<RouterProvider router={routes} />);

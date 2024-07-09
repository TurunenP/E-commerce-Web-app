import React from "react";
//import ReactDOM from "react-dom";

import { createRoot } from "react-dom/client";

import Shop from "./shop/Shop.jsx";
import App from "./App.jsx";
import "./index.css";
import "swiper/css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "././assets/css/icofont.min.css";
import "././assets/css/animate.css";
import "././assets/css/style.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home/Home.jsx";
import Blog from "./blog/Blog.jsx";
import SingleProduct from "./shop/SingleProduct.jsx";
import CartPage from "./shop/CartPage.jsx";
import SingleBlock from "./blog/SingleBlock.jsx";
import About from "./home/About.jsx";
import AboutPage from "./about/AboutPage.jsx";
import Contact from "./contact/Contact.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import Login from "./login/Login.jsx";
//import LoginPage from "./loginpage/LoginPage.jsx";
// import LoginDemo from "./components/LoginDemo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/:id", element: <SingleBlock /> },
      { path: "/shop", element: <Shop /> },
      { path: "/shop/:id/", element: <SingleProduct /> },
      // {
      //   path: "/cart-page",
      //   element: <Login />,
      // },
      {
        path: "/cart-page",
        element: (
          <PrivateRoute>
            <Login/>
          </PrivateRoute>
        ),
      },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  // {
  //   path: "/login", element: <LoginDemo/>
  // }
]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);

 //<RouterProvider router={router} />

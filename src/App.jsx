import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Router from "./Router/Router";
import Home from "./Components/Home/Home";
import CartPage from "./Components/CartPage/CartPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Router />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home/Home.jsx';
import Main from './components/Layout/Main.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OrderReview from './components/OrderReview/OrderReview';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("data.json")
      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "review",
        element: <OrderReview></OrderReview>
      },
      {
        path: "contact",
        element: <Contact></Contact>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
  import MovieDetail from './components/MovieDetail/MovieDetail.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
  const router = createBrowserRouter([
    {
      path: "/popcornia/",
      element: (
        <App />
      ),
    },
    {
      path: "/popcornia/movie/:id",
      element:    <MovieDetail />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    }
  ]);
  
ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
    

)

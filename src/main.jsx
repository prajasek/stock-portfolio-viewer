import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import { StockOverview } from '@routes/StockOverview';
import { StockDetails } from '@routes/StockDetails';


const routes = createBrowserRouter([{
    path: "/",
    element: <App />, 
    children: [
      {
        index:true, element: <StockOverview />
      },
      {
        path: "detail/:symbol",
        element: <StockDetails />,
      }
    ]
}])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)

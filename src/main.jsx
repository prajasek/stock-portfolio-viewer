import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import { StockOverview } from '@routes/StockOverview';
import { StockDetails } from '@routes/StockDetails';
import "./App.css"
import "./api/finn"

function EE() {
  return <h1> Error Page. </h1>
}

const routes = createBrowserRouter([{
    path: "/",
    loader: (p) => p, 
    element: <App />, 
    children: [
      {
        index:true, element: <StockOverview />
      },
      {
        loader: ({params}) => params,
        path: "detail/:symbol",
        element: <StockDetails />,
        errorElement: <EE />
      }
    ]
}])

console.log("->\n", routes)
console.log( <RouterProvider router={routes}/>)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)

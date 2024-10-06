import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import Layout from './Layout/Layout'
import Start from './Pages/Start'
import ErrorPage from './Pages/ErrorPage'

import './index.css'
import OurCompany from './Pages/OurCompany'
import Contact from './Pages/Contact'
import Locations from './Pages/Locations'


const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"/",
        element:<Start />
      },
      {
        path:"/locations",
        element:<Locations />
      },
      {
        path:"/aboutus",
        element:<OurCompany />
      },
      {
        path:"/contact",
        element: <Contact />
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './Layout/RootLayout'


const router =createBrowserRouter(
  [
    {
      path:"/",
      element: <RootLayout/> ,
      children:[
        {
          //path:"/",
            index:true,
          element:<h2>Homepage</h2>,
        },
        {
          path:"/friends",
          element:<h2>Friends</h2>,
        }
      ],
      errorElement:<h2>This Page is not found</h2>,
    },
    
  ]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
  
  <RouterProvider router={router}/>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './Layout/RootLayout'
import Friends from './Pages/Friends/Friends'
import Timeline from './Pages/Timeline/Timeline'


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
          element:<Friends/>,
        },
        {
          path:"/timeline",
          element:<Timeline/>,
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

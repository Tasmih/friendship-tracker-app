import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Homepage from "../Pages/Homepage/Homepage";
import Friends from "../Pages/Friends/Friends";
import Timeline from "../Pages/Timeline/Timeline";
import Stats from "../Pages/Stats/Stats";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import FriendDetails from "../Pages/FriendDetails/FriendDetails";

export const router =createBrowserRouter(
  [
    {
      path:"/",
      element: <RootLayout/> ,
      children:[
        {
          //path:"/",
            index:true,
          element:<Homepage/>,
          loader :()=> fetch ("/friends.json")
        },
        {
          path:"/friend/:id",
          element:<FriendDetails/>,
        },
        {
          path:"/timeline",
          element:<Timeline/>,
        },
        {
          path:"/stats",
          element:<Stats/>,
        }
      ],
      errorElement:<NotFoundPage/>,
    },
    
  ]);
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";

import Homepage from "../Pages/Homepage/Homepage";
import FriendDetails from "../Pages/FriendDetails/FriendDetails";
import Timeline from "../Pages/Timeline/Timeline";
import Stats from "../Pages/Stats/Stats";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
        loader: () => fetch("/friends.json"),
      },
      {
        path: "/friend/:id",
        element: <FriendDetails />,
      },
      {
        path: "/timeline",
        element: <Timeline />,  
      },
      {
        path: "/stats",
        element: <Stats />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);
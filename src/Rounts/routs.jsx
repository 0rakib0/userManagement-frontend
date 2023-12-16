import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../RootPage/Root";
import Dashbord from "../Pages/Dashbord/Dashbord";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <h1>Page not found Something wrong...</h1>,
      children: [
        {
            path:'/',
            element: <Dashbord></Dashbord>
        },
        {
          path:'/register',
          element: <Register></Register>
        },
        {
          path:'/login',
          element: <Login></Login>
        }
      ]
    },
  ]);

  export default router
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../RootPage/Root";
import Dashbord from "../Pages/Dashbord/Dashbord";
import Register from "../Pages/Register/Register";


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
        }
      ]
    },
  ]);

  export default router
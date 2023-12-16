import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../RootPage/Root";
import Dashbord from "../Pages/Dashbord/Dashbord";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <h1>Page not found Something wrong...</h1>,
      children: [
        {
            path:'/',
            element: <Dashbord></Dashbord>
        }
      ]
    },
  ]);

  export default router
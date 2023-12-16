import { Outlet } from "react-router-dom"
import NavBar from "../SharePages/NavBar/Navbar"

const Root = () =>{
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    )
}


export default Root
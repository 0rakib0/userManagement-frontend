import { NavLink } from "react-router-dom"

const NavBar = () => {


    const NavLinks = <>
        <li className="text-lg"><NavLink to='/'>Dashbord</NavLink></li>
        <li className="text-lg md:ml-3"><NavLink to='/logout'>Logout</NavLink></li>
        <li className="text-lg md:ml-3"><NavLink to='/login'>Login</NavLink></li>
        <li className="text-lg md:ml-3"><NavLink to='/register'>Register</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-primaryColor text-white uppercase  shadow-lg shadow-primaryColor/50 rounded-b-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </div>
                    <p className="text-white text-4xl font-bold md:pl-3">LOGO</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <p className="text-xl md:pr-4 text-white">Rakib</p>
                </div>
            </div>
        </div>
    )
}


export default NavBar
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-blue-800 text-white">
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavLink to="/"><li><a>Home</a></li></NavLink>
                            <NavLink to="/"><li><a>All Sports Equipment</a></li></NavLink>
                            <NavLink to="/blogs"><li><a>Blogs</a></li></NavLink>
                        </ul>
                    </div>
                    <NavLink to="/"><a className="btn btn-ghost text-xl">SPORT-DOX</a></NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink to="/"><li><a>Home</a></li></NavLink>
                        <NavLink to="/allEquipment"><li><a>All Sports Equipment</a></li></NavLink>
                        <NavLink to="/blogs"><li><a>Blogs</a></li></NavLink>
                        <NavLink to="/addEquipment"><li><a>Add Equipment</a></li></NavLink>

                    </ul>
                </div>
                <div className="navbar-end gap-4">
                <NavLink to="/signin"><div className="">
                    <a className="btn">Sign in</a>
                </div></NavLink>
                <NavLink to="/signup"><div className="">
                    <a className="btn">Sign UP</a>
                </div></NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

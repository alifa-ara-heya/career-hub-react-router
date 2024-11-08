import { useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const setNavLinkActiveClass = ({ isActive }) => `duration-100 ${isActive ? "custom-gradient focus:text-white" : "hover:text-purple-600 hover:bg-transparent active:bg-gradient-to-r active:from-indigo-300 active:to-purple-500"}`;

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible((prevVisible) => !prevVisible);
    };

    const hideMenu = () => {
        setMenuVisible(false);
    };
    const links = <>

        <li className="p-2"><NavLink onClick={hideMenu} to='/' className={setNavLinkActiveClass}>Home</NavLink></li>
        <li className="p-2"><NavLink onClick={hideMenu} className={setNavLinkActiveClass} to='/applied-jobs'>Applied Jobs</NavLink></li>
        <li className="p-2"><NavLink onClick={hideMenu} to='/statistics' className={setNavLinkActiveClass}>Statistics</NavLink></li>

    </>

    return (
        <div className="bg-gray-100">
            <div className="navbar max-w-[1440px]  mx-auto py-5">
                <div className="navbar-start ">

                    {/* mobile menu starts */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="px-3 lg:hidden hover:scale-y-95" onClick={toggleMenu}>
                            <RiMenuLine size={22} />
                        </div>
                        <ul
                            tabIndex={0}
                            className={`menu menu-sm dropdown-content bg-purple-100/20 backdrop-blur-xl rounded-box z-[1] mt-3 w-52 p-2 shadow text-base md:text-lg font-bold ${menuVisible ? "" : "hidden"
                                }`}
                        >
                            {links}
                        </ul>
                    </div>
                    {/* mobile menu ends */}

                    <Link to='/' className="text-xl md:text-3xl font-bold">Career Hub</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-base md:text-lg font-bold ">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="custom-btn h-14">Start Applying</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
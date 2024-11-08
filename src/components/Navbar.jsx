import { RiMenuLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const setNavLinkActiveClass = ({ isActive }) => `${isActive ? "bg-gradient-to-r from-indigo-300 to-purple-500 text-white" : 'hover:bg-gradient-to-r from-indigo-300 to-purple-500 hover:text-white'}`;

    const links = <>

        <li><NavLink to='/' className={setNavLinkActiveClass}>Home</NavLink></li>
        <li><NavLink className={setNavLinkActiveClass} to='/applied-jobs'>Applied Jobs</NavLink></li>
        <li><NavLink to='/statistics' className={setNavLinkActiveClass}>Statistics</NavLink></li>

    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <RiMenuLine size={22} />

                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {/* links */}
                        {links}
                    </ul>
                </div>
                <Link to='/' className="text-3xl font-bold">Career Hub</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn bg-gradient-to-r from-indigo-300 to-purple-500 text-white">Start Applying</Link>
            </div>
        </div>
    );
};

export default Navbar;
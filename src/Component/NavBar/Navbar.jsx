import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        logOut()
            .then((res => {
                console.log(res.user)
           

            }))
            .catch((err => {
                console.log(err.message)
            }))

    }
    const link = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600" : ""
            }
        ><li className="mr-4 text-lg font-semibold">Home</li>
        </NavLink>

        <NavLink
            to="/productAbout"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600" : ""
            }
        >
            <li className="mr-4 text-lg font-semibold">About</li>
        </NavLink>

        <NavLink
            to="/blog"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600" : ""
            }
        > <li className="mr-4 text-lg font-semibold">Blog</li>
        </NavLink>

        {
            user ? <Link to={'/login'}>
                <button onClick={handleSignOut}>
                    <li className="mr-4 text-lg font-semibold">Sign Out</li></button>
            </Link>
                :
                <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-600" : ""
                    }
                > <li className="mr-4 text-lg font-semibold">Login</li>
                </NavLink>

        }

        <NavLink>


            <div className="text-xl">
                {
                    user ? <h3>{user.email}</h3> : ""
                }
            </div>


        </NavLink>


    </>


    return (
        <div className="">
            <div className="navbar bg-base-100">
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
                            className="menu justify-center menu-sm fixed dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Fastive Best Jewellery</a>
                </div>
                <div className="navbar-end hidden justify-center lg:flex">
                    <ul className=" menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
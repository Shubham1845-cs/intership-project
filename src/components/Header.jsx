
import {Link,NavLink} from 'react-router-dom'
import React from 'react'
import logo from '../logo (2).png';
import { useNavigate } from 'react-router-dom';
export default  function Header() {
    const navigate=useNavigate();
    const logout=()=>
    {
        localStorage.removeItem('token');
        navigate('/login');
    }
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-black  border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            className="mr-3 h-16 rounded-lg"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="/login"
                            className="text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="/registration"
                            className="text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Registration
                        </Link>
                         <button
                            onClick={logout}
                            className="text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Logout
                        </button>

                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 text-white duration-200 ${isActive ?"text-orange-700 ":"text-gray-700 " } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                > 
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/uploadhistory"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 text-white  duration-200 ${isActive ?"text-orange-700 ":"text-gray-700 " } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                > 
                                    UploadHistory
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/About"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 text-white duration-200 ${isActive ?"text-orange-700 ":"text-gray-700 " } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/Contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 text-white duration-200 ${isActive ?"text-orange-700 ":"text-gray-700 " } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                    
                                </NavLink>
                            </li>
                         
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}



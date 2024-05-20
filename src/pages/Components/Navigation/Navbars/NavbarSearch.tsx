import React from "react";
import useActiveLink from "./useActiveLink";
import { Bell, ShoppingBag, UserCircle, Menu } from "lucide-react";

// Image
import logoDark from "assets/images/logo-dark.png";
import logoLight from "assets/images/logo-light.png";

const NavbarSearch = () => {

    const { activeLink, handleLinkClick } = useActiveLink(".navbar-menu li.active");

    return (
        <React.Fragment>
            <h6 className="mb-4 mt-7 text-16">Navbar with Search</h6>

            <nav className="group-data-[skin=bordered]:shadow-sm group-data-[skin=bordered]:border group-data-[skin=bordered]:border-slate-200 group-data-[skin=bordered]:dark:border-zink-500 flex items-center h-16 px-4 py-2 bg-white rounded-md shadow-md  dark:bg-zink-700 navbar">
                <div className="shrink-0">
                    <a href="#!"><img src={logoDark} alt="" className="block h-5 dark:hidden" /></a>
                    <a href="#!"><img src={logoLight} alt="" className="hidden h-5 dark:block" /></a>
                </div>
                <div className="mx-1 xl:mx-4">
                    <input type="text" className="py-2 px-4 text-sm text-slate-700 bg-white border border-slate-200 rounded placeholder:text-gray-400 form-input focus-visible:outline-0 max-w-[300px] hidden lg:block focus:border-custom-400 dark:bg-zink-700 dark:border-zink-500 dark:placeholder:text-zink-200 dark:text-zink-50 dark:focus:border-custom-500" placeholder="Search..." autoComplete="off" />
                </div>
                <ul id="navbar1" className="absolute inset-x-0 z-20 items-center hidden py-3 mx-auto bg-white shadow-lg dark:bg-zink-600 dark:md:bg-transparent md:z-0 grow navbar-menu rounded-b-md md:shadow-none md:flex top-full md:relative md:bg-transparent md:rounded-none md:top-auto md:py-0">
                    <li>
                        <a href="#!"
                            className={`block md:inline-block px-4 md:px-3 py-2.5 md:py-0.5 text-15 font-medium text-slate-800 transition-all duration-300 ease-linear hover:text-custom-500 [&.active]:text-custom-500 dark:text-zink-100 dark:hover:text-custom-500 dark:[&.active]:text-custom-500 ${activeLink === "/Home" ? "active" : ""}`}
                            onClick={() => handleLinkClick("/Home")}
                        >Home</a>
                    </li>
                    <li>
                        <a href="#!"
                            className={`block md:inline-block px-4 md:px-3 py-2.5 md:py-0.5 text-15 font-medium text-slate-800 transition-all duration-300 ease-linear hover:text-custom-500 [&.active]:text-custom-500 dark:text-zink-100 dark:hover:text-custom-500 dark:[&.active]:text-custom-500 ${activeLink === "/About" ? "active" : ""}`}
                            onClick={() => handleLinkClick("/About")}
                        >About Us</a>
                    </li>
                    <li>
                        <a href="#!"
                            className={`block md:inline-block px-4 md:px-3 py-2.5 md:py-0.5 text-15 font-medium text-slate-800 transition-all duration-300 ease-linear hover:text-custom-500 [&.active]:text-custom-500 dark:text-zink-100 dark:hover:text-custom-500 dark:[&.active]:text-custom-500 ${activeLink === "/Blog" ? "active" : ""}`}
                            onClick={() => handleLinkClick("/Blog")}
                        >Blog</a>
                    </li>
                    <li>
                        <a href="#!"
                            className={`block md:inline-block px-4 md:px-3 py-2.5 md:py-0.5 text-15 font-medium text-slate-800 transition-all duration-300 ease-linear hover:text-custom-500 [&.active]:text-custom-500 dark:text-zink-100 dark:hover:text-custom-500 dark:[&.active]:text-custom-500 ${activeLink === "/Contact" ? "active" : ""}`}
                            onClick={() => handleLinkClick("/Contact")}
                        >Contact</a>
                    </li>
                </ul>
                <ul id="navbar2" className="flex items-center ltr:ml-auto rtl:mr-auto">
                    <li>
                        <a href="#!"
                            className="inline-flex items-center justify-center size-10 transition-all duration-300 ease-linear tems-center text-slate-500 hover:text-custom-500 active:text-custom-500 dark:text-zink-200 dark:hover:text-custom-500 dark:active:text-custom-500 group/item">
                            <ShoppingBag className="size-4 fill-slate-50 dark:fill-zink-500 group-hover/item:fill-custom-50 dark:group-hover/item:fill-custom-500/20" />
                        </a>
                    </li>
                    <li>
                        <a href="#!"
                            className="inline-flex items-center justify-center size-10 transition-all duration-300 ease-linear tems-center text-slate-500 hover:text-custom-500 active:text-custom-500 dark:text-zink-200 dark:hover:text-custom-500 dark:active:text-custom-500 group/item">
                            <Bell className="size-4 fill-slate-50 dark:fill-zink-500 group-hover/item:fill-custom-50 dark:group-hover/item:fill-custom-500/20" />
                        </a>
                    </li>
                    <li>
                        <a href="#!"
                            className="inline-flex items-center justify-center size-10 transition-all duration-300 ease-linear tems-center text-slate-500 hover:text-custom-500 active:text-custom-500 dark:text-zink-200 dark:hover:text-custom-500 dark:active:text-custom-500 group/item">
                            <UserCircle className="size-4 fill-slate-50 dark:fill-zink-500 group-hover/item:fill-custom-50 dark:group-hover/item:fill-custom-500/20" />
                        </a>
                    </li>
                </ul>
                <div className="md:hidden navbar-toggale-button">
                    <button type="button" className="flex items-center  justify-center size-[37.5px] p-0 text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"><Menu /></button>
                </div>
            </nav>
        </React.Fragment >
    );
}

export default NavbarSearch;
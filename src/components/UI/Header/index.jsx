import { React, useState } from "react";
import Menu from "./Menu/index";
import SearchInput from "./SearchInput";

// Styles
import styles from "./styles.module.scss";

// Hamburger react comp
import Hamburger from "hamburger-react";
import Navigation from "./Navigation";
import Topbar from "./Topbar/index";

const Header = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <Topbar />
            <div className={`${styles.header} m-auto  px-3 xl:py-3`}>
                <div className="xl:container grid grid-cols-12 items-center py-5 xl:mx-auto">
                    {/* Menu */}
                    <div className="col-span-2 flex xl:hidden">
                        <div
                            className={`${styles.menuContainer} ${
                                isOpen == true ? styles.menuInnerBtn : ""
                            } w-12 h-12 flex justify-center items-center rounded`}
                        >
                            <Hamburger
                                size={20}
                                color="#ECD690"
                                toggled={isOpen}
                                toggle={setOpen}
                            />
                        </div>
                    </div>

                    {/* Logo */}
                    <div className="col-span-8 xl:col-span-3 flex justify-center xl:justify-start">
                        <img
                            src="/svg/logo.svg"
                            className="h-12 xl:h-16"
                            alt=""
                            width={500}
                            height={500}
                        />
                    </div>

                    {/* Search desktop */}

                    <div className="col-span-6 hidden xl:block">
                        <SearchInput />
                    </div>

                    {/* Cart & Wishlist */}
                    <div className="col-span-2 xl:col-span-3 flex justify-end">
                        {/* Wishlist */}
                        <a href="" className="w-auto h-10 hidden xl:flex items-center text-primary text-xs bg-black rounded mr-5 p-3">
                            <img src="svg/heart.svg" className="h-5 mr-2" alt="" />Lista de desejos
                        </a>
                        {/* Cart */}
                        <a
                            href="#"
                            className={`${styles.cartBtn} w-10 h-10 flex justify-center items-center p-2 rounded`}
                        >
                            <img src="/svg/cart.svg" className="h-5" alt="" />
                        </a>
                    </div>
                </div>

                {/* Navbar */}
                <div className="hidden xl:block">
                    <Navigation />
                </div>

                {/* Search mobile */}
                <div className="grid grid-cols-12 xl:hidden">
                    <div className="col-span-12 relative">
                        <SearchInput />
                    </div>
                </div>
            </div>
            <Menu isOpen={isOpen} />
        </>
    );
};

export default Header;

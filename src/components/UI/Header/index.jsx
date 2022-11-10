import { React, useState } from "react";
import Menu from "./Menu/index";
import SearchInput from "./SearchInput";

// Styles
import styles from "./styles.module.scss";

// Hamburger react comp
import Hamburger from "hamburger-react";
import Navigation from "./Navigation";

const Header = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
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
                    {/* Search desktop */}

                    <div className="col-span-3 hidden xl:block">
                        <SearchInput />
                    </div>
                    {/* Logo */}
                    <div className="col-span-8 xl:col-span-7 flex justify-center">
                        <img
                            src="/svg/logo.svg"
                            className="max-h-12"
                            alt=""
                            width={500}
                            height={500}
                        />
                    </div>

                    {/* Cart */}
                    <div className="col-span-2 xl:col-span-2 flex justify-end">
                        <a
                            href="#"
                            className={`${styles.cartBtn} w-12 h-12 flex justify-center items-center p-2 rounded`}
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

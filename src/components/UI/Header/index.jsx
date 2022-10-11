import React from "react";
import Menu from "./Menu/index";
import SearchInput from "./SearchInput";

// Styles
import styles from "./styles.module.scss";

const Header = () => {
    return (
        <div className={`${styles.header} container m-auto px-3 bg-slate-600`}>
            <div className="grid grid-cols-12 items-center py-5">
                <div className="col-span-2 flex">
                    <div
                        className={`${styles.menuContainer} w-10 h-10 flex justify-center items-center p-2 rounded`}
                    >
                        <Menu />
                    </div>
                </div>
                <div className="col-span-8">
                    <img
                        src="/svg/logo.svg"
                        className="max-h-12"
                        alt=""
                        width={500}
                        height={500}
                    />
                </div>
                <div className="col-span-2 flex justify-end">
                    <a
                        href="#"
                        className={`${styles.cartBtn} w-10 h-10 flex justify-center items-center p-2 rounded`}
                    >
                        <img src="/svg/cart.svg" className="h-4" alt="" />
                    </a>
                </div>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-12 relative">
                    <SearchInput />
                </div>
            </div>
        </div>
    );
};

export default Header;

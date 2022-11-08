import { React, useState } from "react";

// Styles
import styles from "./styles.module.scss";

// Hamburger react comp
import Hamburger from "hamburger-react";

const Menu = ({ isOpen, setOpen }) => {
    return (
        <>
            <div className={`${isOpen == true ? styles.sidebarActive : ""} ${styles.sideBar} `}>
            </div>
        </>
    );
};

export default Menu;

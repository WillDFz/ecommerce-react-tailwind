import { React, useState } from "react";

import Hamburger from "hamburger-react";

const Menu = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <img src="svg/hamburger.svg" className="h-4" alt="" />
        </>
    );
};

export default Menu;

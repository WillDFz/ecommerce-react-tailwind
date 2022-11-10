// React
import { useEffect, useState } from "react";

// Axios
import axios from "axios";

// Styles
import styles from "./styles.module.scss";


const Menu = ({ isOpen }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/categories`)
            .then((response) => {
                setCategories(response.data);
            });
    }, []);
    return (
        <>
            <div
                className={`${isOpen == true ? styles.sidebarActive : ""} ${
                    styles.sideBar
                } `}
            >
                <div className="relative top-12 mt-12 px-3">
                    <ul>
                        {categories.map((category) => (
                            <li key={category} className="text-secondary border-b border-gray-600 capitalize py-2">{category}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Menu;

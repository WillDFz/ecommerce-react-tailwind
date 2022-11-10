// React
import { useEffect, useState } from "react";

// Axios
import axios from "axios";

// Styles
import styles from "./styles.module.scss"

const Navigation = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/categories`)
            .then((response) => {
                setCategories(response.data);
            });
    }, []);
    return (
        <div className={`${styles.navigation} border-opacity-75 pt-3`}>
            <ul className="flex justify-evenly">
                {categories.map((category) => (
                    <li key={category}>
                        <a
                            href=""
                            className="text-primary capitalize opacity-70 hover:opacity-90"
                            rel="norrefer"
                        >
                            {category}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navigation;

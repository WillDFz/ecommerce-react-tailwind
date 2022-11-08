// React
import { useEffect, useState } from "react";

import styles from "./styles.module.scss";

// Axios
import axios from "axios";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";

// Components
import ItemProduct from "../ItemProduct";

const HomeProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`).then((response) => {
            setProducts(response.data);
        });
    }, []);

    return (
        <section className="my-5">
            <div className="container px-3 ">
                <h2 className={`${styles.sectionTitle} mb-4 text-secondary`}>
                    Todos produtos
                </h2>
                <Swiper
                    spaceBetween={15}
                    slidesPerView={2.5}
                    autoplay={{
                        delay: 3500,
                    }}
                    loop={true}
                    modules={[Autoplay]}
                >
                    {products.map((product) => {
                        return (
                            <SwiperSlide key={product.id}>
                                <ItemProduct
                                    id={product.id}
                                    title={product.title}
                                    price={product.price}
                                    image={product.image}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
};

export default HomeProducts;

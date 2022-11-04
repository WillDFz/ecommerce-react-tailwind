// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const HomeSlider = () => {
    return (
        <>
            <Swiper spaceBetween={0} slidesPerView={1}>
                <SwiperSlide>
                    <img src="images/banner1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="images/banner1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="images/banner1.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default HomeSlider;

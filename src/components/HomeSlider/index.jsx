// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const HomeSlider = () => {
    return (
        <>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000,
                }}
                pagination={true}
                modules={[Autoplay, Pagination]}
            >
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

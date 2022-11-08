// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";

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
                modules={[Autoplay]}
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

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

// Banners json
import banners from "../../../../pages/api/banners.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const HomeSlider = () => {
    const homeBanners = banners.filter((section) => {
        return section.name === "Home Banners";
    });

    const bannersDesktop = homeBanners[0].banners.find(
        (target) => target.id === 2
    );

    return (
        <div className="hidden xl:block">
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
                {/* Desktop slide */}
                {bannersDesktop.desktop.map((banner) => (
                    <SwiperSlide key={banner.id}>
                        <img src={banner.image} className="w-full" alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HomeSlider;

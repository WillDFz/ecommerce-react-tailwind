// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

// Banners json
import banners from "../../../../pages/api/banners.json";

// Import Swiper styles
import "swiper/css";

const HomeSliderMobile = () => {
    const homeBanners = banners.filter((section) => {
        return section.name === "Home Banners";
    });

    const bannersMobile = homeBanners[0].banners.find(
        (target) => target.id === 1
    );

    return (
        <div className="xl:hidden">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                }}
                pagination={true}
                modules={[Autoplay, Pagination]}
            >
                {/* Mobile slide */}
                {bannersMobile.mobile.map((banner) => (
                    <SwiperSlide key={banner.id} className="">
                        <img src={banner.image} alt="" />
                    </SwiperSlide>
                ))}
                
            </Swiper>
        </div>
    );
};

export default HomeSliderMobile;

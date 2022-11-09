import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Banners json
import banners from "../../../../pages/api/banners.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const InformativeBanners = () => {
    const informativeBanners = banners.filter((section) => {
        return section.name === "Informative Banners";
    });
    return (
        <section className="container background- px-3 py-7">
            <Swiper
                slidesPerView={1.25}
                spaceBetween={15}
                breakpoints={{
                    768: {
                        slidesPerView: 2.2,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                }}
            >
                {informativeBanners[0].banners.map((banner) => (
                    <SwiperSlide key={banner.id} className="flex items-center">
                        <div className="mr-3">
                            <img src={banner.icon} className="h-9" alt="" />
                        </div>
                        <div>
                            <h1 className="text-secondary text-md font-bold">
                                {banner.title}
                            </h1>
                            <h3 className="text-primary text-sm opacity-90">
                                {banner.description}
                            </h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default InformativeBanners;

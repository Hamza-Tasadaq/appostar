
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const BannerSlider = () => {
    return (
        <Swiper modules={[Navigation, Pagination, Autoplay]} pagination={{ clickable: true }} navigation={true} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} className="mySwiper swiper client-review-swiper rounded">
            <div className="swiper-wrapper h-100 w-100">
                <SwiperSlide className='w-100 my-shop-banner-slide'>
                    <img className='rounded w-100' src="https://demo.fleetcart.envaysoft.com/storage/media/yAaq3dHTWLOlac12ioxGgVrZ3xtrIhKnL5r3roIl.png" alt="Slider 1" />
                </SwiperSlide>
                <SwiperSlide className=' w-100 my-shop-banner-slide'>
                    <img className='rounded w-100' src="https://demo.fleetcart.envaysoft.com/storage/media/kTJZ8JjEO16NYuj28aN9f88c1SKIm9ELvYOE8pvC.png" alt="Slider 2" />
                </SwiperSlide>
                <SwiperSlide className='w-100 my-shop-banner-slide'>
                    <img className='rounded w-100' src="https://demo.fleetcart.envaysoft.com/storage/media/kTJZ8JjEO16NYuj28aN9f88c1SKIm9ELvYOE8pvC.png" alt="Slider 2" />
                </SwiperSlide>
            </div>
            <div className="swiper-button-next bg-white rounded-circle"></div>
            <div className="swiper-button-prev bg-white rounded-circle"></div>
            <div className="swiper-pagination position-relative mt-4"></div>
        </Swiper>
    )
}

export default BannerSlider
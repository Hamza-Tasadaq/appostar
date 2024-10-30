import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Mousewheel } from "swiper/modules";


const Gallery = () => {
    return (
        <Card className='comapny-details-card gallery'>
            <CardHeader>
                <h1>Gallery</h1>
            </CardHeader>
            <CardBody>

                <Swiper
                    direction={"horizontal"}
                    slidesPerView={1.5}
                    spaceBetween={10}
                    mousewheel={true}
                    loop={false}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Mousewheel]}
                    className="mySwiper vertical-swiper"
                >
                    {
                        Array.from({ length: 6 })?.map((_, index) => <SwiperSlide key={index} style={{ maxWidth: "285px", margin: "0 10px" }}>
                            <div className="rounded">
                                <img src={"https://townhub.kwst.net/images/all/21.jpg"} alt="" className='rounded' style={{ maxHeight: "190px", width: "100%" }} />
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </CardBody>
        </Card>
    )
}

export default Gallery
import React, { Suspense, useState } from 'react'
import { Button, Card, CardBody, CardHeader } from 'reactstrap'
import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Mousewheel } from "swiper/modules";

const GalleryDialog = React.lazy(() => import('../../../../Components/Common/gallery-dailog'));

const Gallery = () => {
    const [openGallery, setOpenGallery] = useState<boolean>(false);
    return (
        <>
            {
                openGallery &&
                <Suspense fallback={<></>}>
                    <GalleryDialog open={openGallery} setOpen={setOpenGallery} />
                </Suspense>
            }

            <Card className='comapny-details-card gallery'>
                <CardHeader>
                    <h1>Gallery</h1>
                </CardHeader>
                <CardBody>
                    <Swiper
                        direction={"horizontal"}
                        slidesPerView={"auto"}
                        // centeredSlides={true} // Centers the slides, minimizing extra space
                        spaceBetween={10}
                        mousewheel={true}
                        loop={false} // Can change to true if you want a continuous loop without gaps
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        // loopFillGroupWithBlank={true} // Use if loop is enabled
                        modules={[Autoplay, Mousewheel]}
                        className="mySwiper vertical-swiper"
                    >
                        {
                            Array.from({ length: 6 })?.map((_, index) =>
                                <SwiperSlide key={index} className='swiper-slide'>
                                    <div className="rounded position-relative">
                                        <img src={"https://townhub.kwst.net/images/all/21.jpg"} alt="" className='rounded' style={{ maxHeight: "190px", width: "100%" }} />
                                        <Button color='primary' onClick={() => { setOpenGallery(true) }} className='btn-icon rounded-circle'>
                                            <i className='ri  ri-search-2-line '></i>
                                        </Button>
                                    </div>
                                </SwiperSlide>)
                        }
                    </Swiper>
                </CardBody>
            </Card>
        </>
    )
}

export default Gallery
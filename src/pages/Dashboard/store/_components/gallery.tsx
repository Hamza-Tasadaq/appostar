import React, { Suspense, useState } from 'react'
import { Button, Card, CardBody, CardHeader } from 'reactstrap'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Autoplay, Mousewheel, Navigation } from "swiper/modules";

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
                        spaceBetween={10}
                        mousewheel={true}
                        loop={false}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        modules={[
                            Autoplay,
                            Mousewheel,
                            Navigation
                        ]}
                        className="mySwiper vertical-swiper"
                        navigation={true}
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
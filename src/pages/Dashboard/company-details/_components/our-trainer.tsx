import { Card, CardBody, CardHeader } from 'reactstrap'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
const OurTrainer = () => {
    return (
        <Card className='comapny-details-card'>
            <CardHeader>
                <h1>Our Trainers</h1>
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
                        // Autoplay,
                        // Mousewheel,
                        Navigation
                    ]}
                    className="mySwiper vertical-swiper"
                    navigation={true}
                >
                    {
                        Array.from({ length: 6 })?.map((_, index) =>
                            <SwiperSlide key={index} className='swiper-slide'>
                                <Card>
                                    <img className="card-img-top img-fluid" src={"https://themes.themesbrand.com/velzon/react-ts/master/static/media/img-1.74235ecee986233a7367.jpg"} alt="Card cap" />
                                    <CardBody>
                                        <h4 className="card-title mb-2">Alisa Gray</h4>
                                        <p className="card-text">At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called.</p>
                                        <div className="">
                                        </div>
                                    </CardBody>
                                </Card>

                            </SwiperSlide>)
                    }
                </Swiper>
            </CardBody>
        </Card>
    )
}

export default OurTrainer
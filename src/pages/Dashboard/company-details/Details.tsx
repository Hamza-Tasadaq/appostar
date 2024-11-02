import React from 'react'
import { Button, Card, CardBody, Col, Container, Row, } from 'reactstrap'
import Tags from './_components/tags'
import SimilarListing from './_components/similar-listing'
import HostedBy from './_components/hosted-by'
import LocationContact from './_components/location-contact'
import WorkingHours from './_components/working-hours'
import AddReview from './_components/add-review'
import ListingReviews from './_components/listing-reviews'
import Gallery from './_components/gallery'
import Description from './_components/description'
import Cover from './_components/cover'
import Stats from './_components/stats'
import Navigation from './_components/navigation'
import Faqs from './_components/faqs'
import OurTrainer from './_components/our-trainer'
import ScrollToTop from './_components/scroll-to-top'
import Facilities from './_components/facilities'
import Banner from './_components/banner'

const Details = () => {
    return (
        <React.Fragment>
            <div style={{ paddingLeft: 0, paddingRight: 0 }} className="page-content no-padding-bottom-md no-padding-x overflow-x-hidden-md padding-top-small-sm">
                <Row className='' style={{ position: "sticky", top: "70px", zIndex: 20, left: 0, right: 0, margin: 0 }}>
                    <Col style={{ padding: 0 }}>
                        <Card>
                            <CardBody className='w-100 d-flex align-items-center justify-content-between'>
                                <Navigation />
                                <ul className='list-unstyled m-0 d-flex align-items-center gap-2'>
                                    <li className=''>
                                        <Button outline color='primary' className='rounded-pill'>
                                            <i className='ri  ri-heart-fill fs-6 '></i>
                                            11.3K
                                        </Button>
                                    </li>
                                    <li>
                                        <Button outline color='primary' className='rounded-pill'>
                                            <i className='ri  ri-share-fill fs-6'></i>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button className='rounded-pill' color='primary'>Claim This Buisness</Button>
                                    </li>
                                </ul>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Container fluid className='no-padding-x overflow-x-hidden-md position-relative'>
                    <Row className='mb-3'>
                        <Banner />
                    </Row>
                    <Row>
                        <Col xxl={8}>
                            <Cover />
                            <OurTrainer />
                            <Description />
                            <Facilities />
                            <Gallery />
                            <Faqs />
                            {/* <Stats /> */}
                            <ListingReviews />
                            <AddReview />
                        </Col>
                        <Col xxl={4}>
                            <WorkingHours />
                            <LocationContact />
                            {/* <PriceRange /> */}
                            {/* <HostedBy /> */}
                            <Tags />
                            <SimilarListing />
                        </Col>
                    </Row>
                </Container>
                <ScrollToTop />
            </div>
        </React.Fragment>
    )
}

export default Details
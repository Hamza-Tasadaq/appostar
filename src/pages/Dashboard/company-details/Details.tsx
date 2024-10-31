import React from 'react'
import { Button, Card, CardBody, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown } from 'reactstrap'
import Tags from './_components/tags'
import SimilarListing from './_components/similar-listing'
import HostedBy from './_components/hosted-by'
import PriceRange from './_components/price-range'
import LocationContact from './_components/location-contact'
import WorkingHours from './_components/working-hours'
import AddReview from './_components/add-review'
import ListingReviews from './_components/listing-reviews'
import Gallery from './_components/gallery'
import ListingFeatures from './_components/listing-features'
import Description from './_components/description'
import Banner from './_components/banner'
import Cover from './_components/cover'
import Stats from './_components/stats'
import Navigation from './_components/navigation'
import Faqs from './_components/faqs'
import OurTrainer from './_components/our-trainer'
import ScrollToTop from './_components/scroll-to-top'

const Details = () => {
    return (
        <React.Fragment>
            <div className="page-content no-padding-bottom-md no-padding-x overflow-x-hidden-md padding-top-small-sm">
                <Container fluid className='no-padding-x overflow-x-hidden-md position-relative'>
                    <Row className='mb-3'>
                        <Banner />
                    </Row>
                    <Row className=''>
                        <Col>
                            <Card>
                                <CardBody className='w-100 d-flex align-items-center justify-content-between'>
                                    <Navigation />
                                    <ul className='list-unstyled m-0 d-flex align-items-center gap-2'>
                                        <li>
                                            <Button color='primary'>
                                                <i className='ri  ri-heart-fill fs-5 me-2'></i>
                                                Save
                                            </Button>
                                        </li>
                                        <li>
                                            <Button color='primary'>
                                                <i className='ri ri-share-forward-fill fs-5 me-2'></i>
                                                Share
                                            </Button>
                                        </li>
                                        <li>
                                            <UncontrolledDropdown >
                                                <DropdownToggle
                                                    tag="button"
                                                    className="btn btn-icon text-muted btn-sm fs-18 dropdown material-shadow-none"
                                                >
                                                    <i className="ri-more-fill"></i>
                                                </DropdownToggle>
                                                <DropdownMenu >
                                                    <DropdownItem>
                                                        <i className="ri ri-flag-fill align-bottom me-2 text-primary"></i>{" "}
                                                        Report
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </li>
                                    </ul>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xxl={8}>
                            <Cover />
                            <OurTrainer />
                            <Description />
                            <ListingFeatures />
                            <Gallery />
                            <Faqs />
                            <Stats />
                            <ListingReviews />
                            <AddReview />
                        </Col>
                        <Col xxl={4}>
                            <WorkingHours />
                            <LocationContact />
                            <PriceRange />
                            <HostedBy />
                            <SimilarListing />
                            <Tags />
                        </Col>
                    </Row>
                </Container>
                <ScrollToTop />
            </div>
        </React.Fragment>
    )
}

export default Details
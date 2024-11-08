import React from 'react'
import { Col, Container, Row, } from 'reactstrap'
import Tags from './_components/tags'
import SimilarListing from './_components/similar-listing'
import LocationContact from './_components/location-contact'
import WorkingHours from './_components/working-hours'
import AddReview from './_components/add-review'
import ListingReviews from './_components/listing-reviews'
import Gallery from './_components/gallery'
import Description from './_components/description'
import Cover from './_components/cover'
import Faqs from './_components/faqs'
import OurTrainer from './_components/our-trainer'
import ScrollToTop from './_components/scroll-to-top'
import Facilities from './_components/facilities'
import Banner from './_components/banner'

const Details = () => {
    return (
        <React.Fragment>
            <div className="page-content ps-0 pe-0 no-padding-bottom-md no-padding-x overflow-x-hidden-md padding-top-small-sm">
                <Row className='ms-0 me-0 mb-3'>
                    <Banner />
                </Row>
                {/* <NavigationWrapper /> */}
                <Container fluid className='no-padding-x overflow-x-hidden-md position-relative'>

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
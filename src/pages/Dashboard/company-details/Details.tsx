import React from 'react'
import { Col, Container, Row } from 'reactstrap'
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

const Details = () => {
    return (
        <React.Fragment>
            <div className="page-content no-padding-bottom-md no-padding-x overflow-x-hidden-md padding-top-large-sm">
                <Container fluid className='no-padding-x overflow-x-hidden-md position-relative'>
                    <Banner />
                    <br />
                    <br />
                    <Row>
                        <Col lg={8}>
                            {/* <Cover /> */}
                            <Description />
                            <ListingFeatures />
                            <Gallery />
                            <ListingReviews />
                            <AddReview />
                        </Col>
                        <Col lg={4}>
                            <WorkingHours />
                            <LocationContact />
                            <PriceRange />
                            <HostedBy />
                            <SimilarListing />
                            <Tags />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Details
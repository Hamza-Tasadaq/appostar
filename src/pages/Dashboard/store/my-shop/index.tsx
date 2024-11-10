import React from 'react'
import BannerSlider from './_components/banner-slider'
import { Col, Row } from 'reactstrap'
import Features from './_components/features'
import CategoriesSelector from './_components/categories-selector'
import DiscountGallery from './_components/discount-gallery'
import FlashSale from './_components/flash-sale'

const MyShop = () => {
    return (
        <React.Fragment>
            <div className="page-content no-padding-bottom-md no-padding-x overflow-x-hidden-md padding-top-small-sm">
                <Row className='mb-3'>
                    <Col sm={2}>
                        <CategoriesSelector />
                    </Col>
                    <Col sm={8}>
                        <BannerSlider />
                    </Col>
                    <Col sm={2}>
                        <DiscountGallery />
                    </Col>
                </Row>
                <Features />
                <FlashSale />
            </div>
        </React.Fragment>
    )
}

export default MyShop
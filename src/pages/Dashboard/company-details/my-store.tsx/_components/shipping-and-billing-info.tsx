import React from 'react'
import { Button, Card, CardBody, Col, Row } from 'reactstrap'

const ShippingAndBillingInfo = () => {
    return (
        <Row>
            <Col>
                <Card className='shipping-info-card'>
                    <CardBody className='position-relative'>

                        <Button color='light' className='edit-btn position-absolute btn-icon rounded-circle'>
                            <i className='ri ri-edit-line text-primary'></i>
                        </Button>
                        <ul className="list-unstyled vstack gap-2 fs-13 mb-0">
                            <li className="">
                                <h4 className='fw-medium fs-14 title'>Shipping Address</h4>
                                <h4 className='value'>A Shipping Address</h4>
                            </li>
                            <li className="">
                                <h4 className='fw-medium fs-14 title'>Shipping Method</h4>
                                <h4 className='value'>A Shipping method</h4>
                            </li>
                            <li className="">
                                <h4 className='fw-medium fs-14 title'>Tracking Code</h4>
                                <a href="/" className='value'>409609pojh540uj90w</a>
                            </li>
                        </ul>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card className='billing-info-card'>
                    <CardBody className='position-relative'>
                        <Button color='light' className='edit-btn position-absolute btn-icon rounded-circle'>
                            <i className='ri ri-edit-line text-primary'></i>
                        </Button>
                        <ul className="list-unstyled vstack gap-2 fs-13 mb-0">
                            <li className="">
                                <h4 className='fw-medium fs-14 title'>Billing Address</h4>
                                <h4 className='value'>A Billing Address</h4>
                            </li>
                            <li className="">
                                <h4 className='fw-medium fs-14 title'>Payment Method</h4>
                                <h4 className='value'>Credit Card</h4>
                            </li>
                            <li className="">
                                <h4 className='fw-medium fs-14 title'>Purchase Channel</h4>
                                <h4 className='value'>In Store</h4>
                            </li>
                        </ul>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default ShippingAndBillingInfo
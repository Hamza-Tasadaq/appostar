import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap'

const ShippingAndBillingInfo = () => {
    return (
        <Row>
            <Col sm={6}>
                <Card>
                    <CardHeader className='d-flex align-items-center justify-content-between'>
                        <h5 className="card-title mb-0">
                            <i className="ri-map-pin-line align-middle me-1 text-muted"></i>{" "}
                            Shipping Address
                        </h5>
                        <Button
                            className="btn btn-soft-info material-shadow-none btn-sm mt-2 mt-sm-0"
                        >
                            <i className="ri-map-pin-line align-middle me-1"></i>{" "}
                            Change Address
                        </Button>
                    </CardHeader>
                    <CardBody>
                        <ul className="list-unstyled vstack gap-2 fs-13 mb-0">
                            <li className="fw-medium fs-14">Joseph Parker</li>
                            <li>+(256) 245451 451</li>
                            <li>2186 Joyce Street Rocky Mount</li>
                            <li>California - 24567</li>
                            <li>United States</li>
                        </ul>
                    </CardBody>
                </Card>
            </Col>
            <Col sm={6}>
                <Card>
                    <CardHeader className='d-flex align-items-center justify-content-between'>
                        <h5 className="card-title mb-0">
                            <i className="ri-map-pin-line align-middle me-1 text-muted"></i>{" "}
                            Billing Address
                        </h5>
                        <Button
                            className="btn btn-soft-info material-shadow-none btn-sm mt-2 mt-sm-0"
                        >
                            <i className="ri-map-pin-line align-middle me-1"></i>{" "}
                            Change Address
                        </Button>{" "}

                    </CardHeader>
                    <CardBody>
                        <ul className="list-unstyled vstack gap-2 fs-13 mb-0">
                            <li className="fw-medium fs-14">Joseph Parker</li>
                            <li>+(256) 245451 451</li>
                            <li>2186 Joyce Street Rocky Mount</li>
                            <li>New York - 25645</li>
                            <li>United States</li>
                        </ul>
                    </CardBody>
                </Card>
            </Col>
            <Col sm={6}>
                <Card>
                    <CardHeader className='d-flex align-items-center justify-content-between'>
                        <h5 className="card-title mb-0">
                            <i className="ri-secure-payment-line align-bottom me-1 text-muted"></i>{" "}
                            Payment Details
                        </h5>
                        <Button
                            className="btn btn-soft-info material-shadow-none btn-sm mt-2 mt-sm-0"
                        >
                            <i className="ri-secure-payment-line align-middle me-1"></i>{" "}
                            Change Payment
                        </Button>{" "}

                    </CardHeader>
                    <CardBody>
                        <div className="d-flex align-items-center mb-2">
                            <div className="flex-shrink-0">
                                <p className="text-muted mb-0">Transactions:</p>
                            </div>
                            <div className="flex-grow-1 ms-2">
                                <h6 className="mb-0">#VLZ124561278124</h6>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                            <div className="flex-shrink-0">
                                <p className="text-muted mb-0">Payment Method:</p>
                            </div>
                            <div className="flex-grow-1 ms-2">
                                <h6 className="mb-0">Debit Card</h6>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                            <div className="flex-shrink-0">
                                <p className="text-muted mb-0">Card Holder Name:</p>
                            </div>
                            <div className="flex-grow-1 ms-2">
                                <h6 className="mb-0">Joseph Parker</h6>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                            <div className="flex-shrink-0">
                                <p className="text-muted mb-0">Card Number:</p>
                            </div>
                            <div className="flex-grow-1 ms-2">
                                <h6 className="mb-0">xxxx xxxx xxxx 2456</h6>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                                <p className="text-muted mb-0">Total Amount:</p>
                            </div>
                            <div className="flex-grow-1 ms-2">
                                <h6 className="mb-0">$415.96</h6>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col sm={6}>
                <Card>
                    <CardHeader>
                        <div className="d-flex">
                            <h5 className="card-title flex-grow-1 mb-0">
                                <i className="mdi mdi-truck-fast-outline align-middle me-1 text-muted"></i>
                                Logistics Details
                            </h5>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <div className="text-center">
                            <i className="ri-truck-line display-5 text-danger"></i>
                            <h5 className="fs-16 mt-2">RQK Logistics</h5>
                            <p className="text-muted mb-0">ID: MFDS1400457854</p>
                            <p className="text-muted mb-0">Payment Mode : Debit Card</p>
                        </div>
                    </CardBody>
                </Card>

            </Col>
        </Row>
    )
}

export default ShippingAndBillingInfo
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'

const Stats = () => {
    return (
        <Row>
            <Col md={4}>
                <Card className="card-animate">
                    <CardBody>
                        <div className="d-flex justify-content-between">
                            <div>
                                <p className="fw-medium text-muted mb-0">Happy Customers</p>
                                <h2 className="mt-4 ff-secondary cfs-22 fw-semibold">
                                    245
                                </h2>
                                <p className="mb-0 text-muted text-truncate"><span className="badge bg-light text-danger mb-0">
                                    <i className="ri-arrow-down-line align-middle"></i> 0.24 %
                                </span> vs. previous month</p>
                            </div>
                            <div>
                                <div className="avatar-sm flex-shrink-0">
                                    <span className="avatar-title rounded-circle fs-2">
                                        <i className='ri  ri-emotion-happy-line fs-1'></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="card-animate">
                    <CardBody>
                        <div className="d-flex justify-content-between">
                            <div>
                                <p className="fw-medium text-muted mb-0">Happy Customers</p>
                                <h2 className="mt-4 ff-secondary cfs-22 fw-semibold">
                                    245
                                </h2>
                                <p className="mb-0 text-muted text-truncate"><span className="badge bg-light text-danger mb-0">
                                    <i className="ri-arrow-down-line align-middle"></i> 0.24 %
                                </span> vs. previous month</p>
                            </div>
                            <div>
                                <div className="avatar-sm flex-shrink-0">
                                    <span className="avatar-title rounded-circle fs-2">
                                        <i className='ri  ri-emotion-happy-line fs-1'></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="card-animate">
                    <CardBody>
                        <div className="d-flex justify-content-between">
                            <div>
                                <p className="fw-medium text-muted mb-0">Awards Won</p>
                                <h2 className="mt-4 ff-secondary cfs-22 fw-semibold">
                                    45
                                </h2>
                                <p className="mb-0 text-muted text-truncate"><span className="badge bg-light text-danger mb-0">
                                    <i className="ri-arrow-down-line align-middle"></i> 0.24 %
                                </span> vs. previous month</p>
                            </div>
                            <div>
                                <div className="avatar-sm flex-shrink-0">
                                    <span className="avatar-title rounded-circle fs-2">
                                        <i className='ri   ri-medal-2-line fs-1'></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default Stats
import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, Col, Row } from 'reactstrap'

interface UserMetaInfoProps {
    children: ReactNode
}

const UserMetaInfo = ({ children }: UserMetaInfoProps) => {
    return (
        <Col className='w-100'>
            <Card className="team-box">
                <div className="team-cover">
                    <img src={`https://themes.themesbrand.com/velzon/react-ts/master/static/media/img-9.7c9a4799283c4f821712.jpg`} alt="" className="img-fluid" />
                </div>
                <CardBody className="p-0">
                    <Row className="align-items-center team-row">
                        <Col className="team-settings pe-4 pt-3">
                            <Row className='justify-content-end'>
                                <button type="button" className="btn btn-light btn-icon rounded-circle btn-sm favourite-btn" onClick={(e) => { }}>
                                    <i className="ri-pencil-line fs-14"></i>
                                </button>
                            </Row>
                        </Col>
                        <Col lg={4} className="col">
                            <div className="team-profile-img">
                                <div className="avatar-lg position-relative img-thumbnail rounded-circle flex-shrink-0">
                                    {true ?
                                        <img src={"https://themes.themesbrand.com/velzon/react-ts/master/static/media/avatar-2.58874a6f667b9b04ce55.jpg"} alt="" className="img-fluid d-block rounded-circle" />
                                        :
                                        <div className="avatar-title text-uppercase border rounded-circle bg-light text-primary">
                                            {"Nancy Martino".charAt(0) + "Nancy Martino".split(" ").slice(-1).toString().charAt(0)}
                                        </div>}
                                    <button type="button" className="btn position-absolute bottom-0 end-0 btn-light btn-icon rounded-circle btn-sm favourite-btn" onClick={(e) => { }}>
                                        <i className="ri-pencil-line fs-14"></i>
                                    </button>
                                </div>
                                <div className="team-content">
                                    <Link to="#"><h5 className="fs-16 mb-1">Nancy Martino</h5></Link>
                                    <p className="text-muted mb-0">Team Lead & HR</p>
                                </div>
                            </div>
                        </Col>

                        {children}
                    </Row>
                </CardBody>
            </Card>
        </Col>

    )
}

export default UserMetaInfo
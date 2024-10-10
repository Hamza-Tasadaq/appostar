
import { Badge, Button, Card, CardBody, Col, Container, Form, Input, Progress, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const InvitationsTab = () => {
    const [showSearch, setShowSearch] = useState(false)
    return (
        <div className="page-content p-0">
            <Container fluid>
                <Card className='d-none d-md-block'>
                    <CardBody>
                        <Row className="g-2">
                            <Col sm={4} className='d-md-block'>
                                <div className="search-box">
                                    <Input type="text" className="form-control" placeholder="Search for name or designation..." onChange={(e) => { }} />
                                    <i className="ri-search-line search-icon"></i>
                                </div>
                            </Col>
                            <Col className="col-sm-auto ms-auto">
                                <div className="list-grid-nav hstack gap-1">
                                    <Button color='primary' className="btn  btn-icon fs-14 active  material-shadow-none"><i className="ri-user-follow-line fs-3"></i></Button>
                                    <Button color='primary' className="btn nav-link btn-icon fs-14  material-shadow-none"><i className="ri-user-settings-line fs-3"></i></Button>
                                    <Button color='primary' className='d-none d-md-block' onClick={() => { }}>
                                        <i className="ri-add-fill me-1 align-bottom"></i> Add a Company
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Card
                    className='d-md-none no-box-shadow'>
                    <CardBody className='no-padding-x'>
                        <Row className="g-2">
                            {
                                showSearch ?
                                    <div className='gap-2 d-flex'>

                                        <Form className=" flex-grow-1 ">
                                            <Input className="form-control form-control-icon" id="search" placeholder='Search' />
                                        </Form>
                                        <button className='btn btn-icon' onClick={() => setShowSearch((showSearch) => !showSearch)}>
                                            <i className="bx ri-close-circle-line fs-22"></i>
                                        </button>
                                    </div> :
                                    <>
                                        <Col className="col-sm-auto ms-auto">
                                            <div className="list-grid-nav hstack gap-1">
                                                <Button color='primary' className="btn  btn-icon fs-14 active  material-shadow-none"><i className="ri-user-follow-line fs-3"></i></Button>
                                                <Button color='primary' className="btn nav-link btn-icon fs-14  material-shadow-none"><i className="ri-user-settings-line fs-3"></i></Button>
                                            </div>
                                        </Col>
                                        <Col className='d-md-none d-flex justify-content-end'>
                                            <button className='btn btn-icon' onClick={() => setShowSearch((showSearch) => !showSearch)}>
                                                <i className="bx bx-search fs-22"></i>
                                            </button>
                                        </Col>
                                    </>}
                        </Row>
                    </CardBody>
                </Card>
                <Row>
                    <Col lg={12}>
                        <div id="teamlist">
                            <Row className="team-list grid-view-filter">
                                <Col >
                                    <Card className="team-box mb-0 h-100">
                                        <div className="team-cover">
                                            <img src={"https://themes.themesbrand.com/velzon/react-ts/master/static/media/img-11.c7dbbec4252d538c779d.jpg"} alt="" className="img-fluid" />
                                        </div>
                                        <CardBody className="p-4">
                                            <Row className="align-items-center team-row">
                                                <Col className="team-settings">
                                                    <Row className=''>
                                                        <Col className='col-100 d-flex justify-content-end'>
                                                            <Badge color="warning">Pending</Badge>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col lg={4} className="col">
                                                    <div className="team-profile-img">
                                                        <div className="avatar-lg img-thumbnail rounded-circle flex-shrink-0">
                                                            {true ?
                                                                <img src={"https://themes.themesbrand.com/velzon/react-ts/master/static/media/avatar-2.58874a6f667b9b04ce55.jpg"} alt="" className="img-fluid d-block rounded-circle" /> :
                                                                <div className="avatar-title text-uppercase border rounded-circle bg-light text-primary">
                                                                    {"item.name".charAt(0) + "item.name".split(" ").slice(-1).toString().charAt(0)}
                                                                </div>
                                                            }
                                                        </div>
                                                        <div className="team-content">
                                                            <Link to="#" onClick={() => { }}><h5 className="fs-16 mb-1">Company Name</h5></Link>
                                                            <h6>@jhon</h6>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col className='mb-4 opacity-0'>
                                                    <div className='d-flex w-100 align-items-center justify-content-between'>
                                                        <h4>Current Plan</h4>
                                                        <Badge>FREE</Badge>
                                                    </div>
                                                </Col>
                                                <Col lg={2} className='col mb-4'>
                                                    <div className='d-flex  justify-content-between'>
                                                        <h6>Days</h6>
                                                        <h6>12 of 30 days</h6>
                                                    </div>
                                                    <Progress
                                                        color="success"
                                                        value={45}
                                                    />
                                                </Col>
                                                <Col className='col-50'>
                                                    <button className='btn btn-danger w-100'>REJECT</button>
                                                </Col>
                                                <Col className='col-50'>
                                                    <button className='btn btn-success w-100 '>APPROVE</button>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col >
                                    <Card className="team-box mb-0 h-100">
                                        <div className="team-cover">
                                            <img src={"https://themes.themesbrand.com/velzon/react-ts/master/static/media/img-11.c7dbbec4252d538c779d.jpg"} alt="" className="img-fluid" />
                                        </div>
                                        <CardBody className="p-4">
                                            <Row className="align-items-center team-row">
                                                <Col className="team-settings">
                                                    <Row className=''>
                                                        <Col className='col-100 d-flex justify-content-end'>
                                                            <Badge color="success">Approved</Badge>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col lg={4} className="col">
                                                    <div className="team-profile-img">
                                                        <div className="avatar-lg img-thumbnail rounded-circle flex-shrink-0">
                                                            {true ?
                                                                <img src={"https://themes.themesbrand.com/velzon/react-ts/master/static/media/avatar-2.58874a6f667b9b04ce55.jpg"} alt="" className="img-fluid d-block rounded-circle" /> :
                                                                <div className="avatar-title text-uppercase border rounded-circle bg-light text-primary">
                                                                    {"item.name".charAt(0) + "item.name".split(" ").slice(-1).toString().charAt(0)}
                                                                </div>
                                                            }
                                                        </div>
                                                        <div className="team-content">
                                                            <Link to="#" onClick={() => { }}><h5 className="fs-16 mb-1">Company Name</h5></Link>
                                                            <h6>@jhon</h6>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col className='mb-4 opacity-0'>
                                                    <div className='d-flex w-100 align-items-center justify-content-between'>
                                                        <h4>Current Plan</h4>
                                                        <Badge>FREE</Badge>
                                                    </div>
                                                </Col>
                                                <Col lg={2} className='col mb-4 opacity-0'>
                                                    <div className='d-flex  justify-content-between'>
                                                        <h6>Days</h6>
                                                        <h6>12 of 30 days</h6>
                                                    </div>
                                                    <Progress
                                                        color="success"
                                                        value={45}
                                                    />
                                                </Col>
                                                <Col className=''>
                                                    <button className='btn btn-danger w-100'>Stop Connection</button>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default InvitationsTab
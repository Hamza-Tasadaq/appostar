import { Button, Card, CardBody, CardFooter, CardHeader, Col, Row } from 'reactstrap';
import SimpleBar from 'simplebar-react';
import FiltersDropdown from './FilterDropdown';



const Filters = () => {
    return (
        <Card className='h-100'>
            <CardHeader>
                <Row className="g-2 align-items-center">
                    <Col className='d-flex align-items-center gap-2'>
                        <h4 className='m-0'>Result For:</h4>
                        <p className='m-0'>Address Wil Come Over Here</p>
                    </Col>
                    <Col className="col-sm-auto ms-auto">
                        <div className="list-grid-nav hstack gap-1">
                            <Button color='primary' id="grid-view-button" className="btn btn-icon fs-14 active filter-button material-shadow-none"><i className="ri-grid-fill fs-3"></i></Button>
                            <Button color='primary' id="list-view-button" className="btn nav-link btn-icon fs-14 filter-button material-shadow-none"><i className="ri-list-unordered fs-3"></i></Button>
                            <FiltersDropdown />
                        </div>
                    </Col>
                </Row>
            </CardHeader>
            <CardBody>
                <SimpleBar style={{ height: "calc(100dvh - 324px)" }} className='pe-2'>
                    <Row className='ms-0 me-0'>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((_, index) =>
                            <Col
                                xxl={6}
                                lg={6}
                                md={6}
                                sm={12}
                                key={index + 1} className=" active mb-3">
                                <div
                                    style={{
                                        // height: "150px",
                                    }}
                                    className="position-relative"
                                >
                                    <div className='bg-cover-wrapper'>
                                        <img
                                            src='https://townhub.kwst.net/images/all/31.jpg'
                                            className="w-100 object-fit-cover rounded h-100 "
                                            alt="user-pic"
                                        />
                                    </div>
                                    <Card className='no-box-shadow'>
                                        <CardHeader>
                                            <div>
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <div className='d-flex align-items-center gap-2 mb-1'>
                                                        <h3 className='m-0'>Premium Fitness GYM</h3>
                                                        <i className='ri  ri-checkbox-circle-fill fs-2' ></i>
                                                    </div>
                                                    <div style={{
                                                        width: 60,
                                                        height: 60,
                                                        background: "white",
                                                        marginTop: -74
                                                    }} className='d-flex align-items-center justify-content-center rounded-circle' >
                                                        <img src="https://townhub.kwst.net/images/avatar/1.jpg" width={50} height={50} className='rounded-circle' alt="" />
                                                    </div>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <i className='ri  ri-map-pin-2-line fs-3'></i>
                                                    <p className='m-0'> 27th Brooklyn New York, USA</p>
                                                </div>
                                            </div>

                                        </CardHeader>
                                        <CardBody>
                                            <h6>
                                                Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.
                                            </h6>
                                            <div className='d-flex align-items-center gap-3'>
                                                <h4 className='m-0'>Facilities:</h4>
                                                <ul className='list-unstyled mb-0 d-flex gap-3'>
                                                    <li><i className='ri ri-wifi-line fs-3'></i></li>
                                                    <li><i className='ri ri-earth-line fs-3'></i></li>
                                                    <li><i className='ri ri-parking-box-line fs-3'></i></li>
                                                </ul>
                                            </div>
                                        </CardBody>
                                        <CardFooter className='d-flex align-items-center gap-3'>
                                            <div className='flex-grow-1 d-flex align-items-center justify-content-between'>
                                                <div className='d-flex align-items-center gap-2'>
                                                    <div className='d-flex align-items-center justify-content-center rounded-circle' style={{ height: 36, background: "#4C97FD", width: 36 }}>
                                                        <i className='ri ri-run-line fs-4'></i>
                                                    </div>
                                                    <h5 className='m-0'>GYM</h5>
                                                </div>
                                                <h5>$$$</h5>
                                            </div>
                                            <div
                                            >
                                                <ul className='list-unstyled mb-0 d-flex gap-3'>
                                                    <li>
                                                        <i className='ri  ri-search-2-line fs-2'></i>
                                                    </li>
                                                    <li>
                                                        <i className='ri ri-user-location-line fs-2'></i>
                                                    </li>
                                                    <li>
                                                        <i className='ri  ri-message-3-line fs-2'></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </Col>
                        )}
                    </Row>
                </SimpleBar>
            </CardBody>
        </Card>
    )
}

export default Filters
import { Badge, Button, Card, CardBody, CardFooter, CardHeader, Col, Row } from 'reactstrap';
import SimpleBar from 'simplebar-react';
import { useEffect } from 'react';
import ShowOnMap from './ShowOnMap';
import OpenGallery from './OpenGallery';

const Filters = () => {
    useEffect(() => {
        const list = document.querySelectorAll(".map-items");
        const buttonGroups = document.querySelectorAll('.filter-button');
        for (let i = 0; i < buttonGroups.length; i++) {
            buttonGroups[i].addEventListener('click', onButtonGroupClick);
        }

        function onButtonGroupClick(event: any) {
            const target = event.target as HTMLButtonElement;
            const targetId = target.id;
            const parentTargetId = target.parentElement?.id;

            if (targetId === 'list-view-button' || parentTargetId === 'list-view-button') {
                document.getElementById("list-view-button")?.classList.add("active");
                document.getElementById("grid-view-button")?.classList.remove("active");

                list.forEach((el) => {
                    el.classList.add("list-view-filter");
                    el.classList.remove("grid-view-filter");
                });
            } else {
                document.getElementById("grid-view-button")?.classList.add("active");
                document.getElementById("list-view-button")?.classList.remove("active");

                list.forEach((el) => {
                    el.classList.remove("list-view-filter");
                    el.classList.add("grid-view-filter");
                });
            }
        }
    }, []);
    return (
        <Card className='h-100'>
            <CardHeader>
                <Row className="g-2 align-items-center">
                    <Col className="d-flex align-items-center gap-2 flex-grow-1">
                        <h4 className="m-0">Result For:</h4>
                        <p className="m-0">Address Will Come Over Here</p>
                    </Col>
                    <Col className="col-auto d-flex ms-auto">
                        <div className="list-grid-nav hstack gap-1">
                            <Button
                                color="primary"
                                id="grid-view-button"
                                className="d-none d-md-inline btn btn-soft-infos nav-link btn-icon fs-14 active filter-button material-shadow-none"
                            >
                                <i className="ri-grid-fill fs-3"></i>
                            </Button>
                            <Button
                                color="primary"
                                id="list-view-button"
                                className="d-none d-md-inline btn btn-soft-infos nav-link btn-icon fs-14 filter-button material-shadow-none"
                            >
                                <i className="ri-list-unordered fs-3"></i>
                            </Button>
                            {/* <FiltersDropdown /> */}
                        </div>
                    </Col>
                </Row>
            </CardHeader>
            <CardBody className='ps-0 pe-0 gray-body-bg pb-0'>
                <SimpleBar className='pe-2 filters-simple-bar'>
                    <div id='mapItems'>
                        <Row className='ms-0 me-0 map-items grid-view-filter' >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((_, index) =>
                                <Col
                                    key={index + 1} className="active mb-3">
                                    <div
                                        className="position-relative map-item-card"
                                    >
                                        <div className='card-container'>
                                            <div className='bg-cover-wrapper'>
                                                <div
                                                    className='flex-column d-flex meta-info justify-content-between'>
                                                    <div className='d-flex mt-1 align-items-center justify-content-between'>
                                                        <button type="button" className="btn fvt-btn btn-primary d-flex align-items-center gap-2 rounded-pill" onClick={(e) => { }}>
                                                            <i className="ri ri-heart-line fs-5"></i>
                                                            <span>Save</span>
                                                        </button>
                                                        <h5 className='m-0'>
                                                            <Badge color='success' className='rounded-pill d-flex align-items-center gap-1'>
                                                                <i className=' bx bx-lock-open fs-5'></i>
                                                                <span className=''>
                                                                    Open
                                                                </span>
                                                            </Badge>
                                                        </h5>
                                                    </div>
                                                    <div className='d-flex align-items-center gap-3'>
                                                        <h3 className='h-100 mb-0'>
                                                            <Badge color='primary' className='h-100  d-flex align-items-center'>
                                                                <span>5.0</span>
                                                            </Badge>
                                                        </h3>
                                                        <div>
                                                            <ul className='list-unstyled d-flex m-0'>
                                                                <li><i className='ri ri-star-s-fill text-warning'></i></li>
                                                                <li><i className='ri ri-star-s-fill text-warning'></i></li>
                                                                <li><i className='ri ri-star-s-fill text-warning'></i></li>
                                                                <li><i className='ri ri-star-s-fill text-warning'></i></li>
                                                                <li><i className='ri ri-star-s-fill text-warning'></i></li>
                                                            </ul>
                                                            <p className='m-0 text-white'>4 reviews</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img
                                                    src='https://townhub.kwst.net/images/all/31.jpg'
                                                    className="w-100 object-fit-cover h-100 "
                                                    alt="user-pic"
                                                />
                                            </div>
                                            <Card className='no-box-shadow mb-0'>
                                                <CardHeader className='item-card-padding-y'>
                                                    <div>
                                                        <div className='d-flex justify-content-between gap-1 align-items-center'>
                                                            <div className='d-flex w-100 flex-grow-1 align-items-center gap-2'>
                                                                <h5 className='m-0'>Premium Fitness GYM</h5>
                                                                <i className='ri ri-checkbox-circle-fill text-success fs-3'></i>
                                                            </div>
                                                            <div className='user-avatar d-flex align-items-center justify-content-center rounded-circle' >
                                                                <img src="https://townhub.kwst.net/images/avatar/1.jpg" className='rounded-circle' alt="" />
                                                            </div>
                                                        </div>
                                                        <div className='d-flex align-items-center gap-2'>
                                                            <i className='ri ri-map-pin-2-line text-primary fs-3'></i>
                                                            <p className='m-0'> 27th Brooklyn New York, USA</p>
                                                        </div>
                                                    </div>
                                                </CardHeader>
                                                <CardBody className='item-card-padding-y'>
                                                    <p style={{ fontSize: "12px" }} className='mb-1'>
                                                        Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.
                                                    </p>
                                                    <div className='d-flex align-items-center gap-3'>
                                                        <h5 className='m-0' style={{ fontSize: "14px" }}>Facilities:</h5>
                                                        <ul className='list-unstyled mb-0 d-flex gap-2'>
                                                            <li><i className='ri ri-wifi-line fs-4 text-primary'></i></li>
                                                            <li><i className='ri ri-earth-line fs-4 text-primary'></i></li>
                                                            <li><i className='ri ri-parking-box-line fs-4 text-primary'></i></li>
                                                        </ul>
                                                    </div>
                                                </CardBody>
                                                <CardFooter className='item-card-padding-y d-flex align-items-center gap-3'>
                                                    <div className='flex-grow-1 d-flex align-items-center justify-content-between'>
                                                        <div className='d-flex align-items-center gap-2'>
                                                            <div className='d-flex align-items-center justify-content-center rounded-circle' style={{ height: 36, background: "#4C97FD", width: 36 }}>
                                                                <i className='ri ri-run-line fs-4 text-white'></i>
                                                            </div>
                                                            <h5 className='m-0'>GYM</h5>
                                                        </div>
                                                        <p className='m-0'>$$$</p>
                                                    </div>
                                                    <div
                                                        className='icons-list'
                                                    >
                                                        <ul className='list-unstyled mb-0 d-flex gap-3'>
                                                            <OpenGallery position={index} />
                                                            <ShowOnMap position={index} />
                                                        </ul>
                                                    </div>
                                                </CardFooter>
                                            </Card>
                                        </div>
                                    </div>
                                </Col>
                            )}
                        </Row>
                    </div>
                </SimpleBar>
            </CardBody>
        </Card>
    )
}

export default Filters
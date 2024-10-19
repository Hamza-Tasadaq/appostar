import { getAddressFromCordinates } from 'actions';
import classNames from 'classnames';
import timezone from 'common/data/timezone';
import { useMapState } from 'pages/Dashboard/NewMap';
import { useState } from 'react'
import { Card, CardBody, CardFooter, CardHeader, Col, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import SimpleBar from 'simplebar-react';



const Filters = () => {
    const { setAddressCords, address, setAddress } = useMapState();

    const [activeTab, setactiveTab] = useState<string>("1");
    const toggle = (tab: any) => {
        if (activeTab !== tab) {
            setactiveTab(tab);
        }
    };




    const handleGetCurrentAddress = async () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                setAddressCords([position?.coords?.latitude, position?.coords?.longitude])
                const response = await getAddressFromCordinates(position?.coords?.latitude, position?.coords?.longitude)
                setAddress(response)
            })
        }
    }
    return (
        <Card className='h-100'>
            <CardBody>


                {/* <Nav tabs className="nav nav-tabs nav-justified mb-3">
                    <NavItem>
                        <NavLink style={{ cursor: "pointer" }} className={classNames({ active: activeTab === "1", })} onClick={() => { toggle("1"); }} >
                            Filters
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ cursor: "pointer" }} className={classNames({ active: activeTab === "2", })} onClick={() => { toggle("2"); }} >
                            List
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab} className="text-muted" >
                    <TabPane tabId="1" id="Filters">
                        Filter
                    </TabPane>
                    <TabPane tabId="2" id="list"> */}

                <SimpleBar style={{ height: "calc(100dvh - 200px)" }}>

                    <Row className=''>
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

                {/* </TabPane>
                </TabContent> */}

                {/* <div>
                    <div className='mb-2 d-flex gap-1'>
                        <button
                            //  onClick={
                            //     () => {
                            //     setShowQrCode(true)
                            // }
                            // }
                            style={{
                                width: "48px",
                                height: "38px"
                            }} className='btn  btn-success p-0'>
                            <i className='ri  ri-qr-scan-2-line fs-3'></i>
                        </button>
                        <Input className="form-control flex-grow-1 form-control-icon" id="search" onChange={(e) => { setAddress(e?.target?.value) }} value={address} placeholder='Search' />
                        <button onClick={handleGetCurrentAddress} style={{
                            width: "48px",
                            height: "38px"
                        }} className='btn  btn-success p-0'>
                            <i className='ri ri-crosshair-2-line fs-3'></i>
                        </button>
                    </div>
                    <div className='mb-2'>
                        <Label htmlFor="timezone" className="form-label">Time Zone</Label>
                        <select className='form-select' id='timezone' aria-label='Default select time zone'>
                            <option>Select your Timezone</option>
                            {
                                timezone?.map(({ zone, gmt, name }) => <option value={gmt} key={gmt}>{name} {gmt}</option>)
                            }
                        </select>
                    </div>

                </div> */}

            </CardBody>
        </Card>
    )
}

export default Filters
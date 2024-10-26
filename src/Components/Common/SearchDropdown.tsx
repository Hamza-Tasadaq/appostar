import React, { Suspense, useState } from 'react';
import { Button, Col, Dropdown, DropdownMenu, DropdownToggle, Input, Label, Modal, ModalBody, ModalHeader, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import classNames from 'classnames';
import SimpleBar from 'simplebar-react';

const QrScannerModal = React.lazy(() => import('./QrCodeScanner'));

interface SearchDropdownProps {
    isSearchDropdown: boolean,
    toggleSearchDropdown: () => void
}

const SearchDropdown = ({ isSearchDropdown, toggleSearchDropdown }: SearchDropdownProps) => {
    // const [useCurrentAddress, setUserCurrentAddress] = useState("")

    const [showQrCode, setShowQrCode] = useState(false)

    //Tab 
    const [activeTab, setActiveTab] = useState('1');
    const toggleTab = (tab: any) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };
    return (
        <React.Fragment>
            <Dropdown isOpen={isSearchDropdown} toggle={toggleSearchDropdown} className="topbar-head-dropdown ms-1 header-item">
                <DropdownToggle type="button" tag="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle">
                    <i className='bx bx-search fs-22'></i>
                </DropdownToggle>
                <DropdownMenu end={true} className="dropdown-menu-xl full-screen-dropdown dropdown-menu-end p-0">
                    <div className="dropdown-head bg-primary bg-pattern rounded-top">
                        <div className="p-3">
                            <Row className="align-items-center">
                                <Col>
                                    <h6 className="m-0 fs-16 fw-semibold text-white">Search</h6>
                                </Col>
                                <div className="col-auto dropdown-tabs">
                                    <button type="button" className="btn btn-soft-success waves-effect waves-light">View All Searches <i className="ri-arrow-right-line align-middle"></i></button>
                                </div>
                            </Row>
                        </div>
                        <div className="px-2 pt-2">
                            <Nav className="nav-tabs dropdown-tabs nav-tabs-custom">
                                <NavItem>
                                    <NavLink
                                        href="#"
                                        className={classNames({ active: activeTab === '1' })}
                                        onClick={() => { toggleTab('1'); }}
                                    >
                                        Categories
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href="#"
                                        className={classNames({ active: activeTab === '2' })}
                                        onClick={() => { toggleTab('2'); }}
                                    >
                                        Filters
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    </div>
                    <TabContent className='full-height-tab-content' activeTab={activeTab}>
                        <TabPane tabId="1" className="p-4">
                            <SimpleBar
                                // style={{ maxHeight: "300px" }}
                                className=" full-screen-dropdown">
                                <div className="text-reset rounded search-item d-block dropdown-item position-relative active">
                                    <div className="d-flex align-items-center category-cover position-relative">
                                        <img
                                            src='https://townhub.kwst.net/images/all/12.jpg'
                                            className="w-100 object-fit-cover h-100  rounded"
                                            alt="user-pic"
                                        />
                                        <div className='position-absolute category-button bottom-0 start-0 end-0 p-2'>
                                            <Button
                                                color="danger"
                                                className="w-100 rounded-pill d-flex align-items-center justify-content-center gap-3"
                                            >
                                                <i className='ri  ri-restaurant-2-line fs-4 mr-2'></i>
                                                Restaurants (6)
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-reset rounded search-item d-block dropdown-item position-relative">
                                    <div className="d-flex align-items-center category-cover position-relative">
                                        <img
                                            src='https://townhub.kwst.net/images/all/34.jpg'
                                            className="w-100 object-fit-cover h-100  rounded"
                                            alt="user-pic"
                                        />
                                        <div className='position-absolute category-button bottom-0 start-0 end-0 p-2'>
                                            <Button
                                                color="success"
                                                className="w-100 rounded-pill d-flex align-items-center justify-content-center gap-3"
                                            >
                                                <i className='ri   ri-hotel-line fs-4 mr-2'></i>
                                                Hotels (14)
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </SimpleBar>
                        </TabPane>
                        <TabPane tabId="2" className="p-4">
                            <div className="">
                                <div className='mb-2'>
                                    <Label htmlFor="address" className="form-label">Address</Label>
                                    <div className=' d-flex gap-1'>
                                        <button onClick={() => {
                                        }} style={{
                                            width: "48px",
                                            height: "38px"
                                        }} className='btn  btn-primary p-0'>
                                            <i className='ri  ri-qr-scan-2-line fs-3'></i>
                                        </button>
                                        <Input className="form-control flex-grow-1 form-control-icon" id="address" onChange={(e) => { }} placeholder='Search' />
                                        <button style={{
                                            width: "48px",
                                            height: "38px"
                                        }} className='btn  btn-primary p-0'>
                                            <i className='ri ri-crosshair-2-line fs-3'></i>
                                        </button>
                                    </div>
                                </div>
                                <div className='mb-2'>
                                    <Label htmlFor="address" className="form-label">Price</Label>
                                    <input type="text" className="price-range" data-min="0" data-max="4" name="price-range1" data-step="1" value="$$" />
                                    {/* <div data-rangeslider data-slider-color="success">
                                         <Nouislider
                                            range={{ min: 0, max: 100 }}
                                            start={[0, 50]}
                                            connect
                                            onSlide={() => { }}
                                            id="product-price-range"
                                            className='slider1'
                                        /> 
                                    </div> */}
                                </div>
                                <div className='mb-2'>
                                    <Label htmlFor="status" className="form-label">Status</Label>
                                    <button className='btn btn-primary d-block w-100'>Open now</button>
                                </div>
                            </div>
                        </TabPane>
                    </TabContent>
                    <Row>
                        <Col className='ps-4 pe-4 pb-4'>
                            <button onClick={() => { }} className='btn  w-100 btn-primary '>
                                Search
                            </button>
                        </Col>
                    </Row>
                </DropdownMenu>

            </Dropdown>
            {
                showQrCode &&
                <Suspense fallback={<></>}>
                    <Modal fade={true} isOpen={showQrCode} toggle={() => { setShowQrCode(!showQrCode) }} centered={true}>
                        <ModalHeader className="modal-title"
                            id="myModalLabel" toggle={() => {
                                setShowQrCode(!showQrCode)
                            }}>
                            Scan to search a company
                        </ModalHeader>
                        <ModalBody className="py-3 ">
                            <QrScannerModal />
                        </ModalBody>
                    </Modal>
                </Suspense>
            }
        </React.Fragment>
    );
};

export default SearchDropdown;
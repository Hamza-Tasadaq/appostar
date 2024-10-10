import React from 'react';
import { Badge, Col, Dropdown, DropdownMenu, DropdownToggle, Input, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

//import images
import avatar2 from "../../assets/images/users/avatar-2.jpg";

//SimpleBar
import SimpleBar from "simplebar-react";

interface SearchDropdownProps {
    isSearchDropdown: boolean,
    toggleSearchDropdown: () => void
}

const SearchDropdown = ({ isSearchDropdown, toggleSearchDropdown }: SearchDropdownProps) => {


    return (
        <React.Fragment>
            <Dropdown isOpen={isSearchDropdown} toggle={toggleSearchDropdown} className="topbar-head-dropdown ms-1 header-item">
                <DropdownToggle type="button" tag="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle">
                    <i className='bx bx-search fs-22'></i>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-lg full-screen-dropdown dropdown-menu-end p-0">
                    <div className="dropdown-head bg-primary bg-pattern rounded-top">
                        <div className="p-3">
                            <Row className="align-items-center">
                                <Col>
                                    <h6 className="m-0 fs-16 fw-semibold text-white"> Search </h6>
                                </Col>

                                <div className="col-auto dropdown-tabs">
                                    <button type="button" className="btn btn-soft-success waves-effect waves-light">View
                                        All Searches <i className="ri-arrow-right-line align-middle"></i>
                                    </button>
                                </div>
                            </Row>
                        </div>
                        <div className="p-3 d-flex gap-1 ">
                            <Input className="form-control flex-grow-1 form-control-icon" id="search" placeholder='Search' />
                            <button className='btn btn-success'>
                                <i className='ri  ri-qr-scan-2-line
 '></i>
                            </button>
                        </div>
                    </div>
                    <SimpleBar
                        // style={{ maxHeight: "300px" }}
                        className="p-3 full-screen-dropdown">

                        <div className="text-reset notification-item d-block dropdown-item position-relative active">
                            <div className="d-flex align-items-center">
                                <img src={avatar2}
                                    className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                                <div className="flex-grow-1">
                                    <Link to="#" className="stretched-link"><h6 className="mt-0 mb-1 fs-13 fw-semibold">Company Name 1</h6></Link>
                                </div>
                                <div className="ms-2">
                                    <Badge color='primary'>Company</Badge>
                                </div>
                            </div>
                        </div>
                        <div className="text-reset notification-item d-block dropdown-item position-relative">
                            <div className="d-flex align-items-center">
                                <img src={avatar2}
                                    className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                                <div className="flex-grow-1">

                                    <Link to="#" className="stretched-link"><h6 className="mt-0 mb-1 fs-13 fw-semibold">Company Name 2</h6></Link>
                                </div>
                                <div className="ms-2">
                                    <Badge color='primary'>User</Badge>
                                </div>
                            </div>
                        </div>
                    </SimpleBar>

                </DropdownMenu>
            </Dropdown>
        </React.Fragment>
    );
};

export default SearchDropdown;
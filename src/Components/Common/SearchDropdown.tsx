import React, { Suspense, useState } from 'react';
import { Badge, Col, Dropdown, DropdownMenu, DropdownToggle, Input, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import Select from "react-select";
import { Link } from 'react-router-dom';
//import images
import avatar2 from "../../assets/images/users/avatar-2.jpg";

//SimpleBar
import SimpleBar from "simplebar-react";
import { getAddressFromCordinates } from 'actions';
import makeAnimated from "react-select/animated";

const QrScannerModal = React.lazy(() => import('./QrCodeScanner'));
const animatedComponents = makeAnimated();

const SingleOptions = [
    { value: 'Category 1', label: 'Category 1' },
    { value: 'Category 2', label: 'Category 2' },
    { value: 'Category 3', label: 'Category 3' },
    { value: 'Category 4', label: 'Category 4' }
];

interface SearchDropdownProps {
    isSearchDropdown: boolean,
    toggleSearchDropdown: () => void
}

const SearchDropdown = ({ isSearchDropdown, toggleSearchDropdown }: SearchDropdownProps) => {
    const [useCurrentAddress, setUserCurrentAddress] = useState("")

    const [categories, setCategories] = useState<any>('');
    const handleGetCurrentAddress = async () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const response = await getAddressFromCordinates(position?.coords?.latitude, position?.coords?.longitude)
                setUserCurrentAddress(response)
            })
        }

    }

    const [showQrCode, setShowQrCode] = useState(false)

    const customStyles = {
        multiValue: (styles: any, { data }: any) => {
            return {
                ...styles,
                backgroundColor: "#3762ea",
            };
        },
        multiValueLabel: (styles: any, { data }: any) => ({
            ...styles,
            backgroundColor: "#405189",
            color: "white",
        }),
        multiValueRemove: (styles: any, { data }: any) => ({
            ...styles,
            color: "white",
            backgroundColor: "#405189",
            ':hover': {
                backgroundColor: "#405189",
                color: 'white',
            },
        }),
    }


    return (
        <React.Fragment>
            <Dropdown isOpen={isSearchDropdown} toggle={toggleSearchDropdown} className="topbar-head-dropdown ms-1 header-item">
                <DropdownToggle type="button" tag="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle">
                    <i className='bx bx-search fs-22'></i>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-xl full-screen-dropdown dropdown-menu-end p-0">
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
                        <div className=" p-3">
                            <div>
                                <div className='mb-2 d-flex gap-1'>

                                    <button onClick={() => {
                                        setShowQrCode(true)
                                    }} style={{
                                        width: "48px",
                                        height: "38px"
                                    }} className='btn  btn-success p-0'>
                                        <i className='ri  ri-qr-scan-2-line fs-3'></i>
                                    </button>
                                    <Input className="form-control flex-grow-1 form-control-icon" id="search" onChange={(e) => { setUserCurrentAddress(e?.target?.value) }} value={useCurrentAddress} placeholder='Search' />
                                    <button onClick={handleGetCurrentAddress} style={{
                                        width: "48px",
                                        height: "38px"
                                    }} className='btn  btn-success p-0'>
                                        <i className='ri ri-crosshair-2-line fs-3'></i>
                                    </button>
                                </div>
                            </div>
                            <div className="mb-2">
                                <Select
                                    value={categories}
                                    isMulti={true}
                                    isClearable={true}
                                    onChange={(selectedMulti2: any) => {
                                        setCategories(selectedMulti2);
                                    }}
                                    placeholder="Categories"
                                    options={SingleOptions}
                                    styles={customStyles}
                                    components={animatedComponents}
                                />
                            </div>
                            <div className='mb-2'>
                                <button onClick={handleGetCurrentAddress} className='btn  w-100 btn-success '>
                                    Search
                                </button>
                            </div>
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
                    </SimpleBar>

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
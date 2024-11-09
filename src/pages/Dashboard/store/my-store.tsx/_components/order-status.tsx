import classNames from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Collapse } from 'reactstrap'

const OrderStatus = () => {
    const [col1, setcol1] = useState<boolean>(true);
    const [col2, setcol2] = useState<boolean>(true);
    const [col3, setcol3] = useState<boolean>(true);

    function togglecol1() {
        setcol1(!col1);
    }
    function togglecol2() {
        setcol2(!col2);
    }

    function togglecol3() {
        setcol3(!col3);
    }
    return (

        <Card>
            <CardHeader>
                <div className="d-sm-flex align-items-center">
                    <h5 className="card-title flex-grow-1 mb-0">Order Status</h5>
                    {/* <div className="flex-shrink-0 mt-2 mt-sm-0">
              <Link
                to="#"
                className="btn btn-soft-info material-shadow-none btn-sm mt-2 mt-sm-0"
              >
                <i className="ri-map-pin-line align-middle me-1"></i>{" "}
                Change Address
              </Link>{" "}
              <Link
                to="#"
                className="btn btn-soft-danger material-shadow-none btn-sm mt-2 mt-sm-0"
              >
                <i className="mdi mdi-archive-remove-outline align-middle me-1"></i>{" "}
                Cancel Order
              </Link>
            </div> */}
                </div>
            </CardHeader>
            <CardBody>
                <div className="profile-timeline">
                    <div
                        className="accordion accordion-flush"
                        id="accordionFlushExample"
                    >
                        <div className="accordion-item border-0" onClick={togglecol1}>
                            <div className="accordion-header" id="headingOne">
                                <Link to="#" className={classNames(
                                    "accordion-button",
                                    "p-2",
                                    "shadow-none",
                                    { collapsed: !col1 }

                                )}>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 avatar-xs">
                                            <div className="avatar-title bg-success material-shadow rounded-circle">
                                                <i className="ri-shopping-bag-line"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="fs-15 mb-0 fw-semibold">
                                                Order Placed -{" "}
                                                <span className="fw-normal">
                                                    Wed, 15 Dec 2021
                                                </span>
                                            </h6>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <Collapse
                                id="collapseOne"
                                className="accordion-collapse"
                                isOpen={col1}
                            >
                                <div className="accordion-body ms-2 ps-5 pt-0">
                                    <h6 className="mb-1">An order has been placed.</h6>
                                    <p className="text-muted">
                                        Wed, 15 Dec 2021 - 05:34PM
                                    </p>

                                    <h6 className="mb-1">
                                        Seller has processed your order.
                                    </h6>
                                    <p className="text-muted mb-0">
                                        Thu, 16 Dec 2021 - 5:48AM
                                    </p>
                                </div>
                            </Collapse>
                        </div>
                        <div className="accordion-item border-0" onClick={togglecol2}>
                            <div className="accordion-header" id="headingTwo">
                                <Link to="#collapseTwo"
                                    className={classNames(
                                        "accordion-button",
                                        "p-2",
                                        "shadow-none",
                                        { collapsed: !col2 }
                                    )}

                                >
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 avatar-xs">
                                            <div className="avatar-title bg-success material-shadow rounded-circle">
                                                <i className="mdi mdi-gift-outline"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="fs-15 mb-1 fw-semibold">
                                                Packed -{" "}
                                                <span className="fw-normal">
                                                    Thu, 16 Dec 2021
                                                </span>
                                            </h6>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <Collapse
                                id="collapseTwo"
                                className="accordion-collapse"
                                isOpen={col2}
                            >
                                <div className="accordion-body ms-2 ps-5 pt-0">
                                    <h6 className="mb-1">
                                        Your Item has been picked up by courier patner
                                    </h6>
                                    <p className="text-muted mb-0">
                                        Fri, 17 Dec 2021 - 9:45AM
                                    </p>
                                </div>
                            </Collapse>
                        </div>
                        <div className="accordion-item border-0" onClick={togglecol3}>
                            <div className="accordion-header" id="headingThree">
                                <Link to="#collapseThree"
                                    className={classNames(
                                        "accordion-button",
                                        "p-2",
                                        "shadow-none",
                                        { collapsed: !col3 }
                                    )}

                                >
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 avatar-xs">
                                            <div className="avatar-title bg-success material-shadow rounded-circle">
                                                <i className="ri-truck-line"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="fs-15 mb-1 fw-semibold">
                                                Shipping -{" "}
                                                <span className="fw-normal">
                                                    Thu, 16 Dec 2021
                                                </span>
                                            </h6>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <Collapse
                                id="collapseThree"
                                className="accordion-collapse"
                                isOpen={col3}
                            >
                                <div className="accordion-body ms-2 ps-5 pt-0">
                                    <h6 className="fs-14">
                                        RQK Logistics - MFDS1400457854
                                    </h6>
                                    <h6 className="mb-1">Your item has been shipped.</h6>
                                    <p className="text-muted mb-0">
                                        Sat, 18 Dec 2021 - 4.54PM
                                    </p>
                                </div>
                            </Collapse>
                        </div>
                        <div className="accordion-item border-0">
                            <div className="accordion-header" id="headingFour">
                                <Link to="#"
                                    className="accordion-button p-2 shadow-none"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 avatar-xs">
                                            <div className="avatar-title bg-light text-success material-shadow rounded-circle">
                                                <i className="ri-takeaway-fill"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="fs-14 mb-0 fw-semibold">
                                                Out For Delivery
                                            </h6>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="accordion-item border-0">
                            <div className="accordion-header" id="headingFive">
                                <Link
                                    className="accordion-button p-2 shadow-none"
                                    to="#"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 avatar-xs">
                                            <div className="avatar-title bg-light text-success material-shadow rounded-circle">
                                                <i className="mdi mdi-package-variant"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="fs-14 mb-0 fw-semibold">
                                                Delivered
                                            </h6>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default OrderStatus
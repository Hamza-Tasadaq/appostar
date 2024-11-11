import Nouislider from 'nouislider-react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, UncontrolledCollapse } from 'reactstrap';

import "nouislider/dist/nouislider.css";

const Filters = () => {
    return (
        <>
            <Card style={{ position: "sticky", top: "94px" }}>
                <CardHeader >
                    <div className="d-flex">
                        <div className="flex-grow-1">
                            <h5 className="fs-16 mb-0">Filters</h5>
                        </div>
                        <div className="flex-shrink-0">
                            <Link to="#" className="text-decoration-underline">
                                Clear All
                            </Link>
                        </div>
                    </div>
                </CardHeader>

                <div className="accordion accordion-flush">
                    <div className="card-body border-bottom">
                        <div>
                            <p className="text-muted text-uppercase fs-12 fw-medium mb-2">
                                Products
                            </p>

                            <ul className="list-unstyled mb-0 filter-list">
                                <li>
                                    <Link to="#" className={false ? "active d-flex py-1 align-items-center" : "d-flex py-1 align-items-center"} >
                                        <div className="flex-grow-1">
                                            <h5 className="fs-13 mb-0 listname">Grocery</h5>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className={true ? "active d-flex py-1 align-items-center" : "d-flex py-1 align-items-center"} >
                                        <div className="flex-grow-1">
                                            <h5 className="fs-13 mb-0 listname">Fashion</h5>
                                        </div>
                                        <div className="flex-shrink-0 ms-2">
                                            <span className="badge bg-light text-muted">5</span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className={false ? "active d-flex py-1 align-items-center" : "d-flex py-1 align-items-center"} >
                                        <div className="flex-grow-1">
                                            <h5 className="fs-13 mb-0 listname">Watches</h5>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className={false ? "active d-flex py-1 align-items-center" : "d-flex py-1 align-items-center"} >
                                        <div className="flex-grow-1">
                                            <h5 className="fs-13 mb-0 listname">Electronics</h5>
                                        </div>
                                        <div className="flex-shrink-0 ms-2">
                                            <span className="badge bg-light text-muted">5</span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className={false ? "active d-flex py-1 align-items-center" : "d-flex py-1 align-items-center"} >
                                        <div className="flex-grow-1">
                                            <h5 className="fs-13 mb-0 listname">Furniture</h5>
                                        </div>
                                        <div className="flex-shrink-0 ms-2">
                                            <span className="badge bg-light text-muted">6</span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className={false ? "active d-flex py-1 align-items-center" : "d-flex py-1 align-items-center"} >
                                        <div className="flex-grow-1">
                                            <h5 className="fs-13 mb-0 listname">Automotive Accessories</h5>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className={false ? "active d-flex py-1 align-items-center" : "d-flex py-1 align-items-center"} >
                                        <div className="flex-grow-1">
                                            <h5 className="fs-13 mb-0 listname">Appliances</h5>
                                        </div>
                                        <div className="flex-shrink-0 ms-2">
                                            <span className="badge bg-light text-muted">7</span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className={false ? "active d-flex py-1 align-items-center" : "d-flex py-1 align-items-center"} >
                                        <div className="flex-grow-1">
                                            <h5 className="fs-13 mb-0 listname">Kids</h5>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className={false ? "active d-flex py-1 align-items-center" : "d-flex py-1 align-items-center"} >
                                        <div className="flex-grow-1">
                                            <h5 className="fs-13 mb-0 listname">Grocery</h5>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className={true ? "active d-flex py-1 align-items-center" : "d-flex py-1 align-items-center"} >
                                        <div className="flex-grow-1">
                                            <h5 className="fs-13 mb-0 listname">Fashion</h5>
                                        </div>
                                        <div className="flex-shrink-0 ms-2">
                                            <span className="badge bg-light text-muted">5</span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className={false ? "active d-flex py-1 align-items-center" : "d-flex py-1 align-items-center"} >
                                        <div className="flex-grow-1">
                                            <h5 className="fs-13 mb-0 listname">Watches</h5>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className={false ? "active d-flex py-1 align-items-center" : "d-flex py-1 align-items-center"} >
                                        <div className="flex-grow-1">
                                            <h5 className="fs-13 mb-0 listname">Electronics</h5>
                                        </div>
                                        <div className="flex-shrink-0 ms-2">
                                            <span className="badge bg-light text-muted">5</span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className={false ? "active d-flex py-1 align-items-center" : "d-flex py-1 align-items-center"} >
                                        <div className="flex-grow-1">
                                            <h5 className="fs-13 mb-0 listname">Furniture</h5>
                                        </div>
                                        <div className="flex-shrink-0 ms-2">
                                            <span className="badge bg-light text-muted">6</span>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="card-body border-bottom">
                        <p className="text-muted text-uppercase fs-12 fw-medium mb-4">
                            Price
                        </p>
                        <Nouislider range={{ min: 0, max: 100 }} start={[20, 80]} connect />
                    </div>


                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button bg-transparent shadow-none collapsed"
                                type="button"
                                id="flush-headingSize"
                            >
                                <span className="text-muted text-uppercase fs-12 fw-medium">
                                    Size
                                </span>
                            </button>
                        </h2>
                        <UncontrolledCollapse toggler="#flush-headingSize">
                            <div
                                id="flush-collapseDiscount"
                                className="accordion-collapse collapse show"
                            >
                                <div className="accordion-body text-body pt-1">
                                    <div className="d-flex flex-column gap-2">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="productdiscountRadio6"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="productdiscountRadio6"
                                            >
                                                Small
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="productdiscountRadio5"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="productdiscountRadio5"
                                            >
                                                Medium
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="productdiscountRadio4"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="productdiscountRadio4"
                                            >
                                                Large
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="productdiscountRadio3"
                                                defaultChecked
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="productdiscountRadio3"
                                            >
                                                Xl
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="productdiscountRadio2"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="productdiscountRadio2"
                                            >
                                                2xl
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="productdiscountRadio1"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="productdiscountRadio1"
                                            >
                                                3xl
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </UncontrolledCollapse>
                    </div>

                </div>
            </Card>
        </>
    )
}

export default Filters
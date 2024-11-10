import { Link } from 'react-router-dom';
import { Card, CardHeader } from 'reactstrap';

const CategoriesSelector = () => {
    return (
        <Card className='mb-0 h-100'>
            <CardHeader >
                <div className="d-flex">
                    <div className="flex-grow-1">
                        <h5 className="fs-16 mb-0">Categories</h5>
                    </div>
                </div>
            </CardHeader>
            <div className="accordion accordion-flush">
                <div className="card-body h-100">
                    <div>
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
            </div>
        </Card>
    )
}

export default CategoriesSelector
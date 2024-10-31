import { Card, CardBody, CardHeader } from 'reactstrap'

const Tags = () => {
    return (
        <Card className='comapny-details-card'>
            <CardHeader>
                <h1>Tags</h1>
            </CardHeader>
            <CardBody>
                <ul className='list-unstyled d-flex align-items-center flex-wrap gap-2'>
                    <li>
                        <h5>
                            <span className="badge bg-primary-subtle text-primary">Hotel</span>
                        </h5>
                    </li>
                    <li>
                        <h5>
                            <span className="badge bg-primary-subtle text-primary">Hostel</span>
                        </h5>
                    </li>
                    <li>
                        <h5>
                            <span className="badge bg-primary-subtle text-primary">Room</span>

                        </h5>
                    </li>
                    <li>
                        <h5>
                            <span className="badge bg-primary-subtle text-primary">Spa</span>
                        </h5>
                    </li>
                    <li>
                        <h5>
                            <span className="badge bg-primary-subtle text-primary">Restaurant</span>
                        </h5>
                    </li>
                    <li>
                        <h5>
                            <span className="badge bg-primary-subtle text-primary">Parking</span>
                        </h5>
                    </li>
                    <li>
                        <h5>
                            <span className="badge bg-primary-subtle text-primary">Spa</span>
                        </h5>
                    </li>
                    <li>
                        <h5>
                            <span className="badge bg-primary-subtle text-primary">Restaurant</span>
                        </h5>
                    </li>
                    <li>
                        <h5>
                            <span className="badge bg-primary-subtle text-primary">Parking</span>
                        </h5>
                    </li>
                </ul>
            </CardBody>
        </Card>
    )
}

export default Tags
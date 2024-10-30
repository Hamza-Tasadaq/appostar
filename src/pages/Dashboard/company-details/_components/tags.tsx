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
                        <span className="badge bg-primary-subtle text-primary">Hotel</span>
                    </li>
                    <li>
                        <span className="badge bg-primary-subtle text-primary">Hostel</span>
                    </li>
                    <li>
                        <span className="badge bg-primary-subtle text-primary">Room</span>
                    </li>
                    <li>
                        <span className="badge bg-primary-subtle text-primary">Spa</span>
                    </li>
                    <li>
                        <span className="badge bg-primary-subtle text-primary">Restaurant</span>
                    </li>
                    <li>
                        <span className="badge bg-primary-subtle text-primary">Parking</span>
                    </li>
                    <li>
                        <span className="badge bg-primary-subtle text-primary">Spa</span>
                    </li>
                    <li>
                        <span className="badge bg-primary-subtle text-primary">Restaurant</span>
                    </li>
                    <li>
                        <span className="badge bg-primary-subtle text-primary">Parking</span>
                    </li>
                </ul>
            </CardBody>
        </Card>
    )
}

export default Tags
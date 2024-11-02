
import { Button, Card, CardBody, CardHeader, Col } from 'reactstrap'
import LocationMap from './location-map'

const LocationContact = () => {
    return (

        <Card className='comapny-details-card location-and-contact'>
            {/* <CardHeader>
                <h1>Location & Contact</h1>
            </CardHeader> */}

            <CardBody className='p-0'>
                <div className='location-map-container'>
                    <LocationMap />
                </div>
                <ul className='list-unstyled contacts-list'>
                    <li className='d-flex align-items-center m-0 pb-1 pt-1 justify-content-between gap-2' >
                        <div className='d-flex align-items-center gap-1'>
                            <i className=' bx bx-map-pin fs-4 text-primary'></i>
                        </div>
                        <div className='flex-grow-1'>
                            <p className='m-0'>Milan, Italy, Europe</p>
                        </div>
                    </li>
                    <li className='d-flex align-items-center m-0 pb-1 pt-1 justify-content-between gap-1' >
                        <div className='d-flex align-items-center gap-1'>
                            <i className='ri ri-map-pin-4-line fs-4 text-primary'></i>
                        </div>
                        <div className='flex-grow-1'>
                            <p className='m-0'>5.9Km by you</p>
                        </div>
                    </li>
                </ul>
                <Col>
                    <Button color='primary'>
                        <i className='ri  ri-send-plane-fill me-2'></i>
                        Open in Maps
                    </Button>
                </Col>
            </CardBody>
        </Card>
    )
}

export default LocationContact
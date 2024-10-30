
import { Card, CardBody, CardHeader } from 'reactstrap'
import LocationMap from './location-map'

const LocationContact = () => {
    return (

        <Card className='comapny-details-card location-and-contact'>
            <CardHeader>
                <h1>Location & Contact</h1>
            </CardHeader>

            <CardBody className='p-0'>
                <div className='location-map-container'>
                    <LocationMap />
                </div>
                <ul className='list-unstyled contacts-list'>
                    <li className='d-flex align-items-center m-0 pb-1 pt-1 justify-content-between gap-3' >
                        <div className='d-flex align-items-center gap-1'>
                            <i className=' bx bx-map-pin fs-4 text-primary'></i>
                            <h5 className='m-0'>Address:</h5>
                        </div>
                        <div className='flex-grow-1'>
                            <p className='m-0'>Milan, Italy, Europe</p>
                        </div>
                    </li>
                    <li className='d-flex align-items-center m-0 pb-1 pt-1 justify-content-between gap-3' >
                        <div className='d-flex align-items-center gap-1'>
                            <i className=' bx bx-phone fs-4 text-primary'></i>
                            <h5 className='m-0'>Phone:</h5>
                        </div>
                        <div className='flex-grow-1'>
                            <p className='m-0'>+7(123)987654321</p>
                        </div>
                    </li>
                    <li className='d-flex align-items-center m-0 pb-1 pt-1 justify-content-between gap-3' >
                        <div className='d-flex align-items-center gap-1'>
                            <i className='ri  ri-mail-send-line fs-4 text-primary'></i>
                            <h5 className='m-0'>Email:</h5>
                        </div>
                        <div className='flex-grow-1'>
                            <p className='m-0'>admin@apposto.com</p>
                        </div>
                    </li>
                    <li className='d-flex align-items-center m-0 pb-1 pt-1 justify-content-between gap-3' >
                        <div className='d-flex align-items-center gap-1'>
                            <i className='ri ri-earth-line fs-4 text-primary'></i>
                            <h5 className='m-0'>Website:</h5>
                        </div>
                        <div className='flex-grow-1'>
                            <p className='m-0'>www.apposto.com</p>
                        </div>
                    </li>
                </ul>
            </CardBody>
        </Card>
    )
}

export default LocationContact
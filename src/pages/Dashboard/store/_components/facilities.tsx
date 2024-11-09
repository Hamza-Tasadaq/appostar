import React from 'react'
import { Button, Card, CardBody, CardHeader } from 'reactstrap'

const Facilities = () => {
    return (
        <Card className='comapny-details-card listing-features'>
            <CardHeader>
                <h1>Facilities</h1>
            </CardHeader>
            <CardBody>
                <ul className='list-unstyled d-flex align-items-center flex-wrap listing-features-list gap-3'>
                    <li className='d-flex align-items-center gap-2'>
                        <Button color='light' className='btn-icon rounded-circle'>
                            <i className='ri  ri-rocket-2-line fs-4 text-primary'></i>
                        </Button>
                        <p className='mb-0'>Elevator in building</p>
                    </li>
                    <li className='d-flex align-items-center gap-2'>
                        <Button color='light' className='btn-icon rounded-circle'>
                            <i className='ri ri-wifi-line fs-4 text-primary'></i>
                        </Button>
                        <p className='mb-0'>Free Wifi</p>
                    </li>
                    <li className='d-flex align-items-center gap-2'>
                        <Button color='light' className='btn-icon rounded-circle'>
                            <i className='ri   ri-e-bike-line fs-4 text-primary'></i>
                        </Button>
                        <p className='mb-0'>Free Parking</p>
                    </li>
                    <li className='d-flex align-items-center gap-2'>
                        <Button color='light' className='btn-icon rounded-circle'>
                            <i className='ri ri-cloud-line fs-4 text-primary'></i>
                        </Button>
                        <p className='mb-0'>Air Conditioned</p>
                    </li>

                    <li className='d-flex align-items-center gap-2'>
                        <Button color='light' className='btn-icon rounded-circle'>
                            <i className='ri ri-shopping-cart-2-line fs-4 text-primary'></i>
                        </Button>
                        <p className='mb-0'>Online Ordering</p>
                    </li>
                </ul>
            </CardBody>
        </Card>
    )
}

export default Facilities
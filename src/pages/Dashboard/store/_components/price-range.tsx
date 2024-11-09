import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'

const PriceRange = () => {
    return (
        <Card className='comapny-details-card price-range'>
            <CardHeader>
                <h1>Price Range</h1>
            </CardHeader>
            <CardBody>
                <ul className='list-unstyled prices-list'>
                    <li className='d-flex align-items-center m-0 pb-1 pt-1 justify-content-between gap-3' >
                        <div className='d-flex align-items-center gap-1'>
                            <i className='  bx bx-dollar-circle fs-4 text-primary'></i>
                            <h5 className='m-0'>Price:</h5>
                        </div>
                        <div className='flex-grow-1'>
                            <p className='m-0 text-success'>$81 - $32</p>
                        </div>
                    </li>
                </ul>
            </CardBody>
        </Card>
    )
}

export default PriceRange
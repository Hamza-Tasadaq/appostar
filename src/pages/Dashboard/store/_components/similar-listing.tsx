import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'

const SimilarListing = () => {
    return (
        <Card className='comapny-details-card similar-listing'>
            <CardHeader>
                <h1>Similar Listing</h1>
            </CardHeader>
            <CardBody>
                <ul className='list-unstyled d-flex flex-column gap-3'>
                    {Array.from({ length: 3 })?.map((_, index) =>
                        <li key={index + 1} className='d-flex align-items-stretch gap-3'>
                            <img src='https://townhub.kwst.net/images/gallery/thumbnail/1.png' alt='list' className='rounded' />
                            <div className='flex-grow-1 d-flex flex-column'>
                                <h3 className='mb-1'>Iconic Cafe</h3>
                                <div className='flex-grow-1 d-flex align-items-start gap-1 mb-2'>
                                    <i className=' bx bx-map text-primary fs-4'></i>
                                    <p className='m-0'>40 Journal Square Plaza, NJ, USA</p>
                                </div>
                                <ul className='d-flex align-items-center gap-2 list-unstyled'>
                                    <li>
                                        <span className="badge rounded-pill border border-primary text-primary">Hotel</span>
                                    </li>
                                    <li>
                                        <span className="badge rounded-pill border border-primary text-primary">Cafe</span>
                                    </li>
                                    <li>
                                        <span className="badge rounded-pill border border-primary text-primary">Restaurant</span>
                                    </li>
                                </ul>
                            </div>
                        </li>)}
                </ul>
            </CardBody>
        </Card>
    )
}

export default SimilarListing
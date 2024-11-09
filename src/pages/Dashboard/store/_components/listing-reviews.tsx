import React from 'react'
import { Badge, Card, CardBody, CardFooter, CardHeader } from 'reactstrap'

const ListingReviews = () => {
    return (
        <Card className='comapny-details-card review-list'>
            <CardHeader>
                <h1>Items Reviews</h1>
            </CardHeader>
            <CardBody>
                <ul className='list-unstyled review-list-items'>
                    <li className='d-flex align-items-start gap-3'>
                        <div className='avatar'>
                            <img src='https://townhub.kwst.net/images/avatar/4.jpg' alt='user-avatar' className='rounded-circle' />
                        </div>
                        <Card className='review-content'>
                            <CardHeader className='d-flex align-items-center justify-content-between bg-transparent'>
                                <div>
                                    <h3 className='name'>Liza Rose</h3>
                                </div>
                                <div className='d-flex align-items-center gap-2'>
                                    <div>
                                        <ul className='list-unstyled d-flex m-0'>
                                            <li><i className='ri ri-star-s-fill text-warning'></i></li>
                                            <li><i className='ri ri-star-s-fill text-warning'></i></li>
                                            <li><i className='ri ri-star-s-fill text-warning'></i></li>
                                            <li><i className='ri ri-star-s-fill text-warning'></i></li>
                                            <li><i className='ri ri-star-s-fill text-warning'></i></li>
                                        </ul>
                                    </div>
                                    <h4 className=' mb-0'>
                                        <Badge color='primary' className='d-flex align-items-center'>
                                            <span>5.0</span>
                                        </Badge>
                                    </h4>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <h4>" Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. "
                                </h4>
                            </CardBody>
                            <CardFooter className='d-flex align-items-center gap-3 bg-transparent'>
                                <i className='ri  ri-calendar-line fs-4 text-primary'></i>
                                <p className='mb-0'>12 April 2024</p>
                            </CardFooter>
                        </Card>
                    </li>
                </ul>
            </CardBody>
        </Card>
    )
}

export default ListingReviews
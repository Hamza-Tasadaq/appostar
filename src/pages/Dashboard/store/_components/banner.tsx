import { Badge, Button } from 'reactstrap'

const Banner = () => {
    return (
        <div className='banner-wrapper d-flex align-items-end'>
            <img src='https://townhub.kwst.net/images/bg/6.jpg' alt='hero1' />
            <div className='position-relative banner-content w-100'>
                <div className='d-flex flex-column flex-md-row align-items-md-center gap-3 w-100 justify-content-between'>
                    <div>
                        <div className='d-flex align-items-center gap-2'>
                            <h1 className='title'>Iconic Cafe in Manhattan</h1>
                            <i className='ri  ri-checkbox-circle-fill fs-2 text-success'></i>
                        </div>
                        <div className='d-flex align-items-center address gap-2'>
                            <i className=' bx bx-map-pin fs-2 text-white'></i>
                            <p className='m-0'>Milan, Italy, Europe</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-start gap-3 review-badge'>
                        <h3 className='h-100 mb-0'>
                            <Badge color='primary' className=' rounded-circle  d-flex align-items-center'>
                                <span>5.0</span>
                            </Badge>
                        </h3>
                        <div>
                            <ul className='list-unstyled d-flex m-0'>
                                <li><i className='ri ri-star-s-fill text-warning'></i></li>
                                <li><i className='ri ri-star-s-fill text-warning'></i></li>
                                <li><i className='ri ri-star-s-fill text-warning'></i></li>
                                <li><i className='ri ri-star-s-fill text-warning'></i></li>
                                <li><i className='ri ri-star-s-fill text-warning'></i></li>
                            </ul>
                            <p className='m-0 text-white'>4 reviews</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='d-flex flex-column flex-md-row align-items-md-center gap-2 justify-content-between'>
                    <ul className='list-unstyled d-flex align-items-center flex-wrap category gap-3'>
                        <li className='d-flex align-items-center gap-2'>
                            <Button color='success' className='btn-icon rounded-circle'>
                                <i className='ri ri-restaurant-line fs-4 text-white'></i>
                            </Button>
                            <p className='mb-0 text-white'>Resaurant</p>
                        </li>
                    </ul>
                    <ul className='list-unstyled d-flex align-items-center gap-2'>
                        <li>
                            <Button color="success" className='material-shadow-none'>
                                <i className='ri  ri-eye-line fs-5 me-2'></i>
                                Viewed - 256 </Button>
                        </li>
                        <li>
                            <Button color="success" className='material-shadow-none'>
                                <i className='ri ri-bookmark-line fs-5 me-2'></i>
                                Bookmark - 256 </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Banner
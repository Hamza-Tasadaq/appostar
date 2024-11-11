import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Row } from 'reactstrap'

const FlashSale = () => {
    return (
        <Row className='d-flex justify-content-center'>
            <Col sm={10}>
                <Row>
                    <Col sm={12} className='d-flex align-items-center mb-3 justify-content-between'>
                        <div className='d-flex align-items-center gap-2'>
                            <i className=' ri-timer-flash-line fs-3 text-primary'></i>
                            <h3 className='mb-0 text-primary'>Flash Sale</h3>
                        </div>
                        <Link to={"/categories/all"}>View All</Link>
                    </Col>
                    <Col sm={3}>
                        <div className='h-100 w-100 pb-4'>
                            <img src='https://images.pexels.com/photos/1194760/pexels-photo-1194760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='cover' className='h-100 w-100 rounded ' style={{ objectFit: "cover" }} />
                        </div>
                    </Col>
                    <Col sm={9}>
                        <Row>
                            {
                                Array.from({ length: 8 })?.map((_, _index) => <Col sm={3}>
                                    <Card key={_index} >
                                        <CardHeader className='position-relative p-0'>
                                            <div className='position-absolute d-flex align-items-center justify-content-between' style={{ left: "8px", right: "8px", top: "16px" }}>
                                                <Button size='sm' color='primary' outline className='btn-icon btn-primary'>
                                                    <i className='ri ri-eye-line fs-4'></i>
                                                </Button>
                                                <Button size='sm' color='primary' outline className='btn-icon btn-primary'>
                                                    <i className='ri ri-arrow-left-right-line fs-4'></i>
                                                </Button>
                                            </div>
                                            <img className="card-img-top img-fluid" src={"https://themes.themesbrand.com/velzon/react-ts/master/static/media/img-2.494511db5809042c3373.jpg"} alt="Card cap" />
                                        </CardHeader>
                                        <CardBody className='py-2'>
                                            <h4 className="card-title text-center text-primary">Product Name</h4>
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <h5 className='mb-0'>
                                                    <del>15,00€</del>
                                                </h5>
                                                <h5 className='mb-0'>
                                                    <ins>12,00€</ins>
                                                </h5>
                                            </div>
                                            <div className='d-flex align-items-center gap-1'>
                                                <i className='ri  ri-timer-line text-danger fs-4'></i><span className='text-danger'>2D 15H 35M left</span>
                                            </div>
                                        </CardBody>
                                        <CardFooter className=" pt-1 pb-1 card-footer">
                                            <Button color='primary' className='w-100'>Buy Now</Button>
                                        </CardFooter>
                                    </Card>
                                </Col>)
                            }
                        </Row>
                    </Col>
                </Row>
            </Col>

        </Row>
    )
}

export default FlashSale
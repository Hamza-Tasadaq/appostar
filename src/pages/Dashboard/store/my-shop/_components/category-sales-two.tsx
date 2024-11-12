import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardFooter, Col, Row } from 'reactstrap'

const CategorySalesTwo = () => {
    return (

        <Row className='d-flex justify-content-center'>
            <Col sm={10}>
                <Row>
                    <Col sm={12} className='d-flex align-items-center mb-3 justify-content-between'>
                        <div className='d-flex align-items-center gap-2'>
                            <h3 className='mb-0 text-primary'>Category Sale</h3>
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
                                Array.from({ length: 4 })?.map((_, _index) =>
                                    <Col sm={6}>
                                        <Card key={_index} >
                                            {/* <CardHeader className='position-relative p-0'>
                                                <div className='position-absolute d-flex align-items-center justify-content-end' style={{ left: "8px", right: "8px", top: "16px" }}>
                                                    <Button size='sm' color='primary' outline className='btn-icon btn-primary'>
                                                        <i className='ri ri-eye-line fs-4'></i>
                                                    </Button>
                                                    <Button size='sm' color='primary' outline className='btn-icon btn-primary'>
                                                        <i className='ri ri-arrow-left-right-line fs-4'></i>
                                                    </Button>
                                                </div>
                                                <img className="card-img-top img-fluid" src={"https://themes.themesbrand.com/velzon/react-ts/master/static/media/img-2.494511db5809042c3373.jpg"} alt="Card cap" />
                                            </CardHeader> */}
                                            <CardBody className='py-2'>
                                                <div className='d-flex align-items-stretch gap-2'>
                                                    <div className='d-flex flex-column align-items-start justify-content-between'>
                                                        <img className="rounded" width={60} height={60} src={"https://themes.themesbrand.com/velzon/react-ts/master/static/media/img-2.494511db5809042c3373.jpg"} alt="Card cap" />
                                                        <h5 className='mb-0 text-success'>
                                                            <ins>12,00€</ins>
                                                        </h5>
                                                    </div>
                                                    <div>
                                                        <div className='d-flex align-items-center justify-content-between'>
                                                            <h4 className="card-title text-left text-primary">Product Name</h4>
                                                            <div className='d-flex align-items-center gap-2'>
                                                                <Button size='sm' color='primary' outline className='btn-icon btn-primary'>
                                                                    <i className='ri ri-eye-line fs-4'></i>
                                                                </Button>
                                                                <Button size='sm' color='primary' outline className='btn-icon btn-primary'>
                                                                    <i className='ri ri-arrow-left-right-line fs-4'></i>
                                                                </Button>
                                                            </div>
                                                        </div>
                                                        <p className='mb-0'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                    </div>
                                                </div>
                                            </CardBody>
                                            <CardFooter className=" pt-1 pb-1 card-footer">
                                                <Button color='primary' className='w-100'>Buy Now</Button>
                                            </CardFooter>
                                        </Card>
                                    </Col>
                                )
                            }
                        </Row>
                    </Col>
                </Row>
            </Col>

        </Row>
    )
}

export default CategorySalesTwo
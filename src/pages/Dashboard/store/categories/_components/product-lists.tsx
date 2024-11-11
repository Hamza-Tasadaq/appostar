import { Button, Card, CardBody, CardFooter, CardHeader, Col, Row } from "reactstrap"


const ProductLists = () => {
    return (
        <div>
            <Row>
                {Array.from({ length: 45 })?.map((_, _index) => <Col sm={3}>
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
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <div className='d-flex align-items-center justify-content-center'>
                                <h5 className='mb-0 text-success'>
                                    <ins>12,00€</ins>
                                </h5>
                            </div>
                        </CardBody>
                        <CardFooter className=" pt-1 pb-1 card-footer">
                            <Button color='primary' className='w-100'>Buy Now</Button>
                        </CardFooter>
                    </Card>
                </Col>)}
            </Row>
        </div>
    )
}

export default ProductLists
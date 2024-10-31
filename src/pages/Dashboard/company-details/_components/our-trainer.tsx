import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'

const OurTrainer = () => {
    return (
        <Card className='comapny-details-card'>
            <CardHeader>
                <h1>Our Trainers</h1>
            </CardHeader>
            <CardBody>
                <Row>
                    <Col sm={4}>
                        <Card>
                            <img className="card-img-top img-fluid" src={"https://themes.themesbrand.com/velzon/react-ts/master/static/media/img-1.74235ecee986233a7367.jpg"} alt="Card cap" />
                            <CardBody>
                                <h4 className="card-title mb-2">Alisa Gray</h4>
                                <p className="card-text">At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called.</p>
                                <div className="">
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card>
                            <img className="card-img-top img-fluid" src={"https://themes.themesbrand.com/velzon/react-ts/master/static/media/img-1.74235ecee986233a7367.jpg"} alt="Card cap" />
                            <CardBody>
                                <h4 className="card-title mb-2">Alisa Gray</h4>
                                <p className="card-text">At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called.</p>
                                <div className="">
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card>
                            <img className="card-img-top img-fluid" src={"https://themes.themesbrand.com/velzon/react-ts/master/static/media/img-1.74235ecee986233a7367.jpg"} alt="Card cap" />
                            <CardBody>
                                <h4 className="card-title mb-2">Alisa Gray</h4>
                                <p className="card-text">At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called.</p>
                                <div className="">
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

export default OurTrainer
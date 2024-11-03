import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'

const WalletBalance = () => {
    return (
        <Card className='wallet-card'>
            <CardHeader className='p-0 overflow-hidden'>
                <div>
                    <img src={`https://themes.themesbrand.com/velzon/react-ts/master/static/media/img-9.7c9a4799283c4f821712.jpg`} alt="" className="img-fluid w-100 object-fit" />
                </div>
            </CardHeader>
            <CardBody className='position-relative'>
                <div className='mb-3'>
                    <h1 className='mb-0'>Wallet Balance</h1>
                    <img src='https://themes.themesbrand.com/velzon/react-ts/master/static/media/avatar-2.58874a6f667b9b04ce55.jpg' alt='avatar' className='rounded-circle avatar-img position-absolute' />
                </div>
                <Row className='stats'>
                    <Col className='d-flex flex-1 flex-column align-items-start justify-content-center'>
                        <h4>Total</h4>
                        <h4>110</h4>
                    </Col>
                    <Col className='d-flex flex-1 flex-column align-items-center justify-content-center'>
                        <h4>Used</h4>
                        <h4>90</h4>
                    </Col>
                    <Col className='d-flex flex-1 flex-column align-items-end justify-content-center'>
                        <h4>Available</h4>
                        <h4>20</h4>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

export default WalletBalance
import { Button, Card, CardBody, Col, Row } from 'reactstrap'
import Navigation from './navigation'

const NavigationWrapper = () => {
    return (

        <Row className='navigation-wrapper'>
            <Col className='p-0'>
                <Card>
                    <CardBody className='w-100 d-flex align-items-center justify-content-between'>
                        <Navigation />
                        <ul className='list-unstyled m-0 d-flex align-items-center gap-2'>
                            <li className=''>
                                <Button outline color='primary' className='rounded-pill'>
                                    <i className='ri  ri-heart-fill fs-6 '></i>
                                    11.3K
                                </Button>
                            </li>
                            <li>
                                <Button outline color='primary' className='rounded-pill'>
                                    <i className='ri  ri-share-fill fs-6'></i>
                                </Button>
                            </li>
                            <li>
                                <Button className='rounded-pill' color='primary'>Claim This Buisness</Button>
                            </li>
                        </ul>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default NavigationWrapper
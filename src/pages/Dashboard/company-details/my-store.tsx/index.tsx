import React from 'react'
import NavigationWrapper from '../_components/navigation-wrapper'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import PurchaseHistory from './_components/purchase-history'
import WalletBalance from './_components/wallet-balance'
import MenuList from './_components/menu-list'

const Store = () => {
    return (
        <React.Fragment>
            <div className="page-content ps-0 pe-0 no-padding-bottom-md no-padding-x overflow-x-hidden-md padding-top-small-sm">
                <NavigationWrapper />
                <Container fluid className='no-padding-x overflow-x-hidden-md position-relative'>
                    <Row>
                        <Col xxl={3}>
                            <WalletBalance />
                            <MenuList />
                        </Col>
                        <Col xxl={3}>
                            <PurchaseHistory />
                        </Col>
                        <Col xxl={6}>
                            <Card>
                                Right
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    )
}

export default Store
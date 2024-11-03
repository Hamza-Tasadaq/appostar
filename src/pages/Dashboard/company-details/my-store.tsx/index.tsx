import React from 'react'
import NavigationWrapper from '../_components/navigation-wrapper'
import { Button, Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import PurchaseHistory from './_components/purchase-history'
import WalletBalance from './_components/wallet-balance'
import MenuList from './_components/menu-list'
import ShippingAndBillingInfo from './_components/shipping-and-billing-info'
import OrderStatus from './_components/order-status'
import OrderDetailsTable from './_components/order-details-table'

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
                            <Card className='order-details-card'>
                                <CardHeader className='d-flex align-items-center justify-content-between'>
                                    <h1 className='mb-0'>Order Details - 20231105635099</h1>

                                    <Button color='danger rounded-pill'>
                                        <i className='ri  ri-emotion-unhappy-line fs-5 me-2'></i>
                                        Ask Refund
                                    </Button>
                                </CardHeader>
                                <CardBody className=''>
                                    <OrderStatus />
                                    <ShippingAndBillingInfo />
                                    <OrderDetailsTable />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    )
}

export default Store
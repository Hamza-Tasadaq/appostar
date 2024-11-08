import React from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import ScrollBar from 'react-perfect-scrollbar'
import WalletBalance from '../_components/wallet-balance'
import MenuList from '../_components/menu-list'
import PurchaseHistory from '../_components/purchase-history'
import ShippingAndBillingInfo from '../_components/shipping-and-billing-info'
import OrderDetailsTable from '../_components/order-details-table'
import OrderStatus from '../_components/order-status'

const Copy = () => {
    return (
        <React.Fragment>
            <div className="page-content ps-0 pe-0 no-padding-bottom-md no-padding-x overflow-x-hidden-md padding-top-small-sm">
                <Container fluid className='no-padding-x overflow-x-hidden-md position-relative'>
                    <Row style={{ height: "calc(100dvh - 154px)", overflow: "hidden" }}>
                        <Col md={3} style={{ height: "100%" }}>
                            <ScrollBar className='h-100'>
                                <WalletBalance />
                                <MenuList />
                            </ScrollBar>
                        </Col>
                        <Col md={3} style={{ height: "100%" }}>
                            <PurchaseHistory />
                        </Col>
                        <Col md={6} style={{ height: "100%" }}>
                            <Card className='order-details-card h-100'>
                                <CardHeader className='d-flex align-items-center justify-content-between'>
                                    <h1 className='mb-0'>Order Details - 20231105635099</h1>
                                    <div className='d-flex align-items-center gap-2'>
                                        <Button
                                            className="btn btn-success btn-sm"
                                        >
                                            <i className="ri-download-2-fill align-middle me-1"></i>{" "}
                                            Invoice
                                        </Button>
                                        <Button color='danger' className='btn-sm btn-danger'>
                                            <i className='ri  ri-emotion-unhappy-line align-middle me-1'></i>
                                            Ask Refund
                                        </Button>
                                        <Button
                                            className="btn btn-soft-danger material-shadow-none btn-sm mt-2 mt-sm-0"
                                        >
                                            <i className="mdi mdi-archive-remove-outline align-middle me-1"></i>{" "}
                                            Cancel Order
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardBody style={{ height: "100%" }} className='ps-0 pe-0 bg-body'>
                                    <ScrollBar>
                                        <ShippingAndBillingInfo />
                                        <OrderDetailsTable />
                                        <OrderStatus />
                                    </ScrollBar>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Copy
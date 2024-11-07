
import ScrollBar from 'react-perfect-scrollbar'
import { Badge, Card, CardBody, CardHeader } from 'reactstrap'

const PurchaseHistory = () => {
    return (
        <Card className='my-store-card h-100'>
            <CardHeader>
                <h1>Purchase History</h1>
            </CardHeader>
            <CardBody style={{ height: "100%" }}>
                <ScrollBar   >
                    <ul className='list-unstyled'>
                        <li>
                            <Card className='border-primary purchase-card mb-2'>
                                <CardHeader className='bg-body d-flex align-items-center justify-content-between'>
                                    <h2 className='mb-0'>Order#45</h2>
                                    <h5>
                                        <Badge color='warning'>Processing</Badge>
                                    </h5>
                                </CardHeader>

                                <CardBody className='bg-body'>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="flex-shrink-0">
                                            <p className="text-muted mb-0">Order date:</p>
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                            <h6 className="mb-0">13/10/2024</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="flex-shrink-0">
                                            <p className="text-muted mb-0">Delivery date:</p>
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                            <h6 className="mb-0">13/10/2024</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="flex-shrink-0">
                                            <p className="text-muted mb-0">Order Amount:</p>
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                            <h6 className="mb-0">45,00€</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="flex-shrink-0">
                                            <p className="text-muted mb-0">Grand Total:</p>
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                            <h6 className="mb-0">45,00€</h6>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </li>
                        <li>
                            <Card className='purchase-card mb-2 active'>
                                <CardHeader className='bg-body d-flex align-items-center justify-content-between'>
                                    <h2 className='mb-0'>Order#45</h2>
                                    <h5>
                                        <Badge color='success'>Complete</Badge>
                                    </h5>
                                </CardHeader>
                                <CardBody className='bg-body'>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="flex-shrink-0">
                                            <p className="text-muted mb-0">Order date:</p>
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                            <h6 className="mb-0">13/10/2024</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="flex-shrink-0">
                                            <p className="text-muted mb-0">Delivery date:</p>
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                            <h6 className="mb-0">13/10/2024</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="flex-shrink-0">
                                            <p className="text-muted mb-0">Order Amount:</p>
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                            <h6 className="mb-0">45,00€</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="flex-shrink-0">
                                            <p className="text-muted mb-0">Grand Total:</p>
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                            <h6 className="mb-0">45,00€</h6>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </li>

                        <li>
                            <Card className='purchase-card mb-2'>
                                <CardHeader className='bg-body d-flex align-items-center justify-content-between'>
                                    <h2 className='mb-0'>Order#45</h2>
                                    <Badge color='danger'>Refunded</Badge>
                                </CardHeader>

                                <CardBody className='bg-body'>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="flex-shrink-0">
                                            <p className="text-muted mb-0">Order date:</p>
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                            <h6 className="mb-0">13/10/2024</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="flex-shrink-0">
                                            <p className="text-muted mb-0">Delivery date:</p>
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                            <h6 className="mb-0">13/10/2024</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="flex-shrink-0">
                                            <p className="text-muted mb-0">Order Amount:</p>
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                            <h6 className="mb-0">45,00€</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="flex-shrink-0">
                                            <p className="text-muted mb-0">Grand Total:</p>
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                            <h6 className="mb-0">45,00€</h6>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </li>
                        <li>
                            <Card className='purchase-card mb-2'>
                                <CardHeader className='bg-body d-flex align-items-center justify-content-between'>
                                    <h2 className='mb-0'>Order#45</h2>
                                    <Badge color='danger'>Refunded</Badge>
                                </CardHeader>

                                <CardBody className='bg-body'>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="flex-shrink-0">
                                            <p className="text-muted mb-0">Order date:</p>
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                            <h6 className="mb-0">13/10/2024</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="flex-shrink-0">
                                            <p className="text-muted mb-0">Delivery date:</p>
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                            <h6 className="mb-0">13/10/2024</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="flex-shrink-0">
                                            <p className="text-muted mb-0">Order Amount:</p>
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                            <h6 className="mb-0">45,00€</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="flex-shrink-0">
                                            <p className="text-muted mb-0">Grand Total:</p>
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                            <h6 className="mb-0">45,00€</h6>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </li>
                        <li>
                            <Card className='purchase-card mb-2'>
                                <CardHeader className='bg-body d-flex align-items-center justify-content-between'>
                                    <h2 className='mb-0'>Order#45</h2>
                                    <Badge color='danger'>Refunded</Badge>
                                </CardHeader>

                                <CardBody className='bg-body'>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="flex-shrink-0">
                                            <p className="text-muted mb-0">Order date:</p>
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                            <h6 className="mb-0">13/10/2024</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="flex-shrink-0">
                                            <p className="text-muted mb-0">Delivery date:</p>
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                            <h6 className="mb-0">13/10/2024</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="flex-shrink-0">
                                            <p className="text-muted mb-0">Order Amount:</p>
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                            <h6 className="mb-0">45,00€</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="flex-shrink-0">
                                            <p className="text-muted mb-0">Grand Total:</p>
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                            <h6 className="mb-0">45,00€</h6>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </li>
                        <li>
                            <Card className='purchase-card mb-2'>
                                <CardHeader className='bg-body d-flex align-items-center justify-content-between'>
                                    <h2 className='mb-0'>Order#45</h2>
                                    <Badge color='danger'>Refunded</Badge>
                                </CardHeader>

                                <CardBody className='bg-body'>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="flex-shrink-0">
                                            <p className="text-muted mb-0">Order date:</p>
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                            <h6 className="mb-0">13/10/2024</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="flex-shrink-0">
                                            <p className="text-muted mb-0">Delivery date:</p>
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                            <h6 className="mb-0">13/10/2024</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="flex-shrink-0">
                                            <p className="text-muted mb-0">Order Amount:</p>
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                            <h6 className="mb-0">45,00€</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="flex-shrink-0">
                                            <p className="text-muted mb-0">Grand Total:</p>
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                            <h6 className="mb-0">45,00€</h6>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </li>
                        <li>
                            <Card className='purchase-card mb-2'>
                                <CardHeader className='bg-body d-flex align-items-center justify-content-between'>
                                    <h2 className='mb-0'>Order#45</h2>
                                    <Badge color='danger'>Refunded</Badge>
                                </CardHeader>

                                <CardBody className='bg-body'>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="flex-shrink-0">
                                            <p className="text-muted mb-0">Order date:</p>
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                            <h6 className="mb-0">13/10/2024</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="flex-shrink-0">
                                            <p className="text-muted mb-0">Delivery date:</p>
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                            <h6 className="mb-0">13/10/2024</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="flex-shrink-0">
                                            <p className="text-muted mb-0">Order Amount:</p>
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                            <h6 className="mb-0">45,00€</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="flex-shrink-0">
                                            <p className="text-muted mb-0">Grand Total:</p>
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                            <h6 className="mb-0">45,00€</h6>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </li>
                    </ul>
                </ScrollBar>
            </CardBody>
        </Card>
    )
}

export default PurchaseHistory
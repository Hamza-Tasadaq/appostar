
import { Badge, Card, CardBody, CardHeader } from 'reactstrap'

const PurchaseHistory = () => {
    return (
        <Card className='my-store-card'>
            <CardHeader>
                <h1>Purchase History</h1>
            </CardHeader>
            <CardBody>
                <ul className='list-unstyled'>
                    <li>
                        <Card className='purchase-card mb-2'>
                            <CardHeader className='d-flex align-items-center justify-content-between'>
                                <h2 className='mb-0'>Order#45</h2>
                                <Badge color='warning'>Processing</Badge>
                            </CardHeader>
                            <CardBody>
                                <ul className='list-unstyled'>
                                    <li className='d-flex align-items-center justify-content-between'>
                                        <h3>Order date</h3>
                                        <h3>13/10/2024</h3>
                                    </li>
                                    <li className='d-flex align-items-center justify-content-between'>
                                        <h3>Delivery date</h3>
                                        <h3>13/10/2024</h3>
                                    </li>
                                    <li className='d-flex align-items-center justify-content-between'>
                                        <h3>Order Amount</h3>
                                        <h3>45,00€</h3>
                                    </li>
                                    <li className='d-flex align-items-center justify-content-between'>
                                        <h3 className='grand-total'>Grand Total</h3>
                                        <h3 className='grand-total'>45,00€</h3>
                                    </li>
                                </ul>
                            </CardBody>
                        </Card>
                    </li>
                    <li>
                        <Card className='purchase-card mb-2'>
                            <CardHeader className='d-flex align-items-center justify-content-between'>
                                <h2 className='mb-0'>Order#45</h2>
                                <Badge color='success'>Complete</Badge>
                            </CardHeader>
                            <CardBody>
                                <ul className='list-unstyled'>
                                    <li className='d-flex align-items-center justify-content-between'>
                                        <h3>Order date</h3>
                                        <h3>13/10/2024</h3>
                                    </li>
                                    <li className='d-flex align-items-center justify-content-between'>
                                        <h3>Delivery date</h3>
                                        <h3>13/10/2024</h3>
                                    </li>
                                    <li className='d-flex align-items-center justify-content-between'>
                                        <h3>Order Amount</h3>
                                        <h3>45,00€</h3>
                                    </li>
                                    <li className='d-flex align-items-center justify-content-between'>
                                        <h3 className='grand-total'>Grand Total</h3>
                                        <h3 className='grand-total'>45,00€</h3>
                                    </li>
                                </ul>
                            </CardBody>
                        </Card>
                    </li>

                    <li>
                        <Card className='purchase-card mb-2'>
                            <CardHeader className='d-flex align-items-center justify-content-between'>
                                <h2 className='mb-0'>Order#45</h2>
                                <Badge color='danger'>Refunded</Badge>
                            </CardHeader>
                            <CardBody>
                                <ul className='list-unstyled'>
                                    <li className='d-flex align-items-center justify-content-between'>
                                        <h3>Order date</h3>
                                        <h3>13/10/2024</h3>
                                    </li>
                                    <li className='d-flex align-items-center justify-content-between'>
                                        <h3>Delivery date</h3>
                                        <h3>13/10/2024</h3>
                                    </li>
                                    <li className='d-flex align-items-center justify-content-between'>
                                        <h3>Order Amount</h3>
                                        <h3>45,00€</h3>
                                    </li>
                                    <li className='d-flex align-items-center justify-content-between'>
                                        <h3 className='grand-total'>Grand Total</h3>
                                        <h3 className='grand-total'>45,00€</h3>
                                    </li>
                                </ul>
                            </CardBody>
                        </Card>
                    </li>
                </ul>
            </CardBody>
        </Card>
    )
}

export default PurchaseHistory
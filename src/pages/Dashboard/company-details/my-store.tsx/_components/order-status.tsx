import { Badge, Card, CardBody } from 'reactstrap'

const OrderStatus = () => {
    return (
        <Card className='order-status-card'>
            <CardBody className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-3'>
                    <h3 className='mb-0'>Order Status</h3>
                    <Badge color='warning'>Processing</Badge>
                </div>
                <div className='d-flex align-items-center gap-3'>
                    <h3 className='mb-0'>Payment Status</h3>
                    <Badge color='success'>Paid</Badge>
                </div>
            </CardBody>
        </Card>
    )
}

export default OrderStatus
import React from 'react'
import { Card, CardBody } from 'reactstrap'

const DiscountGallery = () => {
    return (
        <div className='d-flex flex-column gap-3 h-100'>
            <Card className='mb-3 flex-grow-1'>
                <CardBody>
                    <img className='w-100 h-100' src="https://demo.fleetcart.envaysoft.com/storage/media/5siKhRlEDQFmbiJRwCNBW3rDsbG7m1r2PibvtNeF.png" alt="discount 1" />
                </CardBody>
            </Card>
            <Card className='mb-0 flex-grow-1'>
                <CardBody className='p-0'>
                    <img className='w-100 h-100' src="https://demo.fleetcart.envaysoft.com/storage/media/5siKhRlEDQFmbiJRwCNBW3rDsbG7m1r2PibvtNeF.png" alt="discount 2" />
                </CardBody>
            </Card>
        </div>
    )
}

export default DiscountGallery
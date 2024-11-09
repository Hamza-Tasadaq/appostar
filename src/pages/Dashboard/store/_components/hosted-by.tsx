import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'

const HostedBy = () => {
    return (
        <Card className='comapny-details-card hosted-by'>
            <CardHeader>
                <h1>Hosted By</h1>
            </CardHeader>
            <CardBody>
                <div className='d-flex align-items-center gap-3'>
                    <img src='https://townhub.kwst.net/images/avatar/5.jpg' alt='user' className='rounded-circle' />
                    <div className='flex-grow-1'>
                        <h2 className='mb-0'>Alisa Noory</h2>
                        <p className='mb-0'>4 places</p>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default HostedBy
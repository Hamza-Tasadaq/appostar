import React from 'react'
import { Card, CardBody } from 'reactstrap'

const Cover = () => {
    return (
        <Card className='comapny-details-card '>
            <CardBody className='p-0 overflow-hidden'>
                <img src="https://townhub.kwst.net/images/all/48.jpg" alt="cover" style={{ width: "100%", height: "100%" }} />
            </CardBody>
        </Card>
    )
}

export default Cover
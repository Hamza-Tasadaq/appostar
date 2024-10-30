import React from 'react'
import { Button, Card, CardBody, CardHeader } from 'reactstrap'

const Description = () => {
    return (
        <Card className='comapny-details-card '>
            <CardHeader>
                <h1>Description</h1>
            </CardHeader>
            <CardBody>
                <p>
                    Praesent eros turpis, commodo vel justo at, pulvinar mollis eros. Mauris aliquet eu quam id ornare. Morbi ac quam enim. Cras vitae nulla condimentum, semper dolor non, faucibus dolor. Vivamus adipiscing eros quis orci fringilla, sed pretium lectus viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec velit non odio aliquam suscipit. Sed non neque faucibus, condimentum lectus at, accumsan enim.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.
                </p>
                <Button color='primary' className='d-flex align-items-center'>
                    Visit Website
                    <i className='ri  ri-arrow-drop-right-line ms-2 fs-4'></i>
                </Button>
            </CardBody>
        </Card>
    )
}

export default Description
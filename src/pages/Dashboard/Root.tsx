import React from 'react'
import { Button, Container, Input, Row } from 'reactstrap'
import SimpleBar from 'simplebar-react'

const Root = () => {
    return (

        <React.Fragment>
            <div style={{ height: "100dvh" }} className="page-content no-padding-bottom-md no-padding-x overflow-x-hidden-md padding-top-large-sm">
                <Container style={{ height: "100%" }} fluid className='no-padding-x overflow-x-hidden-md'>
                    <Row style={{ height: "100%" }} >
                        <div className='d-flex align-items-center justify-content-center position-relative hero-wrapper'>
                            <img src='https://townhub.kwst.net/images/bg/hero/1.jpg' alt='hero1' />
                            <div className='position-relative p-3 hero-content d-flex flex-column align-items-center justify-content-center w-100' >
                                <div className='w-100'>
                                    <h1 className='text-center mb-3'>Explore Best Places in the City</h1>
                                    <p className='text-center'>
                                        Find some of the best tips from around the city from our partners and friends.
                                    </p>
                                </div>
                                <div className='list-items-wrapper mx-auto'>
                                    <SimpleBar style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <ul className='list-unstyled d-flex align-items-center justify-content-start gap-3'>
                                            <li className='active'>PLACES</li>
                                            <li className=''>EVENTS</li>
                                            <li className=''>RESTAURANTS</li>
                                            <li className=''>HOTELS</li>
                                        </ul>
                                    </SimpleBar>
                                </div>
                                <form className='d-flex align-items-center p-2 form-wrapper rounded'>
                                    <Input bsSize='lg' style={{ borderRadius: 0 }} placeholder='What are you looking for?' />
                                    <Input bsSize='lg' style={{ borderRadius: 0 }} placeholder='Location' />
                                    <Input bsSize='lg' style={{ borderRadius: 0 }} placeholder='All Categories' />
                                    <Button size='lg' color='primary'>
                                        <i className='ri  ri-search-2-line me-2'></i>Search
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Root
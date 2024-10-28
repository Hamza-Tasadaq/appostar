import classNames from 'classnames'
import React, { useState } from 'react'
import { Badge, Button, Container, Input, Row } from 'reactstrap'
import SimpleBar from 'simplebar-react'

const Root = () => {
    const [selectedCategory, setSelectedCategory] = useState("1")

    const toggleSelectedCategory = (selectedCategory: string) => {
        setSelectedCategory(selectedCategory)
    }
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
                                    {/* <SimpleBar style={{ display: "flex", alignItems: "center", justifyContent: "center" }}> */}
                                    <ul className='list-unstyled d-flex align-items-center justify-content-start gap-3'>
                                        <li onClick={() => {
                                            toggleSelectedCategory("1")
                                        }} className={classNames({
                                            active: selectedCategory === "1",
                                            'rounded-pill': selectedCategory === "1",
                                            'badge': selectedCategory === "1"
                                        })}>Places</li>
                                        <li onClick={() => {
                                            toggleSelectedCategory("2")
                                        }} className={classNames({
                                            active: selectedCategory === "2",
                                            'rounded-pill': selectedCategory === "2",
                                            'badge': selectedCategory === "2"
                                        })}>Events</li>
                                        <li onClick={() => {
                                            toggleSelectedCategory("3")
                                        }} className={classNames({
                                            active: selectedCategory === "3",
                                            'rounded-pill': selectedCategory === "3",
                                            'badge': selectedCategory === "3"
                                        })}>Restaurants</li>
                                        <li onClick={() => {
                                            toggleSelectedCategory("4")
                                        }} className={classNames({
                                            active: selectedCategory === "4",
                                            'rounded-pill': selectedCategory === "4",
                                            'badge': selectedCategory === "4"
                                        })}>Hotels</li>
                                    </ul>
                                    {/* </SimpleBar> */}
                                </div>
                                <form style={{ zIndex: 0 }} className='d-flex position-relative flex-column flex-lg-row align-items-center p-2 form-wrapper rounded'>
                                    <Input
                                        bsSize='lg'
                                        style={{ borderRadius: 0 }}
                                        placeholder='What are you looking for?'
                                        className='w-100 w-lg-auto'
                                    />
                                    <Input
                                        bsSize='lg'
                                        style={{ borderRadius: 0 }}
                                        placeholder='Location'
                                        className='w-100 w-lg-auto'
                                    />
                                    <Input
                                        bsSize='lg'
                                        style={{ borderRadius: 0 }}
                                        placeholder='All Categories'
                                        className='w-100 w-lg-auto'
                                    />
                                    <Button size='lg' color='primary' className='w-100 w-lg-auto'>
                                        <i className='ri ri-search-2-line me-2'></i>Search
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
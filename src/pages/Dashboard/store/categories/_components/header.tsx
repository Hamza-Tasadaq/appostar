import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, Col, Row } from 'reactstrap'

const Header = () => {
    const navigate = useNavigate()
    return (

        <Card>
            <CardBody>
                <Row>
                    <Col sm={6}>
                        <Button onClick={() => {
                            navigate(-1)
                        }} color='link' className='d-flex align-items-center gap-2'>
                            <i className='ri text-primary  ri-arrow-left-line fs-4'></i>
                            <h5 className='mb-0'>Category Name</h5>
                        </Button>
                    </Col>
                    <Col sm={6} className='d-flex align-items-center justify-content-end'>
                        <div className="input-light">
                            <select
                                className="form-control"
                                data-choices
                                data-choices-search-false
                                name="choices-single-default"
                                id="idStatus"
                                defaultValue="Newest"
                            >
                                <option value="All">Latest</option>
                                <option value="Newest" defaultValue=''>
                                    Newest
                                </option>
                                <option value="Popluar">Popluar</option>
                                <option value="Oldest">Oldest</option>
                            </select>
                        </div>

                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

export default Header
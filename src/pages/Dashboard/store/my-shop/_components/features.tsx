import classNames from 'classnames';
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap';
const tileBoxs2 = [
    {
        id: 1,
        label: "24/7 Support",
        description: "Support Every time",
        icon: "ri-headphone-line",
    },
    {
        id: 2,
        label: "30 Days Return",
        description: "30 days guarantee",
        icon: "ri-refresh-line",
    },
    {
        id: 3,
        label: "Free Shipping",
        description: "Order Over $100",
        icon: "ri-ship-2-line",
    }
];

const Features = () => {
    return (
        <Row className='d-flex align-items-center justify-content-center'>
            <Col xl={10}>
                <Card className="crm-widget">
                    <CardBody className="p-0">
                        <Row className="row-cols-md-3 row-cols-1">
                            {(tileBoxs2 || []).map((item, key) => (
                                <Col className={classNames("d-flex align-items-center justify-content-center col-lg border-end")} key={key}>
                                    <div className="mt-3 mt-md-0 py-4 px-3">
                                        <h5 className="text-muted text-uppercase fs-13">{item?.description}</h5>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <i className={"display-6 text-primary " + item?.icon}></i>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h2 className="mb-0">{item?.label}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </Col>))}
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Row>

    )
}

export default Features
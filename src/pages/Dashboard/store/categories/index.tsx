import React from "react"
import { Col, Row } from "reactstrap"
import Filters from "./_components/filters"
import ProductLists from "./_components/product-lists"
import Header from "./_components/header"


const Categories = () => {
    return (
        <React.Fragment>
            <div className="page-content no-padding-bottom-md no-padding-x overflow-x-hidden-md padding-top-small-sm">
                <Row className='mb-3'>
                    <Col sm={3}>
                        <Filters />
                    </Col>
                    <Col sm={9}>
                        <Header />
                        <ProductLists />
                    </Col>
                </Row>

            </div>
        </React.Fragment>
    )
}

export default Categories
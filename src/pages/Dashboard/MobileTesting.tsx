import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import TabsAndContent from 'Components/profile/TabsAndContent';
import ProfileTabs from 'Components/profile/ProfileTabs';

const MobileTesting = () => {
    return (
        <React.Fragment>
            <div className="page-content" style={{
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: "70px",
                overflow: "hidden"
            }}>
                <Container fluid style={{
                    paddingLeft: 0,
                    paddingRight: 0
                }}>
                    <Row>
                        <Col xxl={3}>
                            <ProfileTabs />
                        </Col>
                        <Col xxl={9}>
                            <TabsAndContent />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default MobileTesting
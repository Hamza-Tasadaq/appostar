import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import TabsAndContent from 'Components/profile/TabsAndContent';
import ProfileTabs from 'Components/profile/ProfileTabs';

const Profile = () => {
    return (
        <React.Fragment>
            <div className="page-content no-padding-bottom-md no-padding-x overflow-x-hidden-md padding-top-large-sm">
                <Container fluid className='no-padding-x overflow-x-hidden-md'>
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

export default Profile
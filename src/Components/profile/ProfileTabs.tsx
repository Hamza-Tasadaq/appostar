import classNames from 'classnames'
import { useState } from 'react'
import { Card, CardBody, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap'
import UserDetails from './UserDetails'
import Settings from './Settings'
import Security from './Security'
import UserMetaInfo from './UserMetaInfo'

const ProfileTabs = () => {
    const [activeTab, setactiveTab] = useState<string>("1");
    const toggle = (tab: any) => {
        if (activeTab !== tab) {
            setactiveTab(tab);
        }
    };

    return (
        <Card>
            <CardBody>
                <Nav tabs className="nav nav-tabs nav-justified mb-3">
                    <NavItem>
                        <NavLink style={{ cursor: "pointer" }} className={classNames({ active: activeTab === "1", })} onClick={() => { toggle("1"); }} >
                            Details
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ cursor: "pointer" }} className={classNames({ active: activeTab === "2", })} onClick={() => { toggle("2"); }} >
                            Settings
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ cursor: "pointer" }} className={classNames({ active: activeTab === "3", })} onClick={() => { toggle("3"); }} >
                            Security
                        </NavLink>
                    </NavItem>
                    <NavItem className="flex-grow-0">
                        <NavLink style={{ cursor: "pointer" }} className={classNames("w-auto", { active: activeTab === "4", })} onClick={() => { toggle("4"); }} >
                            <i className='ri  ri-qr-code-line fs-4'></i>
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab} className="text-muted" >
                    <TabPane tabId="1" id="details">
                        <UserDetails />
                    </TabPane>
                    <TabPane tabId="2" id="settings">
                        <Settings />
                    </TabPane>
                    <TabPane tabId="3" id="security">
                        <Security />
                    </TabPane>
                    <TabPane tabId="4" id="qr-code">
                        <div id="teamlist">
                            <Row className="team-list grid-view-filter">
                                <UserMetaInfo>
                                    <>
                                        <div className='d-flex align-items-center justify-content-center'>
                                            <img src='https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg' alt='qr-code' />
                                        </div>
                                    </>
                                </UserMetaInfo>
                            </Row>
                        </div>
                    </TabPane>
                </TabContent>
            </CardBody>
        </Card>
    )
}

export default ProfileTabs
import classNames from 'classnames';
import { useState } from 'react'
import { Button, Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import CompaniesTab from './CompaniesTab';
import InvitationsTab from './InvitationsTab';

const TabsAndContent = () => {
    const [currentTab, setCurrentTab] = useState<string>("1");
    const toggleCurrentTab = (tab: any) => {
        if (currentTab !== tab) {
            setCurrentTab(tab);
        }
    };

    return (
        <div>
            <div className='mb-3 d-md-none ms-3 me-3'>
                <Button color='primary' className='w-100 ' onClick={() => { }}>
                    <i className="ri-add-fill me-1 align-bottom"></i> Add a Company
                </Button>
            </div>
            <Card>
                <CardBody>
                    <Nav color='primary' tabs className="nav nav-tabs nav-justified nav-border-top mb-3">
                        <NavItem>
                            <NavLink style={{ cursor: "pointer" }} className={classNames({ active: currentTab === "1", })} onClick={() => { toggleCurrentTab("1"); }} >
                                <i className="ri-home-5-line align-middle me-1 fs-4"></i> Companies
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{ cursor: "pointer" }} className={classNames({ active: currentTab === "2", })} onClick={() => { toggleCurrentTab("2"); }} >
                                <i className="ri-user-line me-1 align-middle fs-4"></i> Invitations
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={currentTab} className="text-muted">
                        <TabPane tabId="1" id="nav-border-justified-home">
                            <CompaniesTab />
                        </TabPane>
                        <TabPane tabId="2" id="nav-border-justified-invitations">
                            <InvitationsTab />
                        </TabPane>
                    </TabContent>
                </CardBody>
            </Card>
        </div>
    )
}

export default TabsAndContent
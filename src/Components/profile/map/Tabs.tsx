import classNames from 'classnames';
import { useState } from 'react'
import { Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import Filters from './Filters';
import Map from './map';

const Tabs = () => {
    const [currentTab, setCurrentTab] = useState<string>("1");
    const toggleCurrentTab = (tab: any) => {
        if (currentTab !== tab) {
            setCurrentTab(tab);
        }
    };
    return (
        <Card >
            <CardBody>
                <Nav color='primary' tabs className="nav nav-tabs nav-justified nav-border-top mb-3">
                    <NavItem>
                        <NavLink style={{ cursor: "pointer" }} className={classNames({ active: currentTab === "1", })} onClick={() => { toggleCurrentTab("1"); }} >
                            Filters
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ cursor: "pointer" }} className={classNames({ active: currentTab === "2", })} onClick={() => { toggleCurrentTab("2"); }} >
                            View on Map
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={currentTab} className="text-muted">
                    <TabPane tabId="1" id="nav-border-justified-home">
                        <Filters />
                    </TabPane>
                    <TabPane tabId="2" style={{ background: "orange" }} id="nav-border-justified-invitations">
                        <Map />
                    </TabPane>
                </TabContent>
            </CardBody>
        </Card>
    )
}

export default Tabs
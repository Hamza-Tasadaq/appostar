import classNames from 'classnames';
import { useState } from 'react'
import { Button, Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
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
        <>

            <div className='position-relative'>
                {
                    currentTab === "2"
                        ?
                        <div className='position-relative' style={{
                            zIndex: 0
                        }}>
                            <Map />
                        </div>
                        : null
                }
                {
                    currentTab === "1"
                        ?
                        <Filters /> : null
                }
                <div className='position-absolute w-100 d-flex align-items-center justify-content-center' style={{
                    bottom: "8px",
                    zIndex: 10
                }}>
                    <Button className='rounded-pill' onClick={() => { toggleCurrentTab(currentTab === "1" ? "2" : "1"); }}>
                        {
                            currentTab === "1" ? "Show Map" : "Show Filter"
                        }
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Tabs










{/* <Card >
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
</Card> */}
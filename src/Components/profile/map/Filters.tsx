import { getAddressFromCordinates } from 'actions';
import classNames from 'classnames';
import { useMapState } from 'pages/Dashboard/NewMap';
import { useState } from 'react'
import { Card, CardBody, Input, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';



const Filters = () => {
    const { setAddressCords, address, setAddress } = useMapState();

    const [activeTab, setactiveTab] = useState<string>("1");
    const toggle = (tab: any) => {
        if (activeTab !== tab) {
            setactiveTab(tab);
        }
    };




    const handleGetCurrentAddress = async () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                setAddressCords([position?.coords?.latitude, position?.coords?.longitude])
                const response = await getAddressFromCordinates(position?.coords?.latitude, position?.coords?.longitude)
                setAddress(response)
            })
        }
    }
    return (
        <Card>
            <CardBody>
                <Nav tabs className="nav nav-tabs nav-justified mb-3">
                    <NavItem>
                        <NavLink style={{ cursor: "pointer" }} className={classNames({ active: activeTab === "1", })} onClick={() => { toggle("1"); }} >
                            Location
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ cursor: "pointer" }} className={classNames({ active: activeTab === "2", })} onClick={() => { toggle("2"); }} >
                            Categories
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab} className="text-muted" >
                    <TabPane tabId="1" id="location">

                        <div className='mb-2 d-flex gap-1'>
                            <button
                                //  onClick={
                                //     () => {
                                //     setShowQrCode(true)
                                // }
                                // }
                                style={{
                                    width: "48px",
                                    height: "38px"
                                }} className='btn  btn-success p-0'>
                                <i className='ri  ri-qr-scan-2-line fs-3'></i>
                            </button>
                            <Input className="form-control flex-grow-1 form-control-icon" id="search" onChange={(e) => { setAddress(e?.target?.value) }} value={address} placeholder='Search' />
                            <button onClick={handleGetCurrentAddress} style={{
                                width: "48px",
                                height: "38px"
                            }} className='btn  btn-success p-0'>
                                <i className='ri ri-crosshair-2-line fs-3'></i>
                            </button>
                        </div>
                    </TabPane>
                    <TabPane tabId="2" id="categories">
                        Categories
                    </TabPane>
                </TabContent>
            </CardBody>
        </Card>
    )
}

export default Filters
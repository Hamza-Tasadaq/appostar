import { useState } from 'react'
import { Button } from 'reactstrap';
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
                        <Map />
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
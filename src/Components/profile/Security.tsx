
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Row } from 'reactstrap'
import DeleteProfile from './DeleteProfile'
import { useState } from 'react';
import UserMetaInfo from './UserMetaInfo';
import Password from './Password';
import PassKey from './PassKey';
import TwoFA from './TwoFA';
import VerifiedDevices from './VerifiedDevices';

const Security = () => {
    // Accordions with Icons
    const [openedAccordion, setOpenedAccordion] = useState('');
    const toggleOpenedAccordion = (id: any) => {
        if (openedAccordion !== id) {
            setOpenedAccordion(id);
        } else {
            setOpenedAccordion("")
        }
    };
    return (
        <div id="teamlist">
            <Row className="team-list grid-view-filter">
                <UserMetaInfo>
                    <>
                        <Accordion className="custom-accordionwithicons accordion-secondarys mb-2" id="accordionWithicon" open={openedAccordion} toggle={toggleOpenedAccordion}>
                            <AccordionItem className='border-0 material-shadow'>
                                <AccordionHeader targetId="1"><i className="ri-global-line me-2"></i> Password</AccordionHeader>
                                <AccordionBody accordionId="1">
                                    <Password />
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className='border-0 material-shadow'>
                                <AccordionHeader targetId="2"><i className="ri-user-location-line me-2"></i>Passkey</AccordionHeader>
                                <AccordionBody accordionId="2">
                                    <PassKey />
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className='border-0 material-shadow'>
                                <AccordionHeader targetId="3"><i className="ri-user-location-line me-2"></i>2FA</AccordionHeader>
                                <AccordionBody accordionId="3">
                                    <TwoFA />
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className='border-0 material-shadow'>
                                <AccordionHeader targetId="4"><i className="ri-user-location-line me-2"></i>Verified Devices</AccordionHeader>
                                <AccordionBody accordionId="4">
                                    <VerifiedDevices />
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion>
                        <Col className='px-4'>
                            <DeleteProfile />
                        </Col>
                    </>
                </UserMetaInfo>
            </Row>
        </div>

    )
}

export default Security
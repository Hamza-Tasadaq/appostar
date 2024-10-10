import { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Input, Label, Row } from 'reactstrap'
import FirstNameInput from './FirstNameInput'
import UserMetaInfo from './UserMetaInfo'

const UserDetails = () => {
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
                    <Accordion className="custom-accordionwithicons accordion-secondarys" id="accordionWithicon" open={openedAccordion} toggle={toggleOpenedAccordion}>
                        <AccordionItem className='border-0 material-shadow'>
                            <AccordionHeader targetId="1"><i className="ri-global-line me-2"></i> Personal Info</AccordionHeader>
                            <AccordionBody accordionId="1">
                                <Col className='mb-4'>
                                    <FirstNameInput />
                                    <div className='mb-2'>
                                        <Label htmlFor="lastName" className="form-label">Last Name</Label>
                                        <Input className="form-control" id="lastName" placeholder='Last Name' />
                                    </div>
                                    <div className='mb-2'>
                                        <Label htmlFor="bio" className="form-label">Bio</Label>
                                        <textarea className="form-control" id="bio" placeholder='Bio' rows={5} />
                                    </div>
                                    <div className='mb-2'>
                                        <Label htmlFor="email" className="form-label">Email</Label>
                                        <div className='form-icon'>
                                            <Input type='email' className="form-control form-control-icon" id="email" placeholder='Email' />
                                            <i className='ri-mail-unread-line'></i>
                                        </div>
                                    </div>
                                    <div className='mb-2'>
                                        <Label htmlFor="phone" className="form-label">Phone Number</Label>
                                        <div className='form-icon'>
                                            <Input type='number' className="form-control form-control-icon" id="phone" placeholder='03198184884' />
                                            <i className=' ri-phone-line'></i>
                                        </div>
                                    </div>
                                </Col>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem className='border-0 material-shadow'>
                            <AccordionHeader targetId="2"><i className="ri-user-location-line me-2"></i>Social</AccordionHeader>
                            <AccordionBody accordionId="2">

                                <Col className='mb-4'>
                                    <div className='mb-2'>
                                        <Label htmlFor="facebook" className="form-label">Facebook</Label>
                                        <div className='form-icon'>
                                            <Input className="form-control form-control-icon" id="facebook" placeholder='Facebook' />
                                            <i className=' ri-facebook-line'></i>
                                        </div>
                                    </div>
                                    <div className='mb-2'>
                                        <Label htmlFor="instagram" className="form-label">Instagram</Label>
                                        <div className='form-icon'>
                                            <Input className="form-control form-control-icon" id="instagram" placeholder='Instagram' />
                                            <i className=' ri-instagram-line'></i>
                                        </div>
                                    </div>
                                    <div className='mb-2'>
                                        <Label htmlFor="linkedIn" className="form-label">Linkedin</Label>
                                        <div className='form-icon'>
                                            <Input className="form-control form-control-icon" id="linkedIn" placeholder='Linkedin' />
                                            <i className=' ri-linkedin-line'></i>
                                        </div>
                                    </div>
                                    <div className='mb-2'>
                                        <Label htmlFor="x" className="form-label">X</Label>
                                        {/* <div className='form-icon'> */}
                                        <Input className="form-control form-control-icon" id="x" placeholder='x' />
                                        {/* <i className=' ri-x-line'></i> */}
                                        {/* </div> */}
                                    </div>
                                    <div className='mb-2'>
                                        <Label htmlFor="youtube" className="form-label">Youtube</Label>
                                        <div className='form-icon'>
                                            <Input className="form-control form-control-icon" id="youtube" placeholder='Youtube' />
                                            <i className=' ri-youtube-line'></i>
                                        </div>
                                    </div>
                                    <div className='mb-2'>
                                        <Label htmlFor="github" className="form-label">Github</Label>
                                        <div className='form-icon'>
                                            <Input className="form-control form-control-icon" id="github" placeholder='Github' />
                                            <i className=' ri-github-line'></i>
                                        </div>
                                    </div>
                                </Col>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </UserMetaInfo>
            </Row>
        </div>

    )
}

export default UserDetails
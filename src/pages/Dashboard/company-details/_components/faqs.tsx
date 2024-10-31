import { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Card, CardBody, CardHeader } from 'reactstrap';

const Faqs = () => {
    const [openAccordion, setOpenAccordion] = useState('1');
    const toggleAccordion = (id: any) => {
        if (openAccordion !== id) {
            setOpenAccordion(id);
        }
    };

    return (

        <Card className='comapny-details-card'>

            <CardHeader>
                <h1>Faqs</h1>
            </CardHeader>
            <CardBody>
                <Accordion className="custom-accordionwithicon custom-accordion-border accordion-border-box accordion-primary" id="accordionBordered" open={openAccordion} toggle={toggleAccordion}>
                    <AccordionItem className='material-shadow'>
                        <AccordionHeader targetId="1">Crossfit?</AccordionHeader>
                        <AccordionBody accordionId="1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem className='material-shadow'>
                        <AccordionHeader targetId="2">Fitness?</AccordionHeader>
                        <AccordionBody accordionId="2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.

                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem className='material-shadow'>
                        <AccordionHeader targetId="3">TRX?</AccordionHeader>
                        <AccordionBody accordionId="3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.

                        </AccordionBody>
                    </AccordionItem>
                </Accordion>

            </CardBody>

        </Card>
    )
}

export default Faqs

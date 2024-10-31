import { Dispatch, SetStateAction, useState } from 'react'
import { Carousel, CarouselControl, CarouselItem, Modal, ModalBody, ModalHeader } from 'reactstrap'

interface GalleryDialogProps {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}


const items = [
    {
        src: 'https://picsum.photos/id/123/1200/400',
        altText: 'Slide 1',
        caption: 'Slide 1',
        key: 1,
    },
    {
        src: 'https://picsum.photos/id/456/1200/400',
        altText: 'Slide 2',
        caption: 'Slide 2',
        key: 2,
    },
    {
        src: 'https://picsum.photos/id/678/1200/400',
        altText: 'Slide 3',
        caption: 'Slide 3',
        key: 3,
    },
];

const GalleryDialog = ({ setOpen, open }: GalleryDialogProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    return (
        <div className='gallery-modal'>
            <Modal isOpen={open} toggle={() => setOpen((open) => !open)} fullscreen contentClassName={"gallery-modal-content"}            >
                <ModalHeader toggle={() => setOpen((open) => !open)}></ModalHeader>
                <ModalBody className='d-flex align-items-center justify-content-center d-flex-column'>
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                        interval={90000}
                    >
                        {
                            items.map((item) => {
                                return (
                                    <CarouselItem
                                        onExiting={() => setAnimating(true)}
                                        onExited={() => setAnimating(false)}
                                        key={item.src}
                                    >
                                        <img src={item.src} alt={item.altText} />

                                    </CarouselItem>
                                );
                            })
                        }
                        <CarouselControl
                            direction="prev"
                            directionText="Previous"
                            onClickHandler={previous}
                        />
                        <CarouselControl
                            direction="next"
                            directionText="Next"
                            onClickHandler={next}
                        />
                    </Carousel>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default GalleryDialog
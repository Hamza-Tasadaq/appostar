import React, { Suspense, useState } from 'react'
import { Tooltip } from 'reactstrap'

const Gallery = React.lazy(() => import('./Gallery'));

interface OpenGalleryProps {
    position: number
}

const OpenGallery = ({ position }: OpenGalleryProps) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggleTooltip = () => {
        setTooltipOpen(!tooltipOpen);
    };


    const [openGallery, setOpenGallery] = useState<boolean>(false);
    return (
        <>
            {
                openGallery &&
                <Suspense fallback={<></>}>
                    <Gallery open={openGallery} setOpen={setOpenGallery} />
                </Suspense>
            }
            <li onClick={() => setOpenGallery(true)} id={`openGalleryToolTip${position}`}>
                {/* <Button onClick={() => setOpenGallery(true)} className='btn btn-icon btn-topbar btn-ghost-secondarys rounded-circle'> */}
                <i className='ri ri-zoom-in-line fs-5' ></i>
                {/* </Button> */}
            </li>
            <Tooltip
                isOpen={tooltipOpen}
                target={`openGalleryToolTip${position}`}
                toggle={toggleTooltip}
                placement="top"
                innerClassName='tooltip-bg-primary'
            >
                Open Gallery
            </Tooltip>
        </>
    )
}

export default OpenGallery
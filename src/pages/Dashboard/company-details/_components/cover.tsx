import { Suspense, useState } from 'react'
import { Card, CardBody } from 'reactstrap'
import VideoPlayerDialog from './video-player-dialog'

const Cover = () => {
    const [openVideoPlayer, setOpenVideoPlayer] = useState(false)
    return (
        <>
            {
                openVideoPlayer &&
                <Suspense fallback={<></>}>
                    <VideoPlayerDialog open={openVideoPlayer} setOpen={setOpenVideoPlayer} />
                </Suspense>
            }
            <Card className='comapny-details-card cover-card'>
                <CardBody className='p-0 overflow-hidden position-relative'>
                    <video
                        width="100%"
                        height="auto"
                        controls
                        // style={{ maxWidth: ' margin: "0 auto" }}
                        style={{ objectFit: "cover" }}
                        className='rounded'
                    >
                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </CardBody>
            </Card>
        </>
    )
}

export default Cover
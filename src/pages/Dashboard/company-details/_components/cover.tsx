import { Suspense, useState } from 'react'
import { Button, Card, CardBody } from 'reactstrap'
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
                    <img src="https://townhub.kwst.net/images/all/48.jpg" className='rounded' alt="cover" />
                    <Button onClick={() => {
                        setOpenVideoPlayer(true)
                    }} className='position-absolute rounded-pill' color='primary'>
                        <i className='ri  ri-play-circle-line me-2'></i>
                        Promo
                    </Button>
                </CardBody>
            </Card>
        </>
    )
}

export default Cover
import { Dispatch, SetStateAction } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

interface VideoPlayerDialogProps {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}


const VideoPlayerDialog = ({ setOpen, open }: VideoPlayerDialogProps) => {
    return (
        <div className='video-player-modal'>
            <Modal isOpen={open} toggle={() => setOpen((open) => !open)} fullscreen contentClassName={"video-player-modal-content"}            >
                <ModalHeader toggle={() => setOpen((open) => !open)}></ModalHeader>
                <ModalBody className='d-flex align-items-center justify-content-center d-flex-column p-0'>
                    <video
                        width="100%"
                        height="auto"
                        controls
                        style={{ maxWidth: '800px', margin: "0 auto" }}
                    >
                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default VideoPlayerDialog
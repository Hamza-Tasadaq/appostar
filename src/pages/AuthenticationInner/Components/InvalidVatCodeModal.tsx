import { Dispatch, SetStateAction } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

interface InvalidateVatCodeModalProps {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
    setShowForm: Dispatch<SetStateAction<boolean>>
}


const InvalidVatCodeModal = ({ open, setOpen, setShowForm }: InvalidateVatCodeModalProps) => {
    return (
        <Modal
            isOpen={open}
            toggle={() => {
                setOpen(open => !open);
            }}
            centered
        >
            <ModalHeader className="modal-title" />

            <ModalBody className="text-center p-5">
                <i className="ri-thumb-down-line display-5 text-danger"></i>
                <div className="mt-4">
                    <h4 className="mb-3">Oops Inavlid Vat Code!</h4>
                    <p className="text-muted mb-4"> The vat code you enter wasn't correct. Do you want to add the fields manually?</p>
                    <div className="hstack gap-2 justify-content-center">
                        <button className="btn btn-light" onClick={() => setOpen((open) => !open)}>No</button>
                        <button onClick={() => {
                            setShowForm(true)
                            setOpen(false)
                        }} className="btn btn-danger">Yes</button>
                    </div>
                </div>
            </ModalBody>
        </Modal>
    )
}

export default InvalidVatCodeModal
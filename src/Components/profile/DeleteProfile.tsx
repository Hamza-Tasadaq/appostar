
import { Alert, Input, Label } from 'reactstrap'

const DeleteProfile = () => {
    return (
        <>
            <h5 className="mb-4">Delete Account?</h5>
            <Alert color="danger" className='material-shadow mb-2  d-flex gap-2 mb-0'>
                <Input id="delete-checkbox" type="checkbox" />
                <Label for="delete-checkbox">
                    I confirm that I want to <strong>delete</strong> my account
                </Label>
            </Alert>
            <button className='btn btn-danger w-100'>Yes, Delete my account</button>
        </>
    )
}

export default DeleteProfile
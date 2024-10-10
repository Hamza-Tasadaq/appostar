import { Button, Label } from "reactstrap"

const VerifiedDevices = () => {
    return (
        <div>

            <div className='mb-2'>
                <Label htmlFor="deviceName" className="form-label">Device Name</Label>
                <h5 className='flex-grow-1'>Iphone 16 pro Max</h5>
            </div>

            <div className='d-flex mb-2'>
                <div className="flex-grow-1">
                    <Label htmlFor="lasrAccess" className="form-label">Last Access</Label>
                    <h5 className='flex-grow-1'>{new Date()?.toLocaleTimeString()}</h5>
                </div>
                <Button color='danger' className="btn btn-icon fs-10 active filter-button material-shadow-none"><i className="icon ri-link-unlink-m fs-4"></i></Button>

            </div>
        </div>
    )
}

export default VerifiedDevices
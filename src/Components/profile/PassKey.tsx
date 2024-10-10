
import { Input, Label } from 'reactstrap'

const PassKey = () => {
    return (
        <div>
            <Input id="passkey-checkbox" className='me-2' type="checkbox" />
            <Label for="passkey-checkbox">
                Use the passkey to access your devices more quickly
            </Label>
        </div>
    )
}

export default PassKey
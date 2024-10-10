import { Input, Label } from 'reactstrap'

const TwoFA = () => {
    return (
        <div>
            <Input id="twoFactor-checkbox" className='me-2' type="checkbox" />
            <Label for="twoFactor-checkbox">
                Enable Two Factor authentication
            </Label>
        </div>
    )
}

export default TwoFA
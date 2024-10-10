import classNames from 'classnames'
import { useState } from 'react'
import { Input, Label } from 'reactstrap'

const FirstNameInput = () => {
    const [edit, setEdit] = useState(false)
    const [label, setLabel] = useState("Ezio")

    const [showPermissions, setShowPermissions] = useState(false)

    const [selectedOne, setSelectedOne] = useState<string[]>([])

    return (
        <div className='mb-2'>
            <Label htmlFor="firstName" className="form-label">First Name</Label>
            <div className='d-flex gap-2 align-items-center hover-container'>
                {
                    edit ?
                        <Input
                            value={label}
                            onChange={(e) => setLabel(e?.target?.value)}
                            className="form-control"
                            id="firstName"
                            placeholder='First Name'
                        />
                        :
                        <h5 className='flex-grow-1'>{label}</h5>
                }
                <button
                    color='danger'
                    onClick={() => setShowPermissions((showPermissions) => !showPermissions)}
                    className={classNames('btn', 'btn-icon', 'rounded-circle', 'btn-sm', 'favourite-btn'
                        , {
                            'lock-button': !showPermissions,
                        },
                        {
                            'btn-danger': !selectedOne?.length
                        }, {
                        'btn-success': selectedOne?.length
                    }
                    )}
                >
                    {
                        selectedOne?.length ?

                            <i className='ri-lock-unlock-line fs-14'></i>
                            :
                            <i className='ri-lock-2-line fs-14'></i>
                    }
                </button>
                <button
                    onClick={() => setEdit((edit) => !edit)}
                    className={classNames('btn', 'btn-light', 'btn-icon', 'rounded-circle', 'btn-sm', 'favourite-btn', {
                        'edit-button': !edit,
                    })}
                >
                    {
                        edit ? <i className='ri-check-line fs-14'></i> :
                            <i className=' ri-edit-2-fill fs-14'></i>
                    }
                </button>
            </div>
            {
                showPermissions && <div>
                    <h6>This field can be seen by:</h6>
                    {[
                        {
                            "id": 1,
                            "label": "All My Contacts",
                            "description": "Visible to all your contacts within your network."
                        },
                        {
                            "id": 2,
                            "label": "Admins of Companies I Collaborate With",
                            "description": "Visible to the admins of the companies you actively collaborate with on projects or tasks."
                        },
                        {
                            "id": 3,
                            "label": "Companies I Collaborate With",
                            "description": "Visible to the users of the companies you actively collaborate with on projects or tasks."
                        },
                        {
                            "id": 4,
                            "label": "Admin of Companies I Am in Contact With",
                            "description": "Visible to the admin of the companies where you are a contact."
                        },
                        {
                            "id": 5,
                            "label": "Companies I Am in Contact With",
                            "description": "Visible to the users of the companies where you are a contact."
                        }
                    ]?.map((permission) => <div key={permission?.id} className='mb-1'>
                        <Input type='checkbox' onChange={(e) => {
                            if (e?.target?.checked) {
                                setSelectedOne((selectedOne) => [...selectedOne, permission?.id?.toString()])
                            } else {
                                setSelectedOne((selectedOne) => selectedOne?.filter((selected) => selected !== permission?.id?.toString()))
                            }
                        }}
                            checked={selectedOne?.includes(permission?.id?.toString())}
                            id={permission?.id?.toString()} className='me-2' />
                        <Label htmlFor={permission?.id?.toString()} className="form-label">{permission?.label}</Label>
                    </div>)}
                </div>
            }
        </div>


    )
}

export default FirstNameInput
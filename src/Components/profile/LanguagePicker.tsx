import { country } from 'common/data'
import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Label } from 'reactstrap'
import SimpleBar from 'simplebar-react'

const LanguagePicker = () => {
    const [showDropdown, setShowDropdown] = useState(false)
    const [selectedLanguage, setSelectedLanguage] = useState("")
    return (
        <div className='mb-2'>
            <Label htmlFor="language" className="form-label">Language</Label>
            <Dropdown isOpen={showDropdown} toggle={() => { setShowDropdown((showDropdown) => !showDropdown) }}>
                <DropdownToggle
                    tag="div"
                    className="form-control rounded-end flag-input form-select"
                    style={{ cursor: 'pointer' }}
                >
                    {selectedLanguage || 'Select language'}
                </DropdownToggle>
                <DropdownMenu as='ul' className="list-unstyled w-100 dropdown-menu-list mb-0">
                    <SimpleBar style={{ maxHeight: "220px" }} className="px-3">
                        {(country || []).map((item, key) => (
                            <DropdownItem as='li' onClick={() => {
                                setSelectedLanguage(item?.countryName)
                            }} key={key} className="dropdown-item d-flex">
                                <div className="flex-shrink-0 me-2">
                                    <img src={item.flagImg} alt={item?.countryCode} className="options-flagimg" height="20" />
                                </div>
                                <div className="flex-grow-1">
                                    <div className="d-flex">
                                        <div className="country-name me-1">{item.countryName}</div>
                                        <span className="countrylist-codeno text-muted">{item.countryCode}</span>
                                    </div>
                                </div>
                            </DropdownItem>
                        ))}
                    </SimpleBar>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default LanguagePicker
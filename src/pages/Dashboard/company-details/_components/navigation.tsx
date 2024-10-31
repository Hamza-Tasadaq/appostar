import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {

    return (
        <ul className='list-unstyled m-0 d-none d-flex align-items-center gap-4'>
            <li>
                <Link to={""} >
                    <i className='ri me-1 ri-home-line fs-4'></i>
                    Home
                </Link>
            </li>
            <li>
                <Link to={""}>
                    <i className='ri me-1 ri-chat-3-line fs-4'></i>
                    Review
                </Link>
            </li>
            <li>
                <Link to={""}>
                    <i className='ri me-1 ri-chat-3-line fs-4'></i>Chat
                </Link>
            </li>
        </ul>

    )
}

export default Navigation
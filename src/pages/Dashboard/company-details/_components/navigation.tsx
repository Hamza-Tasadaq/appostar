import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <ul className='list-unstyled navigation-list mb-0 rounded-top d-flex justify-content-between justify-content-md-start align-items-center gap-4'>
            <li>
                <Link to={""} >
                    <i className='ri me-md-1 ri-home-line fs-4'></i>
                    {/* <span className='d-none d-md-inline'>
                        Home
                    </span> */}
                </Link>
            </li>
            <li>
                <Link to={""} >
                    <i className='ri me-md-1 ri-home-line fs-4'></i>
                    <span className='d-none d-md-inline'>
                        Reviews
                    </span>
                </Link>
            </li>
            <li>
                <Link to={""}>
                    <i className='ri me-md-1 ri-chat-3-line fs-4'></i>
                    <span className='d-none d-md-inline'>
                        Reservations
                    </span>
                </Link>
            </li>
            <li>
                <Link to={""}>
                    <i className='ri me-md-1 ri-chat-3-line fs-4'></i>
                    <span className='d-none d-md-inline'>
                        Shop
                    </span>
                </Link>
            </li>
            <li className='d-inline d-md-none'>
                <Link to={""}>
                    <i className='ri me-md-1 ri-list-check-2 fs-4'></i>
                    <span className='d-none d-md-inline'>
                        My Store
                    </span>
                </Link>
            </li>
        </ul>

    )
}

export default Navigation
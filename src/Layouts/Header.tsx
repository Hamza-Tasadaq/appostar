import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

//import images
import logoSm from "../assets/images/logo-sm.png"
import logoDark from "../assets/images/logo-light.png";
import logoLight from "../assets/images/logo-dark.png";

import FullScreenDropdown from '../Components/Common/FullScreenDropdown';
import { useSelector } from "react-redux";
import { createSelector } from 'reselect';
import NotificationDropdown from 'Components/Common/NotificationDropdown';
import SearchDropdown from 'Components/Common/SearchDropdown';
import classNames from 'classnames';
import LightDark from 'Components/Common/LightDark';
import { Button, Col, Row } from 'reactstrap';

const Header = ({ headerClass }: any) => {
    const { pathname } = useLocation()
    const navigate = useNavigate()



    const chatLayoutState = createSelector((state: any) => state.ChatLayout, (state) => ({
        isOnChatDetailsPage: state?.isOnChatDetailsPage
    }))

    const { isOnChatDetailsPage } = useSelector(chatLayoutState)


    //Dropdown Toggle
    const [isNotificationDropdown, setIsNotificationDropdown] = useState<boolean>(false);
    const toggleNotificationDropdown = () => {
        setIsNotificationDropdown(!isNotificationDropdown);
    };

    const [isSearchDropdown, setIsSearchDropdown] = useState<boolean>(false);
    const toggleSearchDropdown = () => {
        setIsSearchDropdown(!isSearchDropdown);
    };

    const isSmallScreen = window.innerWidth <= 600
    useEffect(() => {
        const isMobile = isSmallScreen; // Assuming mobile screens are <= 768px
        if (isMobile) {

            if (isNotificationDropdown || isSearchDropdown) {
                // Disable scroll on mobile
                document.body.style.overflow = "hidden";
            } else {
                // Re-enable scroll
                document.body.style.overflow = "";
            }

        } else {

            // Re-enable scroll
            document.body.style.overflow = "";

        }
        // Cleanup function to reset scroll when the component unmounts or dialog closes
        return () => {
            document.body.style.overflow = "";
        };
    }, [isNotificationDropdown, isSmallScreen, isSearchDropdown]);
    return (
        <React.Fragment>
            {
                pathname === "/store" || pathname === "/my-shop" || pathname.includes("/categories") ?
                    <header id="page-topbar">
                        <Row className='navbar-header'>
                            <Col className='p-0'>
                                <div className='w-100 d-flex align-items-center justify-content-between'>
                                    <ul className='list-unstyled navigation-list mb-0 rounded-top d-flex justify-content-between justify-content-md-start align-items-center gap-4'>
                                        <li>
                                            <Link to={""} >
                                                <i className='ri me-md-1 ri-home-line fs-4'></i>
                                                {/* <span className='d-none d-md-inline'>Home</span> */}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={""} >
                                                <i className='ri me-md-1 ri-home-line fs-4'></i>
                                                <span className='d-none d-md-inline'>Reviews</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={""}>
                                                <i className='ri me-md-1 ri-chat-3-line fs-4'></i>
                                                <span className='d-none d-md-inline'>Reservations</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/my-shop"}>
                                                <i className='ri me-md-1 ri-chat-3-line fs-4'></i>
                                                <span className='d-none d-md-inline'>Shop</span>
                                            </Link>
                                        </li>
                                        <li className='d-inline d-md-none'>
                                            <Link to={""}>
                                                <i className='ri me-md-1 ri-list-check-2 fs-4'></i>
                                                <span className='d-none d-md-inline'>My Store</span>
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul className='list-unstyled m-0 d-flex align-items-center gap-2'>
                                        <li className=''>
                                            <Button outline color='primary' className='rounded-pill'>
                                                <i className='ri  ri-heart-fill fs-6 '></i>
                                                11.3K
                                            </Button>
                                        </li>
                                        <li>
                                            <Button outline color='primary' className='rounded-pill'>
                                                <i className='ri  ri-share-fill fs-6'></i>
                                            </Button>
                                        </li>
                                        <li>
                                            <Button className='rounded-pill' color='primary'>Claim This Buisness</Button>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </header> :
                    <header id="page-topbar"
                        className={classNames(headerClass, {
                            'd-none opacity-0': isOnChatDetailsPage,
                            "d-block opacity-100": !isOnChatDetailsPage
                        })}>
                        <div className="layout-width">
                            <div className="navbar-header">
                                <div className="d-flex">
                                    <div className="navbar-brand-box horizontal-logo">
                                        <Link to="/" className="logo logo-light">
                                            <span className="logo-sm">
                                                <img src={logoSm} alt="" height="48" />
                                            </span>
                                            <span className="logo-lg">
                                                <img src={logoLight} alt="" height="48" />
                                            </span>
                                        </Link>
                                        <Link to="/" className="logo logo-dark">
                                            <span className="logo-sm">
                                                <img src={logoSm} alt="" height="48" />
                                            </span>
                                            <span className="logo-lg">
                                                <img src={logoDark} alt="" height="48" />
                                            </span>
                                        </Link>
                                    </div>
                                    {
                                        (!isNotificationDropdown && !isSearchDropdown && !pathname?.includes("/chat")) &&
                                        <div className='d-block d-md-none'>
                                            <Link to="/" className="logo logo-dark">
                                                <span className="logo-lg">
                                                    <img src={logoDark} alt="" height="48" />
                                                </span>
                                            </Link>
                                            <Link to="/" className="logo logo-light">
                                                <span className="logo-lg">
                                                    <img src={logoLight} alt="" height="48" />
                                                </span>
                                            </Link>
                                        </div>
                                    }
                                    {
                                        (isNotificationDropdown || isSearchDropdown || pathname?.includes("/chat")) &&
                                        <button className='d-md-none btn btn-icon' onClick={() => {
                                            if (isNotificationDropdown) {
                                                toggleNotificationDropdown()
                                            }
                                            if (isSearchDropdown) {
                                                toggleSearchDropdown()
                                            }

                                            if (pathname?.includes("/chat")) {
                                                navigate(-1)
                                            }
                                        }}>
                                            <i className=' ri-arrow-left-line fs-2'></i>
                                        </button>
                                    }
                                    {/* <button
                                        onClick={toogleMenuBtn}
                                        type="button"
                                        className="d-none d-md-block btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger"
                                        id="topnav-hamburger-icon">
                                        <span className="hamburger-icon">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </span>
                                    </button> */}
                                    {/* <SearchOption /> */}
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="d-flex d-md-none align-items-center">
                                        {
                                            isSmallScreen
                                                ? (!isSearchDropdown && !isNotificationDropdown)
                                                    ? (
                                                        <Link to="/chat" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle">
                                                            <i className="fs-22 ri-chat-1-line"></i>
                                                        </Link>
                                                    ) : null
                                                : (
                                                    <Link to="/chat" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle">
                                                        <i className="fs-22 ri-chat-1-line"></i>
                                                    </Link>
                                                )
                                        }
                                        {
                                            isSmallScreen
                                                ? (!isSearchDropdown && !isNotificationDropdown)
                                                    ? (
                                                        <Link to={"/calendar"} className='btn btn-icon btn-topbar btn-ghost-secondary rounded-circle' >
                                                            <i className='fs-22 ri-calendar-line'></i>
                                                        </Link>)
                                                    :
                                                    null
                                                : (<Link to={"/calendar"} className='btn btn-icon btn-topbar btn-ghost-secondary rounded-circle' >
                                                    <i className='fs-22 ri-calendar-line'></i>
                                                </Link>)
                                        }
                                    </div>
                                    <FullScreenDropdown />

                                    {isSmallScreen ?
                                        !isNotificationDropdown &&
                                        <SearchDropdown isSearchDropdown={isSearchDropdown} toggleSearchDropdown={toggleSearchDropdown} /> :
                                        <SearchDropdown isSearchDropdown={isSearchDropdown} toggleSearchDropdown={toggleSearchDropdown} />
                                    }

                                    {isSmallScreen ?
                                        !isSearchDropdown &&
                                        <NotificationDropdown isNotificationDropdown={isNotificationDropdown} toggleNotificationDropdown={toggleNotificationDropdown} /> :
                                        <NotificationDropdown isNotificationDropdown={isNotificationDropdown} toggleNotificationDropdown={toggleNotificationDropdown} />
                                    }

                                    <LightDark />
                                </div>
                            </div>
                        </div>
                        {
                            (isSmallScreen && !(pathname?.includes("/chat") || pathname === "/")) &&

                            <nav className='navbar-header d-md-none w-100 h-auto pb-2'>
                                <ul className='d-flex w-100 justify-content-between mb-0 align-items-center list-unstyled'>
                                    <li>
                                        <Link to="#">
                                            <i className='ri ri-home-line fs-2'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className='ri ri-user-smile-line fs-2'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className='ri ri-settings-2-line fs-2'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className='ri ri-mail-send-line fs-2'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => { }}
                                            className={"btn btn-light p-2 btn-icon rounded-circle btn-sm favourite-btn"}
                                        >
                                            <img
                                                className='rounded-circle'
                                                height={32}
                                                width={32}
                                                src='https://themes.themesbrand.com/velzon/react-ts/master/static/media/avatar-2.58874a6f667b9b04ce55.jpg'
                                                alt='user-image'
                                            />
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        }


                    </header>
            }
        </React.Fragment>
    );
};

export default Header;
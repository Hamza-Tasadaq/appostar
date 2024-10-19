import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

//import images
import logoSm from "../assets/images/logo-sm.png"
import logoDark from "../assets/images/logo-light.png";
import logoLight from "../assets/images/logo-dark.png";

import FullScreenDropdown from '../Components/Common/FullScreenDropdown';

import { changeSidebarVisibility } from '../slices/thunks';
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from 'reselect';
import NotificationDropdown from 'Components/Common/NotificationDropdown';
import SearchDropdown from 'Components/Common/SearchDropdown';
import classNames from 'classnames';
import LightDark from 'Components/Common/LightDark';

const Header = ({ headerClass }: any) => {
    const { pathname } = useLocation()
    const dispatch: any = useDispatch();
    const navigate = useNavigate()


    const selectDashboardData = createSelector(
        (state: any) => state.Layout,
        (sidebarVisibilitytype: any) => sidebarVisibilitytype.sidebarVisibilitytype
    );

    const chatLayoutState = createSelector((state: any) => state.ChatLayout, (state) => ({
        isOnChatDetailsPage: state?.isOnChatDetailsPage
    }))

    const { isOnChatDetailsPage } = useSelector(chatLayoutState)

    // Inside your component
    const sidebarVisibilitytype = useSelector(selectDashboardData);

    const toogleMenuBtn = () => {
        var windowSize = document.documentElement.clientWidth;
        const humberIcon = document.querySelector(".hamburger-icon") as HTMLElement;
        dispatch(changeSidebarVisibility("show"));

        if (windowSize > 767)
            humberIcon.classList.toggle('open');

        //For collapse horizontal menu
        if (document.documentElement.getAttribute('data-layout') === "horizontal") {
            document.body.classList.contains("menu") ? document.body.classList.remove("menu") : document.body.classList.add("menu");
        }

        //For collapse vertical and semibox menu
        if (sidebarVisibilitytype === "show" && (document.documentElement.getAttribute('data-layout') === "vertical" || document.documentElement.getAttribute('data-layout') === "semibox")) {
            if (windowSize < 1025 && windowSize > 767) {
                document.body.classList.remove('vertical-sidebar-enable');
                (document.documentElement.getAttribute('data-sidebar-size') === 'sm') ? document.documentElement.setAttribute('data-sidebar-size', '') : document.documentElement.setAttribute('data-sidebar-size', 'sm');
            } else if (windowSize > 1025) {
                document.body.classList.remove('vertical-sidebar-enable');
                (document.documentElement.getAttribute('data-sidebar-size') === 'lg') ? document.documentElement.setAttribute('data-sidebar-size', 'sm') : document.documentElement.setAttribute('data-sidebar-size', 'lg');
            } else if (windowSize <= 767) {
                document.body.classList.add('vertical-sidebar-enable');
                document.documentElement.setAttribute('data-sidebar-size', 'lg');
            }
        }


        //Two column menu
        if (document.documentElement.getAttribute('data-layout') === "twocolumn") {
            document.body.classList.contains('twocolumn-panel') ? document.body.classList.remove('twocolumn-panel') : document.body.classList.add('twocolumn-panel');
        }
    };
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
                            <button
                                onClick={toogleMenuBtn}
                                type="button"
                                className="d-none d-md-block btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger"
                                id="topnav-hamburger-icon">
                                <span className="hamburger-icon">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </button>
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
                            <div style={{ width: "600px" }}></div>
                        </div>
                    </div>
                </div>
                {
                    (isSmallScreen && !pathname?.includes("/chat")) &&

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

                {/* <LightDark /> */}

            </header>
        </React.Fragment>
    );
};

export default Header;
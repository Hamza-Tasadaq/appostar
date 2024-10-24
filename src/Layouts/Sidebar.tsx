import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
//import logo
import logoSm from "../assets/images/logo-sm.png";
import logoDark from "../assets/images/logo-dark.png";
import logoLight from "../assets/images/logo-light.png";
import avatar1 from "../assets/images/users/avatar-1.jpg";

//Import Components
// import VerticalLayout from "./VerticalLayouts";
import { Container, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import TwoColumnLayout from "./TwoColumnLayout";
// import HorizontalLayout from "./HorizontalLayout";

const Sidebar = ({ layoutType }: any) => {

    useEffect(() => {
        var verticalOverlay = document.getElementsByClassName("vertical-overlay");
        if (verticalOverlay) {
            verticalOverlay[0].addEventListener("click", function () {
                document.body.classList.remove("vertical-sidebar-enable");
            });
        }
    });

    const addEventListenerOnSmHoverMenu = () => {
        // add listener Sidebar Hover icon on change layout from setting
        if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover') {
            document.documentElement.setAttribute('data-sidebar-size', 'sm-hover-active');
        } else if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover-active') {
            document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
        } else {
            document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
        }
    };

    return (
        <React.Fragment>
            <div className="d-none d-md-block app-menu navbar-menu">
                <div className="navbar-brand-box">
                    <Link to="/" className="logo logo-dark">
                        <span className="logo-sm">
                            <img src={logoSm} alt="" height="36" />
                        </span>
                        <span className="logo-lg">
                            <img src={logoDark} alt="" height="60" />
                        </span>
                    </Link>
                    <Link to="/" className="logo logo-light">
                        <span className="logo-sm">
                            <img src={logoSm} alt="" height="36" />
                        </span>
                        <span className="logo-lg">
                            <img src={logoLight} alt="" height="60" />
                        </span>
                    </Link>
                    <button
                        onClick={addEventListenerOnSmHoverMenu}
                        type="button"
                        className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
                        id="vertical-hover"
                    >
                        <i className="ri-record-circle-line"></i>
                    </button>
                </div>

                <UncontrolledDropdown className="sidebar-user m-1 rounded">
                    <DropdownToggle tag="button" type="button" className="btn material-shadow-none" id="page-header-user-dropdown">
                        <span className="d-flex align-items-center gap-2">
                            <img className="rounded header-profile-user" src={avatar1} alt="Header Avatar" />
                            <span className="text-start">
                                <span className="d-block fw-medium sidebar-user-name-text">Anna Adame</span>
                                <span className="d-block fs-14 sidebar-user-name-sub-text"><i className="ri ri-circle-fill fs-10 text-success align-baseline"></i> <span className="align-middle">Online</span></span>
                            </span>
                        </span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-end">
                        <h6 className="dropdown-header">Welcome Anna!</h6>
                        <a className="dropdown-item" href="/profile"><i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Profile</span></a>
                        <a className="dropdown-item" href="/apps-chat"><i className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Messages</span></a>
                        <a className="dropdown-item" href="/apps-tasks-kanban"><i className="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Taskboard</span></a>
                        <a className="dropdown-item" href="/pages-faqs"><i className="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Help</span></a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/pages-profile"><i className="mdi mdi-wallet text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Balance : <b>$5971.67</b></span></a>
                        <a className="dropdown-item" href="/pages-profile-settings"><span className="badge bg-success-subtle text-success mt-1 float-end">New</span><i className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Settings</span></a>
                        <a className="dropdown-item" href="/auth-lockscreen-basic"><i className="mdi mdi-lock text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Lock screen</span></a>
                        <a className="dropdown-item" href="/auth-logout-basic"><i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> <span className="align-middle" data-key="t-logout">Logout</span></a>
                    </DropdownMenu>
                </UncontrolledDropdown>
                {layoutType === "horizontal" ? (
                    <div id="scrollbar">
                        <Container fluid>
                            <div id="two-column-menu"></div>
                            <ul className="navbar-nav" id="navbar-nav">
                                {/* <HorizontalLayout /> */}
                            </ul>
                        </Container>
                    </div>
                ) : layoutType === 'twocolumn' ? (
                    <React.Fragment>
                        <TwoColumnLayout layoutType={layoutType} />
                        <div className="sidebar-background"></div>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <SimpleBar id="scrollbar" className="h-100">
                            <Container fluid>
                                <div id="two-column-menu"></div>
                                <ul className="navbar-nav" id="navbar-nav">
                                    {/* <VerticalLayout layoutType={layoutType} /> */}
                                </ul>
                            </Container>
                        </SimpleBar>
                        <div className="sidebar-background"></div>
                    </React.Fragment>
                )}
            </div>
            <div className="vertical-overlay"></div>
        </React.Fragment>
    );
};

export default Sidebar;

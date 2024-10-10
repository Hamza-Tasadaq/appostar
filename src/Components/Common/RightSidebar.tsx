import React, { useEffect, useState } from 'react';
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
} from "reactstrap";
import withRouter from './WithRouter';

//redux
import {
    changeLayout,
    changeLayoutThemeColor
    // resetValue
} from "../../slices/thunks";

import { useSelector, useDispatch } from "react-redux";

//import Constant
import {
    LAYOUT_TYPES,
    LAYOUT_THEME_COLOR
} from "../constants/layout";

//SimpleBar
import SimpleBar from "simplebar-react";
//import Images
import { createSelector } from 'reselect';

const RightSidebar = (props: any) => {
    const dispatch: any = useDispatch();

    const [show] = useState<boolean>(false);

    useEffect(() => {
        const sidebarColorDark = document.getElementById("sidebar-color-dark") as HTMLInputElement;
        const sidebarColorLight = document.getElementById("sidebar-color-light") as HTMLInputElement;

        if (show && sidebarColorDark && sidebarColorLight) {
            sidebarColorDark.checked = false;
            sidebarColorLight.checked = false;
        }
    }, [show]);

    const selectLayoutState = (state: any) => state.Layout;
    const selectLayoutProperties = createSelector(
        selectLayoutState,
        (layout) => ({
            layoutThemeType: layout.layoutThemeType,
            layoutType: layout.layoutType,
            leftSidebarType: layout.leftSidebarType,
            layoutModeType: layout.layoutModeType,
            layoutWidthType: layout.layoutWidthType,
            layoutPositionType: layout.layoutPositionType,
            topbarThemeType: layout.topbarThemeType,
            leftsidbarSizeType: layout.leftsidbarSizeType,
            leftSidebarViewType: layout.leftSidebarViewType,
            leftSidebarImageType: layout.leftSidebarImageType,
            preloader: layout.preloader,
            sidebarVisibilitytype: layout.sidebarVisibilitytype,
            layoutThemeColorType: layout.layoutThemeColorType,
        })
    );
    // Inside your component
    const {
        layoutType,
        preloader,
        layoutThemeColorType,
    } = useSelector(selectLayoutProperties);

    // open offcanvas
    const [open, setOpen] = useState<boolean>(true);
    const toggleLeftCanvas = () => {
        setOpen(!open);
    };

    window.onscroll = function () {
        scrollFunction();
    };

    const scrollFunction = () => {
        const element = document.getElementById("back-to-top");
        if (element) {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
        }
    };

    const toTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    const pathName = props.router.location.pathname;

    useEffect(() => {
        const preloader = document.getElementById("preloader") as HTMLElement;

        if (preloader) {
            preloader.style.opacity = "1";
            preloader.style.visibility = "visible";

            setTimeout(function () {
                preloader.style.opacity = "0";
                preloader.style.visibility = "hidden";
            }, 1000);
        }
    }, [pathName]);

    //Sidebar User Profile Avatar
    const [sidebarAvatar, setSidebarAvatar] = useState<boolean>(false);

    useEffect(() => {
        handleChangeSidebarAvatar(sidebarAvatar);
    }, [sidebarAvatar]);

    const handleChangeSidebarAvatar = (value: boolean) => {
        setSidebarAvatar(value);

        if (value) {
            document.documentElement.setAttribute("data-sidebar-user-show", "");
        } else {
            document.documentElement.removeAttribute("data-sidebar-user-show");
        }
    };

    return (
        <React.Fragment>
            <button
                onClick={() => toTop()}
                className="btn btn-danger btn-icon" id="back-to-top">
                <i className="ri-arrow-up-line"></i>
            </button>

            {preloader === "enable" && <div id="preloader">
                <div id="status">
                    <div className="spinner-border text-primary avatar-sm" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>}

            <div>
                <div className="customizer-setting d-none d-md-block">
                    <div onClick={toggleLeftCanvas} className="btn-info rounded-pill shadow-lg btn btn-icon btn-lg p-2 rounded-pill">
                        <i className='mdi mdi-spin mdi-cog-outline fs-22'></i>
                    </div>
                </div>
                <Offcanvas isOpen={open} toggle={toggleLeftCanvas} direction='end' className='offcanvas-end border-0'>
                    <OffcanvasHeader className="d-flex align-items-center bg-primary bg-gradient p-3 offcanvas-header-dark" toggle={toggleLeftCanvas}>
                        <span className="m-0 me-2 text-white">Theme Customizer</span>
                    </OffcanvasHeader>
                    <OffcanvasBody className="p-0">
                        <SimpleBar className="h-100">
                            <div className="p-4">
                                <h6 className="mb-0 fw-semibold text-uppercase">Layout</h6>
                                <p className="text-muted">Choose your layout</p>

                                <div className="row gy-3">
                                    <div className="col-4">
                                        <div className="form-check card-radio">
                                            <input
                                                id="customizer-layout03"
                                                name="data-layout"
                                                type="radio"
                                                value={LAYOUT_TYPES.TWOCOLUMN}
                                                checked={layoutType === LAYOUT_TYPES.TWOCOLUMN}
                                                onChange={e => {
                                                    if (e.target.checked) {
                                                        dispatch(changeLayout(e.target.value));
                                                    }
                                                }}
                                                className="form-check-input" />
                                            <label className="form-check-label p-0 avatar-md w-100" htmlFor="customizer-layout03">
                                                <span className="d-flex gap-1 h-100">
                                                    <span className="flex-shrink-0">
                                                        <span className="bg-light d-flex h-100 flex-column gap-1">
                                                            <span className="d-block p-1 bg-primary-subtle mb-2"></span>
                                                            <span className="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                            <span className="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                            <span className="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                        </span>
                                                    </span>
                                                    <span className="flex-shrink-0">
                                                        <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        </span>
                                                    </span>
                                                    <span className="flex-grow-1">
                                                        <span className="d-flex h-100 flex-column">
                                                            <span className="bg-light d-block p-1"></span>
                                                            <span className="bg-light d-block p-1 mt-auto"></span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </label>
                                        </div>
                                        <h5 className="fs-13 text-center mt-2">Two Column</h5>
                                    </div>
                                    {/* <div className="col-4">
                                        <div className="form-check card-radio">
                                            <input id="customizer-layout04" name="data-layout" type="radio" className="form-check-input"
                                                value={LAYOUT_TYPES.SEMIBOX}
                                                checked={layoutType === LAYOUT_TYPES.SEMIBOX}
                                                onChange={e => {
                                                    if (e.target.checked) {
                                                        dispatch(changeLayout(e.target.value));
                                                    }
                                                }}
                                            />
                                            <label className="form-check-label p-0 avatar-md w-100" htmlFor="customizer-layout04">
                                                <span className="d-flex gap-1 h-100">
                                                    <span className="flex-shrink-0 p-1">
                                                        <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                            <span className="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        </span>
                                                    </span>
                                                    <span className="flex-grow-1">
                                                        <span className="d-flex h-100 flex-column pt-1 pe-2">
                                                            <span className="bg-light d-block p-1"></span>
                                                            <span className="bg-light d-block p-1 mt-auto"></span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </label>
                                        </div>
                                        <h5 className="fs-13 text-center mt-2">Semi Box</h5>
                                    </div> */}
                                </div>


                                {layoutType !== "horizontal" && layoutType !== "twocolumn" && (
                                    <div className="form-check form-switch form-switch-md mb-3 mt-4">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="sidebarUserProfile"
                                            checked={sidebarAvatar}
                                            onChange={(e) => handleChangeSidebarAvatar(e.target.checked)}
                                        />
                                        <label className="form-check-label" htmlFor="sidebarUserProfile">Sidebar User Profile Avatar</label>
                                    </div>
                                )}

                                <div id="sidebar-color">
                                    <h6 className="mt-4 mb-0 fw-semibold text-uppercase">Primary Color</h6>
                                    <p className="text-muted">Choose a color of Primary.</p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <div className="form-check sidebar-setting card-radio">
                                            <input className="form-check-input" type="radio" name="data-theme-colors" id="themeColor-01"
                                                value={LAYOUT_THEME_COLOR.DEFAULT}
                                                checked={layoutThemeColorType === LAYOUT_THEME_COLOR.DEFAULT}
                                                onChange={e => {
                                                    if (e.target.checked) {
                                                        dispatch(changeLayoutThemeColor(e.target.value));
                                                    }
                                                }} />
                                            <label className="form-check-label avatar-xs p-0" htmlFor="themeColor-01"></label>
                                        </div>
                                        <div className="form-check sidebar-setting card-radio">
                                            <input className="form-check-input" type="radio" name="data-theme-colors" id="themeColor-02"
                                                value={LAYOUT_THEME_COLOR.GREEN}
                                                checked={layoutThemeColorType === LAYOUT_THEME_COLOR.GREEN}
                                                onChange={e => {
                                                    if (e.target.checked) {
                                                        dispatch(changeLayoutThemeColor(e.target.value));
                                                    }
                                                }} />
                                            <label className="form-check-label avatar-xs p-0" htmlFor="themeColor-02"></label>
                                        </div>
                                        <div className="form-check sidebar-setting card-radio">
                                            <input className="form-check-input" type="radio" name="data-theme-colors" id="themeColor-03"
                                                value={LAYOUT_THEME_COLOR.PURPLE}
                                                checked={layoutThemeColorType === LAYOUT_THEME_COLOR.PURPLE}
                                                onChange={e => {
                                                    if (e.target.checked) {
                                                        dispatch(changeLayoutThemeColor(e.target.value));
                                                    }
                                                }} />
                                            <label className="form-check-label avatar-xs p-0" htmlFor="themeColor-03"></label>
                                        </div>
                                        <div className="form-check sidebar-setting card-radio">
                                            <input className="form-check-input" type="radio" name="data-theme-colors" id="themeColor-04"
                                                value={LAYOUT_THEME_COLOR.BLUE}
                                                checked={layoutThemeColorType === LAYOUT_THEME_COLOR.BLUE}
                                                onChange={e => {
                                                    if (e.target.checked) {
                                                        dispatch(changeLayoutThemeColor(e.target.value));
                                                    }
                                                }} />
                                            <label className="form-check-label avatar-xs p-0" htmlFor="themeColor-04"></label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </SimpleBar>

                    </OffcanvasBody>

                </Offcanvas>
            </div>
        </React.Fragment>
    );
};

export default withRouter(RightSidebar);
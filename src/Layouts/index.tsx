import React, { useEffect, useState } from 'react';

//import Components
import Footer from './Footer';

//import actions
import {
    changeLayout,
    changeSidebarTheme,
    changeLayoutMode,
    changeLayoutThemeColor,
    changeLayoutTheme,
    changeLayoutWidth,
    changeLayoutPosition,
    changeTopbarTheme,
    changeLeftsidebarSizeType,
    changeLeftsidebarViewType,
    changeSidebarImageType,
    changeSidebarVisibility
} from "../slices/thunks";

//redux
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from 'reselect';
import Sidebar from './Sidebar';
import withRouter from 'Components/Common/WithRouter';
import Header from './Header';

const Layout = (props: any) => {
    const [headerClass, setHeaderClass] = useState("");
    const dispatch: any = useDispatch();

    const selectLayoutState = (state: any) => state.Layout;
    const selectLayoutProperties = createSelector(
        selectLayoutState,
        (layout) => ({
            layoutType: layout.layoutType,
            leftSidebarType: layout.leftSidebarType,
            layoutModeType: layout.layoutModeType,
            layoutThemeColorType: layout.layoutThemeColorType,
            layoutThemeType: layout.layoutThemeType,
            layoutWidthType: layout.layoutWidthType,
            layoutPositionType: layout.layoutPositionType,
            topbarThemeType: layout.topbarThemeType,
            leftsidbarSizeType: layout.leftsidbarSizeType,
            leftSidebarViewType: layout.leftSidebarViewType,
            leftSidebarImageType: layout.leftSidebarImageType,
            preloader: layout.preloader,
            sidebarVisibilitytype: layout.sidebarVisibilitytype,
        })
    );
    // Inside your component
    const {
        layoutType,
        leftSidebarType,
        layoutModeType,
        layoutThemeColorType,
        layoutThemeType,
        layoutWidthType,
        layoutPositionType,
        topbarThemeType,
        leftsidbarSizeType,
        leftSidebarViewType,
        leftSidebarImageType,
        sidebarVisibilitytype
    } = useSelector(selectLayoutProperties);

    /*
    layout settings
    */
    useEffect(() => {
        if (
            layoutType ||
            leftSidebarType ||
            layoutModeType ||
            layoutThemeType ||
            layoutThemeColorType ||
            layoutWidthType ||
            layoutPositionType ||
            topbarThemeType ||
            leftsidbarSizeType ||
            leftSidebarViewType ||
            leftSidebarImageType ||
            sidebarVisibilitytype
        ) {
            window.dispatchEvent(new Event('resize'));
            dispatch(changeLeftsidebarViewType(leftSidebarViewType));
            dispatch(changeLeftsidebarSizeType(leftsidbarSizeType));
            dispatch(changeSidebarTheme(leftSidebarType));
            dispatch(changeLayoutThemeColor(layoutThemeColorType));
            dispatch(changeLayoutTheme(layoutThemeType));
            dispatch(changeLayoutMode(layoutModeType));
            dispatch(changeLayoutWidth(layoutWidthType));
            dispatch(changeLayoutPosition(layoutPositionType));
            dispatch(changeTopbarTheme(topbarThemeType));
            dispatch(changeLayout(layoutType));
            dispatch(changeSidebarImageType(leftSidebarImageType));
            dispatch(changeSidebarVisibility(sidebarVisibilitytype));
        }
    }, [layoutType,
        leftSidebarType,
        layoutModeType,
        layoutThemeType,
        layoutThemeColorType,
        layoutWidthType,
        layoutPositionType,
        topbarThemeType,
        leftsidbarSizeType,
        leftSidebarViewType,
        leftSidebarImageType,
        sidebarVisibilitytype,
        dispatch]);
    /*
    call dark/light mode
    */
    const onChangeLayoutMode = (value: any) => {
        if (changeLayoutMode) {
            dispatch(changeLayoutMode(value));
        }
    };

    // class add remove in header 
    useEffect(() => {
        window.addEventListener("scroll", scrollNavigation, true);
    });

    function scrollNavigation() {
        var scrollup = document.documentElement.scrollTop;
        if (scrollup > 50) {
            setHeaderClass("topbar-shadow");
        } else {
            setHeaderClass("");
        }
    }

    useEffect(() => {
        const humberIcon = document.querySelector(".hamburger-icon") as HTMLElement;
        if (sidebarVisibilitytype === 'show' || layoutType === "vertical" || layoutType === "twocolumn") {
            humberIcon?.classList?.remove('open');
        } else {
            humberIcon && humberIcon?.classList?.add('open');
        }
    }, [sidebarVisibilitytype, layoutType]);

    return (
        <React.Fragment>
            <div id="layout-wrapper">
                <Header
                    headerClass={headerClass}
                    onChangeLayoutMode={onChangeLayoutMode}
                />
                <Sidebar
                    layoutType={layoutType}
                />
                <div className="main-content">
                    {props.children}
                    <div className='d-none d-md-block'>
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
};


export default withRouter(Layout);
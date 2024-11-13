import React from "react";
import { Link, useLocation } from "react-router-dom";
import SimpleBar from "simplebar-react";
import logoSm from "../assets/images/logo-sm.png";
import { navData } from "./LayoutMenuData";
import classNames from "classnames";

const Sidebar = () => {
    const location = useLocation();
    const isActive = (activeList: string[]) => {
        if (location.pathname === "/") {
            return activeList?.includes(location.pathname)
        } else {
            return activeList?.some(listItem => location.pathname?.includes(listItem) && listItem.length > 1 && location.pathname !== '/')
        }
    }

    return (
        <React.Fragment>
            <div className="d-none d-md-block app-menu navbar-menu py-3">
                <Link to="#" className="logo d-flex align-items-center justify-content-center">
                    <img src={logoSm} alt="" height="48" />
                </Link>
                <SimpleBar style={{
                    height: "calc(100dvh - 128px)",
                    width: "48px",
                    margin: "0 auto"
                }} >
                    <ul className="d-flex flex-column gap-2 p-0">
                        {navData?.map((item) =>
                            <Link to={item?.link} key={item?.id} className={classNames("nav-icon ", isActive(item?.active) ? "active" : "")}>
                                <i className={classNames("fs-3", item?.icon)}></i>
                            </Link>)}
                    </ul>
                </SimpleBar>
                <div className="d-flex align-items-center justify-content-center">
                    <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" width={48} height={48} alt="rounded-circle" />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Sidebar;

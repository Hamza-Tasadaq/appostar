import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
    const history = useNavigate();
    //state data
    const [isDashboard, setIsDashboard] = useState<boolean>(false);
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [isRoot, setIsRoot] = useState<boolean>(false);
    const [isStore, setIsStore] = useState<boolean>(false);
    const [isMap, setIsMap] = useState<boolean>(false);


    const [iscurrentState, setIscurrentState] = useState('Dashboard');

    function updateIconSidebar(e: any) {
        if (e && e.target && e.target.getAttribute("sub-items")) {
            const ul: any = document.getElementById("two-column-menu");
            const iconItems: any = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id = item.getAttribute("sub-items");
                const getID = document.getElementById(id) as HTMLElement;
                if (getID)
                    getID.classList.remove("show");
            });
        }
    }

    useEffect(() => {
        document.body.classList.remove('twocolumn-panel');
        if (iscurrentState !== 'Dashboard') {
            setIsDashboard(false);
        }
        if (iscurrentState !== 'Auth') {
            setIsAuth(false);
        }
        if (iscurrentState !== "Root") {
            setIsRoot(false)
        }
        if (iscurrentState !== "Store") {
            setIsStore(false)
        }
        if (iscurrentState !== "Map") {
            setIsMap(false)
        }
    }, [
        history,
        iscurrentState,
        isDashboard,
        isRoot,
    ]);

    const menuItems: any = [
        // {
        //     label: "Menu",
        //     isHeader: true,
        // },
        // {
        //     label: "pages",
        //     isHeader: true,
        // },
        // {
        //     id: "authentication",
        //     label: "Authentication",
        //     icon: "ri-account-circle-line",
        //     link: "/#",
        //     click: function (e: any) {
        //         e.preventDefault();
        //         setIsAuth(!isAuth);
        //         setIscurrentState('Auth');
        //         updateIconSidebar(e);
        //     },
        //     stateVariables: isAuth,
        //     subItems: [
        //         {
        //             id: "signIn",
        //             label: "Sign In",
        //             link: "/#",
        //             isChildItem: true,
        //             click: function (e: any) {
        //                 e.preventDefault();
        //                 setIsSignIn(!isSignIn);
        //             },
        //             parentId: "authentication",
        //             stateVariables: isSignIn,
        //             childItems: [
        //                 { id: 1, label: "Basic", link: "/auth-signin-basic" },
        //                 { id: 2, label: "Cover", link: "/auth-signin-cover" },
        //             ]
        //         }
        //     ],
        // },
        {
            id: "root",
            label: "Root",
            icon: " ri-home-heart-line",
            link: "/",
            // click: function (e: any) {
            //     e.preventDefault();
            //     setIsRoot(!isRoot);
            //     setIscurrentState('Root');
            //     updateIconSidebar(e);
            // },
            stateVariables: isRoot,
            // subItems: [
            //     {
            //         id: "chats",
            //         label: "Chats",
            //         link: "/chat",
            //         parentId: "chat",
            //     },
            // ],
        },
        {
            id: "store",
            label: "Store",
            icon: "ri-store-2-line",
            link: "/store",
            click: function (e: any) {
                e.preventDefault();
                setIsStore(!isStore);
                setIscurrentState('Store');
                updateIconSidebar(e);
            },
            stateVariables: isStore,
            // subItems: [
            //     {
            //         id: "calendar",
            //         label: "Calendar",
            //         link: "/calendar",
            //         parentId: "calendar",
            //     },
            // ],
        },
        {
            id: "map",
            label: "Map",
            icon: "ri-star-smile-line",
            link: "/#",
            // click: function (e: any) {
            //     e.preventDefault();
            //     setIsMap(!isMap);
            //     setIscurrentState('Map');
            //     updateIconSidebar(e);
            // },
            // stateVariables: isMap,
            // subItems: [
            //     {
            //         id: "map",
            //         label: "Map",
            //         link: "/map",
            //         parentId: "map",
            //     },
            // ],
        },
        {
            id: "map",
            label: "Map",
            icon: "ri-speak-line",
            link: "/#",
            // click: function (e: any) {
            //     e.preventDefault();
            //     setIsMap(!isMap);
            //     setIscurrentState('Map');
            //     updateIconSidebar(e);
            // },
            // stateVariables: isMap,
            // subItems: [
            //     {
            //         id: "map",
            //         label: "Map",
            //         link: "/map",
            //         parentId: "map",
            //     },
            // ],
        },
        {
            id: "map",
            label: "Map",
            icon: "ri-calendar-check-line",
            link: "/#",
            // click: function (e: any) {
            //     e.preventDefault();
            //     setIsMap(!isMap);
            //     setIscurrentState('Map');
            //     updateIconSidebar(e);
            // },
            // stateVariables: isMap,
            // subItems: [
            //     {
            //         id: "map",
            //         label: "Map",
            //         link: "/map",
            //         parentId: "map",
            //     },
            // ],
        },

        {
            id: "map",
            label: "Map",
            icon: "ri-shopping-cart-line",
            link: "/chat",
            // click: function (e: any) {
            //     e.preventDefault();
            //     setIsMap(!isMap);
            //     setIscurrentState('Map');
            //     updateIconSidebar(e);
            // },
            // stateVariables: isMap,
            // subItems: [
            //     {
            //         id: "map",
            //         label: "Map",
            //         link: "/map",
            //         parentId: "map",
            //     },
            // ],
        },
        {
            id: "map",
            label: "Map",
            icon: "ri-gift-2-line",
            link: "/#",
            // click: function (e: any) {
            //     e.preventDefault();
            //     setIsMap(!isMap);
            //     setIscurrentState('Map');
            //     updateIconSidebar(e);
            // },
            // stateVariables: isMap,
            // subItems: [
            //     {
            //         id: "map",
            //         label: "Map",
            //         link: "/map",
            //         parentId: "map",
            //     },
            // ],
        },
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
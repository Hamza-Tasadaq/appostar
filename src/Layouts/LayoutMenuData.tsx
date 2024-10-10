import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
    const history = useNavigate();
    //state data
    const [isDashboard, setIsDashboard] = useState<boolean>(false);
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [isChat, setIsChat] = useState<boolean>(false);
    const [isCalendar, setIsCalendar] = useState<boolean>(false);

    // Apps
    // const [isCalendar, setCalendar] = useState<boolean>(false);
    // const [isEmail, setEmail] = useState<boolean>(false);
    // const [isSubEmail, setSubEmail] = useState<boolean>(false);
    // const [isEcommerce, setIsEcommerce] = useState<boolean>(false);
    // const [isProjects, setIsProjects] = useState<boolean>(false);
    // const [isTasks, setIsTasks] = useState<boolean>(false);
    // const [isCRM, setIsCRM] = useState<boolean>(false);
    // const [isCrypto, setIsCrypto] = useState<boolean>(false);
    // const [isInvoices, setIsInvoices] = useState<boolean>(false);
    // const [isSupportTickets, setIsSupportTickets] = useState<boolean>(false);
    // const [isNFTMarketplace, setIsNFTMarketplace] = useState<boolean>(false);
    // const [isJobs, setIsJobs] = useState<boolean>(false);
    // const [isJobList, setIsJobList] = useState<boolean>(false);
    // const [isCandidateList, setIsCandidateList] = useState<boolean>(false);


    // Authentication
    const [isSignIn, setIsSignIn] = useState<boolean>(false);

    // Pages
    // const [isProfile, setIsProfile] = useState<boolean>(false);


    // Charts
    // const [isApex, setIsApex] = useState<boolean>(false);

    // Multi Level
    // const [isLevel1, setIsLevel1] = useState<boolean>(false);
    // const [isLevel2, setIsLevel2] = useState<boolean>(false);

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
        if (iscurrentState !== "Chat") {
            setIsChat(false)
        }
    }, [
        history,
        iscurrentState,
        isDashboard,
        isChat,
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
        {
            id: "authentication",
            label: "Authentication",
            icon: "ri-account-circle-line",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsAuth(!isAuth);
                setIscurrentState('Auth');
                updateIconSidebar(e);
            },
            stateVariables: isAuth,
            subItems: [
                {
                    id: "signIn",
                    label: "Sign In",
                    link: "/#",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsSignIn(!isSignIn);
                    },
                    parentId: "authentication",
                    stateVariables: isSignIn,
                    childItems: [
                        { id: 1, label: "Basic", link: "/auth-signin-basic" },
                        { id: 2, label: "Cover", link: "/auth-signin-cover" },
                    ]
                }
            ],
        },
        {
            id: "chat",
            label: "Chat",
            icon: " ri-chat-1-line",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsChat(!isChat);
                setIscurrentState('Chat');
                updateIconSidebar(e);
            },
            stateVariables: isChat,
            subItems: [
                {
                    id: "chats",
                    label: "Chats",
                    link: "/chat",
                    parentId: "chat",
                },
            ],
        },
        {
            id: "calendar",
            label: "Calendar",
            icon: "ri-calendar-line",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsCalendar(!isCalendar);
                setIscurrentState('Calendar');
                updateIconSidebar(e);
            },
            stateVariables: isCalendar,
            subItems: [
                {
                    id: "calendar",
                    label: "Calendar",
                    link: "/calendar",
                    parentId: "calendar",
                },
            ],
        }
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
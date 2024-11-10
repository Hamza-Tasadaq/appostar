import SignIn from '../pages/AuthenticationInner/SignIn';
import SignUp from "../pages/AuthenticationInner/SignUp";
import AddressInfo from "../pages/AuthenticationInner/AddressInfo"
import CoverPasswReset from '../pages/AuthenticationInner/PasswordReset/CoverPasswReset';
import CoverLockScreen from '../pages/AuthenticationInner/LockScreen/CoverLockScr';
import CoverLogout from '../pages/AuthenticationInner/Logout/CoverLogout';
import CoverSuccessMsg from '../pages/AuthenticationInner/SuccessMessage/CoverSuccessMsg';
import TwosVerify from '../pages/AuthenticationInner/TwosVerify';
import Root from 'pages/Dashboard/Root';
import CoverPasswCreate from "../pages/AuthenticationInner/PasswordCreate/CoverPasswCreate";
import Profile from "pages/Dashboard/Profile";
import Chat from 'pages/Dashboard/Chat';
import Calendar from 'pages/Dashboard/Calendar';
import Map from 'pages/Dashboard/map/index';
import Store from 'pages/Dashboard/store/index.tsx';
import MyShop from 'pages/Dashboard/store/my-shop';
// import Copy from 'pages/Dashboard/company-details/my-store.tsx/copy';


const authProtectedRoutes = [
    {
        path: "/",
        exact: true,
        // component: <Profile />
        // component: <Details />
        component: <Root />
        // component: <Store />
    },
    {
        path: "/store",
        component: <Store />,
    },
    {
        path: "/my-shop",
        component: <MyShop />
    },
    {
        path: "/map",
        component: <Map />
    },
    {
        path: "/profile",
        component: <Profile />
    },
    {
        path: "/chat",
        component: <Chat />
    },
    {
        path: "/calendar",
        component: <Calendar />
    },
    // {
    //     path: "/copy",
    //     component: <Copy />
    // }
];

const publicRoutes = [
    { path: "/signin", component: <SignIn /> },
    { path: "/signup", component: <SignUp /> },
    { path: "/address-info", component: <AddressInfo /> },
    { path: "/auth-pass-reset-cover", component: <CoverPasswReset /> },
    { path: "/auth-lockscreen-cover", component: <CoverLockScreen /> },
    { path: "/auth-logout-cover", component: <CoverLogout /> },
    { path: "/auth-success-msg-cover", component: <CoverSuccessMsg /> },
    { path: "/twostep-authentication", component: <TwosVerify /> },
    { path: "/auth-pass-change-cover", component: <CoverPasswCreate /> },
];

export {
    authProtectedRoutes,
    publicRoutes
};
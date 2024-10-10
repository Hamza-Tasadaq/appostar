import React, { useEffect, useState, useRef } from "react";
import {
    Container,
    DropdownToggle,
    DropdownMenu,
    Dropdown,
    DropdownItem,
    Row,
    Col,
    Card,
    CardBody,
    UncontrolledDropdown,
    Alert
} from "reactstrap";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import EmojiPicker from 'emoji-picker-react';

//Import Icons
import FeatherIcon from "feather-icons-react";

//redux
import { useSelector, useDispatch } from "react-redux";
import {
    getDirectContact as onGetDirectContact,
    getMessages as onGetMessages,
    addMessage as onAddMessage,
    deleteMessage as onDeleteMessage
} from "../../slices/thunks";

import avatar2 from "../../assets/images/users/avatar-2.jpg";
import userDummayImage from "../../assets/images/users/user-dummy-img.jpg";

//Import Scrollbar
import "react-perfect-scrollbar/dist/css/styles.css";
import { createSelector } from "reselect";
import Spinners from "Components/Common/Spinner";
import PersonalInfo from "Components/chat/PersonalInfo";

interface DirectContact {
    id: number,
    roomId: number,
    status: string,
    name: string,
    image: string,
    number: string,
    email: string,
    bgColor: string,
    badge: string | number,
    location: string
}
interface channelsListType {
    id: number,
    name: string,
    unReadMessage?: number,
    image: string,
}
interface chatContactType {
    direactContact?: DirectContact[];
    channelsList?: channelsListType[];
}
// interface contact {
//     id: number,
//     name: string,
//     status: string,
//     roomId: number,
//     image?: string
// }
// interface chatContactDataTye {
//     id: number,
//     title: string,
//     contacts?: contact[],
// }
type UserMessage = {
    id: number;
    from_id: number;
    to_id: number;
    msg: string | null;
    reply: { sender: string, msg: string, id: number },
    isImages: boolean;
    has_images: { id: number; image: string }[];
    datetime: string;
};

type userMessagesType = {
    id: number;
    roomId: number;
    sender: string;
    createdAt: string;
    usermessages: UserMessage[];
};

const Chat = () => {
    const userChatShow: any = useRef();

    const dispatch = useDispatch<any>();
    const [isInfoDetails, setIsInfoDetails] = useState<boolean>(false);
    const [Chat_Box_Username, setChat_Box_Username] = useState<any>("Lisa Parker");
    const [user_Status, setUser_Status] = useState<string | null>("online");
    const [Chat_Box_Image, setChat_Box_Image] = useState<any>(avatar2);
    const [currentRoomId, setCurrentRoomId] = useState<any>(1);
    const [curMessage, setcurMessage] = useState<string>("");
    const [settings_Menu, setsettings_Menu] = useState<boolean>(false);
    const [reply, setreply] = useState<any>("");
    const [emojiPicker, setemojiPicker] = useState<boolean>(false);

    const selectLayoutState = (state: any) => state.Chat;
    const chatProperties = createSelector(
        selectLayoutState,
        (state: any) => ({
            chats: state?.chats,
            messages: state?.messages,
            loading: state?.loading
        })
    );


    // Inside your component
    const {
        chats, messages, loading
    } = useSelector(chatProperties);
    const [isLoading, setLoading] = useState(loading);


    //Info details offcanvas
    const toggleInfo = () => {
        setIsInfoDetails(!isInfoDetails);
    };

    const toggleSettings = () => {
        setsettings_Menu(!settings_Menu);
    };
    useEffect(() => {
        dispatch(onGetDirectContact());
        dispatch(onGetMessages(currentRoomId));
    }, [dispatch, currentRoomId]);

    //Use For Chat Box
    const userChatOpen = (chats: any) => {
        setChat_Box_Username(chats.name);
        setCurrentRoomId(chats.roomId);
        setChat_Box_Image(chats.image);
        setUser_Status(chats.status)
        dispatch(onGetMessages(chats.roomId));
        if (window.innerWidth < 892) {
            userChatShow.current.classList.add("user-chat-show");
        }
        // remove unread msg on read in chat
        var unreadMessage: any = document.getElementById("unread-msg-user" + chats.id);
        var msgUser: any = document.getElementById("msgUser" + chats.id);
        if (unreadMessage) {
            unreadMessage.style.display = "none";
        }
        if (msgUser) {
            msgUser.classList.remove("unread-msg-user");
        }
    };

    const backToUserChat = () => {
        userChatShow.current.classList.remove("user-chat-show");
    }

    // add message
    const addMessage = () => {
        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        if (curMessage !== '') {
            const message: any = {
                id: Math.floor(Math.random() * 100),
                from_id: 1,
                to_id: 2,
                msg: curMessage,
                reply: reply,
                isImages: false,
                has_images: [],
                datetime: `${hours}:${minutes} ${ampm}`
            };
            dispatch(onAddMessage(message));
        }
        setcurMessage("");
        setreply('');
    };

    const chatRef = useRef<any>(null);
    useEffect(() => {
        if (chatRef.current?.el) {
            chatRef.current.getScrollElement().scrollTop = chatRef.current.getScrollElement().scrollHeight;
        }
    }, [messages])

    const onKeyPress = (e: any) => {
        const { key, value } = e;
        if (key === "Enter") {
            e.preventDefault();
            setcurMessage(value);
            addMessage();
        }
    };

    // Copy Message
    const handleClick = (ele: HTMLElement) => {
        const copy = ele.closest(".chat-list")?.querySelector('.ctext-content')?.innerHTML;
        if (copy) {
            navigator.clipboard.writeText(copy);
        }

        const copyClipboardElement = document.getElementById("copyClipBoard");
        if (copyClipboardElement) {
            copyClipboardElement.style.display = "block";
            setTimeout(() => {
                copyClipboardElement.style.display = "none";
            }, 1000);
        }
    };

    // emoji
    const [emojiArray, setemojiArray] = useState<any>([]);
    const onEmojiClick = (event: any, emojiObject: any) => {
        setemojiArray([...emojiArray, event.emoji]);
        setcurMessage(curMessage + event.emoji);
    };

    document.title = "Chat";
    return (
        <React.Fragment>
            <div className="page-content no-padding-x overflow-x-hidden-md padding-top-sm">
                <Container fluid>
                    <div className="chat-wrapper d-lg-flex gap-1 mx-n4 mt-n4 p-1">
                        <div className="chat-leftsidebar minimal-border">
                            <div className="px-4 pt-4 mb-2">
                                <div className="d-flex align-items-start">
                                    <div className="flex-grow-1">
                                        <h5 className="">Chats</h5>
                                    </div>
                                </div>
                            </div>
                            {/* <Nav tabs className="nav nav-tabs nav-tabs-custom nav-success nav-justified mb-3">
                                <NavItem>
                                    <NavLink
                                        style={{ cursor: "pointer" }}
                                        className={classnames("text-start", {
                                            active: customActiveTab === "1",
                                        })}
                                        onClick={() => {
                                            toggleCustom("1");
                                        }}

                                    >
                                        Chats
                                    </NavLink>
                                </NavItem>
                            </Nav> */}

                            {/* <TabContent activeTab={customActiveTab} className="text-muted"> */}
                            {/* <TabPane tabId="1" id="chats"> */}
                            {
                                isLoading ? <Spinners setLoading={setLoading} />
                                    :
                                    <SimpleBar className="chat-room-list pt-3" style={{ margin: "-16px 0px 0px" }}>
                                        <div className="d-flex align-items-center px-4 mb-2">
                                            <div className="flex-grow-1">
                                                <h4 className="mb-0 fs-11 text-muted text-uppercase">
                                                    Direct Messages
                                                </h4>
                                            </div>
                                        </div>

                                        <div className="chat-message-list">
                                            <ul className="list-unstyled chat-list chat-user-list users-list" id="userList">
                                                {(chats || []).map((chatContact: chatContactType) => (
                                                    chatContact.direactContact && (chatContact.direactContact || [])?.map((chat) => (
                                                        <li key={chat.id + chat.status} className={Chat_Box_Username === chat.name ? "active" : ""}>
                                                            <Link to="#!" onClick={() => userChatOpen(chat)} className={chat.badge && chat.badge !== 0 ? "unread-msg-user" : ''} id={"msgUser" + chat.id}>
                                                                <div className="d-flex align-items-center">
                                                                    <div className={`flex-shrink-0 chat-user-img ${chat.status === 'Online' ? "online" : "away"} align-self-center me-2 ms-0`}>
                                                                        <div className="avatar-xxs">
                                                                            {chat.image ? (
                                                                                <img src={chat.image} className="rounded-circle img-fluid userprofile" alt="" />
                                                                            ) : (
                                                                                <div className={"avatar-title rounded-circle bg-" + chat.bgColor + " userprofile"}>
                                                                                    {chat.name.charAt(0)}
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                        <span className="user-status"></span>
                                                                    </div>
                                                                    <div className="flex-grow-1 overflow-hidden">
                                                                        <p className="text-truncate mb-0">{chat.name}</p>
                                                                    </div>
                                                                    {chat.badge &&
                                                                        <div className="flex-shrink-0" id={"unread-msg-user" + chat.id}>
                                                                            <span className="badge bg-dark-subtle text-body rounded p-1">{chat.badge}</span>
                                                                        </div>
                                                                    }
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    )))
                                                )}
                                            </ul>
                                        </div>
                                    </SimpleBar>
                            }
                            {/* </TabPane> */}
                            {/* </TabContent> */}
                        </div>

                        <div className="user-chat w-100 overflow-hidden minimal-border" ref={userChatShow}>
                            <div className="chat-content d-lg-flex">
                                <div className="w-100 overflow-hidden position-relative">
                                    <div className="position-relative">
                                        <div className="p-3 user-chat-topbar">
                                            <Row className="align-items-center">
                                                <Col sm={4} xs={8}>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0 d-block d-lg-none me-3">
                                                            <Link to="#" onClick={backToUserChat} className="user-chat-remove fs-18 p-1"                              >
                                                                <i className="ri-arrow-left-s-line align-bottom"></i>
                                                            </Link>
                                                        </div>
                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <button onClick={toggleInfo} className="btn p-0 d-flex align-items-center">
                                                                <div className="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0">
                                                                    {Chat_Box_Image === undefined ? (
                                                                        <img src={userDummayImage} className="rounded-circle avatar-xs" alt="" />
                                                                    ) : (
                                                                        <img src={Chat_Box_Image} className="rounded-circle avatar-xs" alt="" />
                                                                    )}
                                                                    <span className="user-status"></span>
                                                                </div>
                                                                <div className="flex-grow-1 overflow-hidden">
                                                                    <h5 className="text-truncate mb-0 fs-16">
                                                                        <a
                                                                            className="text-reset username"
                                                                            data-bs-toggle="offcanvas"
                                                                            href="#userProfileCanvasExample"
                                                                            aria-controls="userProfileCanvasExample"
                                                                        >
                                                                            {Chat_Box_Username}
                                                                        </a>
                                                                    </h5>
                                                                    <p className="text-truncate text-muted fs-14 mb-0 userStatus">
                                                                        <small>{user_Status === null ? "24 Members" : user_Status}</small>
                                                                    </p>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col sm={8} xs={4}>
                                                    <ul className="list-inline user-chat-nav text-end mb-0">
                                                        <li className="list-inline-item d-none d-lg-inline-block m-0">
                                                            <button type="button" className="btn btn-ghost-secondary btn-icon material-shadow-none" onClick={toggleInfo}                              >
                                                                <FeatherIcon icon="info" className="icon-sm" />
                                                            </button>
                                                        </li>

                                                        <li className="list-inline-item m-0">
                                                            <Dropdown isOpen={settings_Menu} toggle={toggleSettings}>
                                                                <DropdownToggle className="btn btn-ghost-secondary btn-icon material-shadow-none" tag="button">
                                                                    <FeatherIcon icon="more-vertical" className="icon-sm" />
                                                                </DropdownToggle>
                                                                <DropdownMenu>
                                                                    <DropdownItem href="#" className="d-block d-lg-none user-profile-show">
                                                                        <i className="ri-user-2-fill align-bottom text-muted me-2"></i>
                                                                        View Profile
                                                                    </DropdownItem>
                                                                    <DropdownItem href="#">
                                                                        <i className="ri-inbox-archive-line align-bottom text-muted me-2"></i>
                                                                        Archive
                                                                    </DropdownItem>
                                                                    <DropdownItem href="#">
                                                                        <i className="ri-mic-off-line align-bottom text-muted me-2"></i>
                                                                        Muted
                                                                    </DropdownItem>
                                                                    <DropdownItem href="#">
                                                                        <i className="ri-delete-bin-5-line align-bottom text-muted me-2"></i>
                                                                        Delete
                                                                    </DropdownItem>
                                                                </DropdownMenu>
                                                            </Dropdown>
                                                        </li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </div>

                                        <div className="position-relative" id="users-chat">
                                            <div className="chat-conversation p-3 p-lg-4 simplebar-scrollable-y" id="chat-conversation">
                                                {
                                                    isLoading ? <Spinners setLoading={setLoading} />
                                                        :
                                                        <SimpleBar ref={chatRef} style={{ height: "100%" }}>
                                                            <ul className="list-unstyled chat-conversation-list" id="users-conversation">
                                                                {
                                                                    (messages || []).map((message: userMessagesType) => (
                                                                        message.usermessages.map((userChat: UserMessage, key: number) => (
                                                                            <li className={userChat.to_id === 1 ? "chat-list left" : "chat-list right"} key={key}>
                                                                                <div className="conversation-list">
                                                                                    {message.sender === Chat_Box_Username && (
                                                                                        userChat.to_id === 1 &&
                                                                                        <div className="chat-avatar">
                                                                                            {Chat_Box_Image === undefined ?
                                                                                                <img src={userDummayImage} alt="" />
                                                                                                :
                                                                                                <img src={Chat_Box_Image} alt="" />
                                                                                            }
                                                                                        </div>
                                                                                    )}
                                                                                    <div className="user-chat-content">
                                                                                        <div className="ctext-wrap">
                                                                                            {
                                                                                                userChat.isImages === true ?
                                                                                                    <div className="message-img mb-0">
                                                                                                        {
                                                                                                            userChat.has_images && userChat.has_images.map((img: { id: number; image: string }, key: number) => (
                                                                                                                <div className="message-img-list" key={key}>
                                                                                                                    <div>
                                                                                                                        <a className="popup-img d-inline-block" href={img.image}>
                                                                                                                            <img src={img.image} alt="" className="rounded border" />
                                                                                                                        </a>
                                                                                                                    </div>
                                                                                                                    <div className="message-img-link">
                                                                                                                        <ul className="list-inline mb-0">
                                                                                                                            <UncontrolledDropdown tag="li" className="list-inline-item">
                                                                                                                                <DropdownToggle href="#" tag="a">
                                                                                                                                    <i className="ri-more-fill"></i>
                                                                                                                                </DropdownToggle>
                                                                                                                                <DropdownMenu>
                                                                                                                                    <DropdownItem href="#" className="reply-message" onClick={() => setreply({ sender: message.sender, msg: userChat.msg, id: userChat.id })}>
                                                                                                                                        <i className="ri-reply-line me-2 text-muted align-bottom"></i>
                                                                                                                                        Reply
                                                                                                                                    </DropdownItem>
                                                                                                                                    <DropdownItem href="#">
                                                                                                                                        <i className="ri-share-line me-2 text-muted align-bottom"></i>
                                                                                                                                        Forward
                                                                                                                                    </DropdownItem>
                                                                                                                                    <DropdownItem href="#" onClick={(e: any) => handleClick(e.target)}>
                                                                                                                                        <i className="ri-file-copy-line me-2 text-muted align-bottom"></i>
                                                                                                                                        Copy
                                                                                                                                    </DropdownItem>
                                                                                                                                    <DropdownItem href="#">
                                                                                                                                        <i className="ri-bookmark-line me-2 text-muted align-bottom"></i>
                                                                                                                                        Bookmark
                                                                                                                                    </DropdownItem>
                                                                                                                                    <DropdownItem href="#" onClick={() => dispatch(onDeleteMessage(userChat.id))}>
                                                                                                                                        <i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>
                                                                                                                                        Delete
                                                                                                                                    </DropdownItem>
                                                                                                                                </DropdownMenu>
                                                                                                                            </UncontrolledDropdown>
                                                                                                                        </ul>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            ))
                                                                                                        }
                                                                                                    </div>
                                                                                                    :
                                                                                                    <>
                                                                                                        <div className="ctext-wrap-content">
                                                                                                            {
                                                                                                                userChat.reply ?
                                                                                                                    <>
                                                                                                                        <div className="replymessage-block mb-0 d-flex align-items-start">
                                                                                                                            <div className="flex-grow-1">
                                                                                                                                <h5 className="conversation-name">{userChat.reply.sender}</h5>
                                                                                                                                <p className="mb-0">{userChat.reply.msg}</p>
                                                                                                                            </div>
                                                                                                                            <div className="flex-shrink-0">
                                                                                                                                <button type="button" className="btn btn-sm btn-link mt-n2 me-n3 font-size-18">
                                                                                                                                </button>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                        <p className="mb-0 ctext-content mt-1">{userChat.msg}</p>
                                                                                                                    </>
                                                                                                                    :
                                                                                                                    <p className="mb-0 ctext-content">
                                                                                                                        {userChat.msg}
                                                                                                                    </p>
                                                                                                            }
                                                                                                        </div>
                                                                                                        <UncontrolledDropdown className="align-self-start message-box-drop">
                                                                                                            <DropdownToggle
                                                                                                                href="#"
                                                                                                                className="btn nav-btn"
                                                                                                                tag="a"
                                                                                                            >
                                                                                                                <i className="ri-more-2-fill"></i>
                                                                                                            </DropdownToggle>
                                                                                                            <DropdownMenu>
                                                                                                                <DropdownItem href="#" className="reply-message" onClick={() => setreply({ sender: message.sender, msg: userChat.msg, id: userChat.id })}>
                                                                                                                    <i className="ri-reply-line me-2 text-muted align-bottom"></i>
                                                                                                                    Reply
                                                                                                                </DropdownItem>
                                                                                                                <DropdownItem href="#">
                                                                                                                    <i className="ri-share-line me-2 text-muted align-bottom"></i>
                                                                                                                    Forward
                                                                                                                </DropdownItem>
                                                                                                                <DropdownItem href="#" onClick={(e: any) => handleClick(e.target)}>
                                                                                                                    <i className="ri-file-copy-line me-2 text-muted align-bottom"></i>
                                                                                                                    Copy
                                                                                                                </DropdownItem>
                                                                                                                <DropdownItem href="#">
                                                                                                                    <i className="ri-bookmark-line me-2 text-muted align-bottom"></i>
                                                                                                                    Bookmark
                                                                                                                </DropdownItem>
                                                                                                                <DropdownItem href="#" onClick={() => dispatch(onDeleteMessage(userChat.id))}>
                                                                                                                    <i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>
                                                                                                                    Delete
                                                                                                                </DropdownItem>
                                                                                                            </DropdownMenu>
                                                                                                        </UncontrolledDropdown>
                                                                                                    </>
                                                                                            }
                                                                                        </div>
                                                                                        <div className="conversation-name">
                                                                                            <small className="text-muted time">
                                                                                                {userChat.datetime}
                                                                                            </small>
                                                                                            <span className="text-success check-message-icon">
                                                                                                <i className="ri-check-double-line align-bottom"></i>
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        )
                                                                        )))
                                                                }
                                                            </ul>
                                                        </SimpleBar>
                                                }
                                            </div>
                                            {/* copy msg */}
                                            <Alert color="warning" className="copyclipboard-alert px-4 fade" id="copyClipBoard" role="alert">Message copied</Alert>
                                            {/* emoji picker */}
                                            {emojiPicker && <EmojiPicker onEmojiClick={onEmojiClick} width={250} height={382} />}
                                        </div>

                                        <div className="chat-input-section p-3 p-lg-4">
                                            <form id="chatinput-form">
                                                <Row className="g-0 align-items-center">
                                                    <div className="col-auto">
                                                        <div className="chat-input-links me-2">
                                                            <div className="links-list-item">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-links text-decoration-none emoji-btn"
                                                                    id="emoji-btn"
                                                                    onClick={() => setemojiPicker(!emojiPicker)}
                                                                >
                                                                    <i className="bx bx-smile align-middle"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col">
                                                        <div className="chat-input-feedback">
                                                            Please Enter a Message
                                                        </div>
                                                        <input
                                                            type="text"
                                                            value={curMessage}
                                                            onKeyDown={onKeyPress}
                                                            onChange={e => setcurMessage(e.target.value)}
                                                            className="form-control chat-input bg-light border-light"
                                                            id="chat-input"
                                                            placeholder="Type your message..."
                                                        />
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="chat-input-links ms-2">
                                                            <div className="links-list-item">
                                                                <button
                                                                    type="button"
                                                                    disabled={curMessage === ""}
                                                                    onClick={() => { addMessage(); setemojiPicker(false); setemojiArray(''); }}
                                                                    className="btn btn-primary chat-send waves-effect waves-light disable"
                                                                >
                                                                    <i className="ri-send-plane-2-fill align-bottom"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Row>
                                            </form>
                                        </div>

                                        <div className={reply ? "replyCard show" : "replyCard"}>
                                            <Card className="mb-0">
                                                <CardBody className="py-3">
                                                    <div className="replymessage-block mb-0 d-flex align-items-start">
                                                        <div className="flex-grow-1">
                                                            <h5 className="conversation-name">{reply && reply.sender}</h5>
                                                            <p className="mb-0">{reply && reply.msg}</p>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <button
                                                                type="button"
                                                                id="close_toggle"
                                                                className="btn btn-sm btn-link mt-n2 me-n3 fs-18"
                                                                onClick={() => setreply("")}
                                                            >
                                                                <i className="bx bx-x align-middle"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div >

            <PersonalInfo
                show={isInfoDetails}
                onCloseClick={() => setIsInfoDetails(false)}
                currentuser={Chat_Box_Username}
                cuurentiseImg={Chat_Box_Image}
            />
        </React.Fragment >
    );
};

export default Chat;

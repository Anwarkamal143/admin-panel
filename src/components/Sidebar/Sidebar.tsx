import {
    Analytics,
    ChartBar,
    ChartLine,
    Envelope,
    FeedBack,
    Home,
    Manage,
    Messages,
    Store,
    Transactions,
    UserThumbail,
} from "@icons"
import {Link} from "react-router-dom";

import {
    ListContainer,
    ListItem,
    SidebarContainer,
    SidebarMenu,
    SidebarWrapper,
    Title,
} from "./sidebar.styled"

export function Sidebar() {
    return (
        <SidebarContainer className="sidebar">
            <SidebarWrapper>
                <SidebarMenu>
                    <Title>Dashboard</Title>
                    <ListContainer>
                        <Link to="/">
                            
                                <ListItem className="active">
                                    <Home
                                        color="gray"
                                        className="sidebar_icon"
                                    />
                                    Home
                                </ListItem>
                            
                        </Link>
                        <ListItem>
                            <Analytics color="gray" className="sidebar_icon" />
                            Analytics
                        </ListItem>
                        <Link to="/sales">

                                <ListItem>
                                    <ChartLine
                                        color="gray"
                                        className="sidebar_icon"
                                    />
                                    Sales
                                </ListItem>
                            
                        </Link>
                    </ListContainer>
                </SidebarMenu>
                <SidebarMenu>
                    <Title>Quick Menu </Title>
                    <ListContainer>
                        <Link to="/users">
                            
                                <ListItem>
                                    <UserThumbail
                                        color="gray"
                                        className="sidebar_icon"
                                    />
                                    Users
                                </ListItem>
                            
                        </Link>
                        <Link to="/users">
                            
                                <ListItem>
                                    <Store
                                        color="gray"
                                        className="sidebar_icon"
                                    />
                                    Store
                                </ListItem>
                            
                        </Link>
                        <Link to="/users">
                            
                                <ListItem>
                                    <Transactions
                                        color="gray"
                                        className="sidebar_icon"
                                    />
                                    Transactions
                                </ListItem>
                            
                        </Link>
                        <Link to="/users">
                            
                                <ListItem>
                                    <ChartBar
                                        color="gray"
                                        className="sidebar_icon"
                                    />
                                    Reports
                                </ListItem>
                            
                        </Link>
                    </ListContainer>
                </SidebarMenu>
                <SidebarMenu>
                    <Title>Notifications </Title>
                    <ListContainer>
                        <Link to="/users">
                            
                                <ListItem>
                                    <Envelope
                                        color="gray"
                                        className="sidebar_icon"
                                    />
                                    Mail
                                </ListItem>
                            
                        </Link>
                        <Link to="/users">
                            
                                <ListItem>
                                    <FeedBack
                                        color="gray"
                                        className="sidebar_icon"
                                    />
                                    FeedBack
                                </ListItem>
                            
                        </Link>
                        <Link to="/users">
                            
                                <ListItem>
                                    <Messages
                                        color="gray"
                                        className="sidebar_icon"
                                    />
                                    Messages
                                </ListItem>
                            
                        </Link>
                    </ListContainer>
                </SidebarMenu>
                <SidebarMenu>
                    <Title>Staff </Title>
                    <ListContainer>
                        <Link to="/users">
                            
                                <ListItem>
                                    <Manage
                                        color="gray"
                                        className="sidebar_icon"
                                    />
                                    Manage
                                </ListItem>
                            
                        </Link>
                        <Link to="/users">
                            
                                <ListItem>
                                    <Analytics
                                        color="gray"
                                        className="sidebar_icon"
                                    />
                                    Analytics
                                </ListItem>
                            
                        </Link>
                        <Link to="/users">
                            
                                <ListItem>
                                    <ChartBar
                                        color="gray"
                                        className="sidebar_icon"
                                    />
                                    Reports
                                </ListItem>
                            
                        </Link>
                    </ListContainer>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

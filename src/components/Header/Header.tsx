import { Bell, Globe, Settings, UserThumbail } from "@icons"

import {
    Avatar,
    Bellbadge,
    HeaderContainer,
    HeaderWrapper,
    IconsWrapper,
    LeftSide,
    LogoWrapper,
    RightSide,
} from "./header.styled"
export function Header() {
    return (
        <HeaderContainer className="header">
            <HeaderWrapper className="header-wrapper">
                <LeftSide className="header_left">
                    <LogoWrapper>AdminMe</LogoWrapper>
                </LeftSide>
                <RightSide className="header_right">
                    <IconsWrapper>
                        <Bell color={"gray"} />
                        <Bellbadge>2</Bellbadge>
                    </IconsWrapper>
                    <IconsWrapper>
                        <Globe color={"gray"} />
                    </IconsWrapper>
                    <IconsWrapper>
                        <Settings color={"gray"} />
                    </IconsWrapper>
                    <Avatar>
                        <UserThumbail color="gray" />
                        {/* <ProfileImage /> */}
                    </Avatar>
                </RightSide>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

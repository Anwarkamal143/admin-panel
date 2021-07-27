import { Button, Image } from "@components"
import { Visiblity } from "@icons"
import {
    SmTitle,
    WidgetContainer,
    WidgetSmallListItem,
    WidgetSmallListItems,
    WidgetSmUser,
    WidgetSmUserName,
    WidgetSmUserTitle,
} from "./widgetSm.styled"

const WidgetSm = () => {
    return (
        <WidgetContainer>
            <SmTitle>New Join Members</SmTitle>
            <WidgetSmallListItems>
                <WidgetSmallListItem>
                    <Image
                        round={true}
                        className="userImages"
                        ssr
                        src={"/images/user1.jpg"}
                        alt="default user"
                    />
                    <WidgetSmUser>
                        <WidgetSmUserName>Anna Keller</WidgetSmUserName>
                        <WidgetSmUserTitle>Software Engineer</WidgetSmUserTitle>
                    </WidgetSmUser>
                    <Button
                        className="sm_button"
                        main={{
                            as: "div",
                            className: "mainContent",
                        }}>
                        <Visiblity className="leftIcon" />
                        Display
                    </Button>
                </WidgetSmallListItem>
                <WidgetSmallListItem>
                    <Image
                        round={true}
                        className="userImages"
                        ssr
                        src={"/images/user3.jpg"}
                        alt="default user"
                    />
                    <WidgetSmUser>
                        <WidgetSmUserName>Anna Keller</WidgetSmUserName>
                        <WidgetSmUserTitle>Software Engineer</WidgetSmUserTitle>
                    </WidgetSmUser>
                    <Button
                        className="sm_button"
                        main={{
                            as: "div",
                            className: "mainContent",
                        }}>
                        <Visiblity className="leftIcon" />
                        Display
                    </Button>
                </WidgetSmallListItem>
                <WidgetSmallListItem>
                    <Image
                        round={true}
                        className="userImages"
                        ssr
                        src={"/images/user1.jpg"}
                        alt="default user"
                    />
                    <WidgetSmUser>
                        <WidgetSmUserName>Anna Keller</WidgetSmUserName>
                        <WidgetSmUserTitle>Software Engineer</WidgetSmUserTitle>
                    </WidgetSmUser>
                    <Button
                        className="sm_button"
                        main={{
                            as: "div",
                            className: "mainContent",
                        }}>
                        <Visiblity className="leftIcon" />
                        Display
                    </Button>
                </WidgetSmallListItem>
                <WidgetSmallListItem>
                    <Image
                        round={true}
                        className="userImages"
                        ssr
                        src={"/images/user3.jpg"}
                        alt="default user"
                    />
                    <WidgetSmUser>
                        <WidgetSmUserName>Anna Keller</WidgetSmUserName>
                        <WidgetSmUserTitle>Software Engineer</WidgetSmUserTitle>
                    </WidgetSmUser>
                    <Button
                        className="sm_button"
                        main={{
                            as: "div",
                            className: "mainContent",
                        }}>
                        <Visiblity className="leftIcon" />
                        Display
                    </Button>
                </WidgetSmallListItem>
                <WidgetSmallListItem>
                    <Image
                        round={true}
                        className="userImages"
                        ssr
                        src={"/images/user1.jpg"}
                        alt="default user"
                    />
                    <WidgetSmUser>
                        <WidgetSmUserName>Anna Keller</WidgetSmUserName>
                        <WidgetSmUserTitle>Software Engineer</WidgetSmUserTitle>
                    </WidgetSmUser>
                    <Button
                        className="sm_button"
                        main={{
                            as: "div",
                            className: "mainContent",
                        }}>
                        <Visiblity className="leftIcon" />
                        Display
                    </Button>
                </WidgetSmallListItem>
            </WidgetSmallListItems>
        </WidgetContainer>
    )
}

export { WidgetSm }

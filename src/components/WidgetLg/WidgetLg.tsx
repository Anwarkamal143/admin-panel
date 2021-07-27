import { Button, Image } from "@components"

import {
    CustomerName,
    Heading,
    LgTitle,
    Row,
    RowItem,
    Table,
    Tbody,
    Thead,
    WidgetContainer,
} from "./widgetLg.styled"

const WidgetLg = () => {
    return (
        <WidgetContainer>
            <LgTitle>Latest transactions</LgTitle>
            <Table>
                <Thead>
                    <Row>
                        <Heading>Customer</Heading>
                        <Heading>Date</Heading>
                        <Heading>Amount</Heading>
                        <Heading>Status</Heading>
                    </Row>
                </Thead>
                <Tbody>
                    <Row>
                        <RowItem className="widgetLgUser">
                            <Image
                                round={true}
                                ssr
                                parentElement={{
                                    className: "lg_user_img",
                                }}
                                src={"/images/user3.jpg"}
                                alt="default user"
                            />
                            <CustomerName>Susan Carol</CustomerName>
                        </RowItem>
                        <RowItem className="widgetLgDate">2 June 2012</RowItem>
                        <RowItem className="widgetLgAmout">$122.00</RowItem>
                        <RowItem className="widgetLgStatus">
                            <Button className="lg_widget_btn approved">
                                Approved
                            </Button>
                        </RowItem>
                    </Row>
                    <Row>
                        <RowItem className="widgetLgUser">
                            <Image
                                round={true}
                                ssr
                                parentElement={{
                                    className: "lg_user_img",
                                }}
                                src={"/images/user3.jpg"}
                                alt="default user"
                            />
                            <CustomerName>Susan Carol</CustomerName>
                        </RowItem>
                        <RowItem className="widgetLgDate">2 June 2012</RowItem>
                        <RowItem className="widgetLgAmout">$122.00</RowItem>
                        <RowItem className="widgetLgStatus">
                            <Button className="lg_widget_btn declined">
                                Declined
                            </Button>
                        </RowItem>
                    </Row>
                    <Row>
                        <RowItem className="widgetLgUser">
                            <Image
                                round={true}
                                ssr
                                parentElement={{
                                    className: "lg_user_img",
                                }}
                                src={"/images/user3.jpg"}
                                alt="default user"
                            />
                            <CustomerName>Susan Carol</CustomerName>
                        </RowItem>
                        <RowItem className="widgetLgDate">2 June 2012</RowItem>
                        <RowItem className="widgetLgAmount">$122.00</RowItem>
                        <RowItem className="widgetLgStatus">
                            <Button className="lg_widget_btn pending">
                                Pending
                            </Button>
                        </RowItem>
                    </Row>
                    <Row>
                        <RowItem className="widgetLgUser">
                            <Image
                                round={true}
                                ssr
                                parentElement={{
                                    className: "lg_user_img",
                                }}
                                src={"/images/user3.jpg"}
                                alt="default user"
                            />
                            <CustomerName>Susan Carol</CustomerName>
                        </RowItem>
                        <RowItem className="widgetLgDate">2 June 2012</RowItem>
                        <RowItem className="widgetLgAmount">$122.00</RowItem>
                        <RowItem className="widgetLgStatus">
                            <Button className="lg_widget_btn pending">
                                Pending
                            </Button>
                        </RowItem>
                    </Row>
                </Tbody>
            </Table>
        </WidgetContainer>
    )
}

export { WidgetLg }

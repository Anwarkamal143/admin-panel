import styled from "styled-components"

export const WidgetContainer = styled.div`
    flex: 2;
    box-shadow: ${({ theme }) => theme.shadows[0]};
    padding: ${({ theme }) => theme.space[5]};
`
export const LgTitle = styled.span`
    font-size: ${({ theme }) => theme.fontSizes[6]};
    font-weight: 600;
`
export const Table = styled.table`
    width: 100%;
    border-spacing: ${({ theme }) => theme.space[4]}; ;
`
export const Thead = styled.thead``
export const Tbody = styled.tbody``
export const Row = styled.tr``
export const Heading = styled.th`
    text-align: left;
`
export const RowItem = styled.td`
    .lg_user_img {
        height: ${({ theme }) => theme.space[13]};
        width: ${({ theme }) => theme.space[13]};
        object-fit: cover;
        margin-right: ${({ theme }) => theme.space[3]};
        img {
            border-radius: 50%;
        }
    }
    .lg_widget_btn {
        font-size: ${({ theme }) => theme.fontSizes[3]};

        padding: ${({ theme }) => `${theme.space[1]} ${theme.space[2]}`};
        /* border-radius: 10px; */
        &.approved {
            background-color: #e5faf2;
            color: #3bb077;
        }
        &.declined {
            background-color: #fff0f1;
            color: #d95087;
        }
        &.pending {
            background-color: #ebf1fe;
            color: #2a7ade;
        }
    }
    &.widgetLgUser {
        display: flex;
        align-items: center;
    }
    &.widgetLgAmount,
    &.widgetLgDate {
        font-weight: 300;
    }
`
export const CustomerName = styled.span``

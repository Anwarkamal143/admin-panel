import styled from "styled-components"

export const WidgetContainer = styled.div`
    flex: 1;
    box-shadow: ${({ theme }) => theme.shadows[0]};
    padding: ${({ theme }) => theme.space[5]};
    margin-right: ${({ theme }) => theme.space[5]}; ;
`
export const SmTitle = styled.span`
    font-size: ${({ theme }) => theme.fontSizes[6]};
    font-weight: 600;
`
export const WidgetSmallListItems = styled.ul`
    padding: 0;
    margin: 0;
`
export const WidgetSmallListItem = styled.li`
    list-style: none;
    .image-comp {
        height: ${({ theme }) => theme.space[13]};
        width: ${({ theme }) => theme.space[13]};
        object-fit: cover;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: ${({ theme }) => theme.space[3]};
    .sm_button {
        padding: ${({ theme }) => `${theme.space[0]} ${theme.space[2]}`};
        border-radius: 10px;
    }
    .mainContent {
        display: flex;
        align-items: center;
        font-size: ${({ theme }) => theme.fontSizes[3]};
        color: ${({ theme }) => theme.colors.grey50};
    }
    .leftIcon {
        width: 01.2rem;
    }
`
export const WidgetSmUser = styled.div`
    display: flex;
    flex-direction: column;
`
export const WidgetSmUserTitle = styled.span`
    font-weight: 300;
`
export const WidgetSmUserName = styled.span`
    font-weight: 600;
`

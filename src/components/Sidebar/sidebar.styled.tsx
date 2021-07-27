import styled from "styled-components"

export const SidebarContainer = styled.div`
    flex: 1;
    /* 50 for header and 10 for margin top = 60px */
    height: calc(100vh - 60px);
    background-color: rgb(251, 251, 255);
    position: sticky;
    top: 50px;
`
export const SidebarWrapper = styled.div``
export const SidebarMenu = styled.div`
    margin-bottom: ${({ theme }) => theme.space[2]};
    padding: 0 ${({ theme }) => theme.space[3]}; ;
`
export const Title = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes[2]};
    color: ${({ theme }) => theme.colors.grey30};
`
export const ListContainer = styled.ul`
    list-style: none;

    padding: ${({ theme }) => theme.space[1]};
`
export const ListItem = styled.li`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: ${({ theme }) => theme.space[1]};
    border-radius: 10px;
    &.active,
    &:hover {
        background-color: ${({ theme }) => theme.colors.grey10};
    }
    .sidebar_icon {
        margin-right: ${({ theme }) => theme.space[1]};
        font-size: ${({ theme }) => theme.fontSizes[3]};
    }
`

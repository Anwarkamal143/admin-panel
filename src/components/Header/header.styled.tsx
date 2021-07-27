import styled from "styled-components"
export const HeaderContainer = styled.div`
    width: 100%;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.white};
    position: sticky;
    top: 0;
    z-index: ${({ theme }) => theme.zindexes.header}; ;
`
export const HeaderWrapper = styled.div`
    height: 100%;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Avatar = styled.div`
    cursor: pointer;
`
export const LeftSide = styled.div``
export const RightSide = styled.div`
    display: flex;
    align-items: center;
`
export const LogoWrapper = styled.span`
    font-weight: bold;
    font-size: 30px;
    cursor: pointer;
    color: darkblue;
`
export const IconsWrapper = styled.div`
    position: relative;
    cursor: pointer;
    margin-right: 0.7rem;
`
export const Bellbadge = styled.span`
    position: absolute;
    top: -8px;
    right: 0;
    width: 16px;
    height: 16px;
    font-size: 0.9rem;
    background-color: red;
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

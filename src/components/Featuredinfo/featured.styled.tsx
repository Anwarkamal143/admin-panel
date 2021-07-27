import styled from "styled-components"

export const FeaturedInfoWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
export const FeaturedItem = styled.div`
    flex: 1;
    margin: 0px ${({ theme }) => theme.space[3]};
    padding: ${({ theme }) => theme.space[5]};
    border-radius: 10px;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.shadows[0]};
`
export const FeaturedTitle = styled.span`
    font-size: ${({ theme }) => theme.fontSizes[5]};
`
export const FeaturedSubTitle = styled.span`
    font-size: ${({ theme }) => theme.fontSizes[3]};
    color: ${({ theme }) => theme.colors.grey50}; ;
`
export const FeaturedMoneyContainer = styled.div`
    margin: ${({ theme }) => theme.space[2]} 0;
    display: flex;
    align-items: center;
`
export const FeaturedMoeny = styled.span`
    font-size: ${({ theme }) => theme.fontSizes[8]};
    font-weight: 600;
`
export const FeaturedMoenyRate = styled.span`
    display: flex;
    align-items: center;
    margin-left: ${({ theme }) => theme.space[4]};
    .featuredIcon {
        margin-left: ${({ theme }) => theme.space[1]};
        /* font-size: ${({ theme }) => theme.fontSizes[0]}; */
        width: 22%;
        color: green;
    }
    .featuredIcon.negative {
        color: red;
    }
`

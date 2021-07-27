import styled from "styled-components"

export const ChartContainer = styled.div`
    margin: ${({ theme }) => theme.space[3]};
    padding: ${({ theme }) => theme.space[4]};
    box-shadow: ${({ theme }) => theme.shadows[0]};
`
export const ChartTitle = styled.h3`
    margin-bottom: ${({ theme }) => theme.space[4]};
`

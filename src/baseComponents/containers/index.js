import styled from "styled-components"

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
`;


export const BlockContainer = styled.div`
    display: flex;
    background-color: ${props => props.theme.backgroundColor};
    flex-direction: column
`
export const BlockContainerInnerWrapper = styled.div`
 padding: 32px 255px;
 `
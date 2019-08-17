import styled from "styled-components"

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BlockContainer = styled.div`
    display: flex;
    background-color: ${props => props.theme.backgroundColor};
    padding: 32px 255px;
`
import styled from "styled-components"

const BaseTitle = styled.span`
    color: ${props => props.theme.primaryTextColor};
    font-weight: 700;
`;
export const TitleLabel = styled(BaseTitle)`
    font-size: 64px;
`;
export const SubTitleLabel = styled(BaseTitle)`
    font-size: 48px;
`
import styled from "styled-components"

const BaseText = styled.span`
    letter-spacing: 0.05em;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

const BaseTitle = styled(BaseText)`
    color: ${props => props.theme.primaryTextColor};
    font-weight: 700;
    padding-bottom: 20px
`;

export const TitleLabel = styled(BaseTitle)`
    font-size: 64px;
`;

export const SubTitleLabel = styled(BaseTitle)`
    font-size: 48px;
`;

export const Text = styled(BaseText)`
    font-size: 26px;
    line-height: 36px;
    color: ${props => props.theme.primaryTextColor};
`;

export const SmallText = styled(Text)`
    font-size: 16px;
    line-height: 22px;
`;

export const CaptionText = styled(BaseText)`
    font-size: 16px;
    color: ${props => props.theme.captionTextColor};
`;
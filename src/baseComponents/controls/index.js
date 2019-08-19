import styled from "styled-components"


export const BaseInput = styled.input`
    background-color: ${props => props.theme.inputBackgroundColor}
    color: ${props => props.theme.inputTextColor}
    padding: 18px 45px;
    width: 100%;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    font-size: 18px;
    ::placeholder {
        color: ${props => props.theme.inputTextColor}
    }
`;

export const BaseButton = styled.button`
    background-color: ${props => props.theme.inputBackgroundColor}
    color: ${props => props.theme.primaryTextColor}
    font-size: 18px;
    font-weight: 700;
    border: 0px solid #FFFFFF;
    border-radius: 5px;
    width: 100%;
    letter-spacing: 0.05em;
    cursor: pointer;
    &:active {
        background-color: ${props => props.theme.inputTextColor}
    }
    
`
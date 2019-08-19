import React from "react";
import {useState} from "react"
import {BlockContainer, RowContainer} from "../../../baseComponents/containers";
import {CaptionText, SmallText, SubTitleLabel, Text, TitleLabel} from "../../../baseComponents/labels";
import {values} from "../../../resources/strings/rus";
import {
    ButtonWrapper,
    InputWrapper,
    MainBlockEmailInputArea,
    MainBlockImageArea,
    MainBlockInfoArea,
    MainBlockInnerWrapper,
    MainBlockMessageArea, MainBlockNavigationArea, NavigationLinkContainer
} from "./styled";
import {BaseButton, BaseInput} from "../../../baseComponents/controls";

const HeaderBlock = () => {

    const [email, changeEmail] = useState("");

    return (
        <BlockContainer>
            <RowContainer>
                <MainBlockInnerWrapper>
                    <MainBlockInfoArea>
                        <SubTitleLabel>
                            {values.APP_NAME}
                        </SubTitleLabel>
                        <MainBlockMessageArea>
                            <TitleLabel>
                                {values.MAIN_BLOCK_TITLE}
                            </TitleLabel>
                            {values.MAIN_BLOCK_MESSAGES.map((value, idx) =>
                                <Text key={idx}>
                                    {value}
                                </Text>
                            )}
                            <MainBlockEmailInputArea>
                                <InputWrapper>
                                    <BaseInput placeholder={values.MAIN_BLOCK_INPUT_PLACEHOLDER} value={email}
                                               onChange={val => {
                                                   changeEmail(val.target.value)
                                               }}/>
                                </InputWrapper>
                                <ButtonWrapper>
                                    <BaseButton>
                                        {values.MAIN_BLOCK_BUTTON_PLACEHOLDER}
                                    </BaseButton>
                                </ButtonWrapper>
                            </MainBlockEmailInputArea>
                            <CaptionText>
                                {values.MAIN_BLOCK_CAPTION_TEXT}
                            </CaptionText>
                        </MainBlockMessageArea>
                        <Text>
                            {values.MAIN_BLOCK_DETAILS}
                        </Text>
                    </MainBlockInfoArea>
                </MainBlockInnerWrapper>
                <MainBlockImageArea>
                    <MainBlockNavigationArea>
                        <NavigationLinkContainer>
                            <SmallText>
                                {values.MAIN_BLOCK_NAVIGATION_FEATURES}
                            </SmallText>
                        </NavigationLinkContainer>
                        <NavigationLinkContainer>
                            <SmallText>
                                {values.MAIN_BLOCK_NAVIGATION_PRICE}
                            </SmallText>
                        </NavigationLinkContainer>
                    </MainBlockNavigationArea>
                </MainBlockImageArea>
            </RowContainer>
        </BlockContainer>);
}
export default HeaderBlock;
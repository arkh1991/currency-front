import React, {useState} from "react";
import {BlockContainer, RowContainer} from "../../../components/baseComponents/containers";
import {CaptionText, SmallText, Text, TitleLabel} from "../../../components/baseComponents/labels";
import {
    AppName,
    AppNameRow,
    ButtonWrapper,
    InputWrapper,
    MainBlockEmailInputArea,
    MainBlockImageArea,
    MainBlockInfoArea,
    MainBlockInnerWrapper,
    MainBlockMessageArea,
    MainBlockNavigationArea,
    NavigationLinkContainer
} from "./styled";
import {BaseButton, BaseInput} from "../../../components/baseComponents/controls";
import {LanguagePicker} from "../../../components/LanguagePicker";
import {useDispatch, useSelector} from "react-redux";
import {setLanguage} from "../../../redux/actions/settings";
import {selectLanguageAsset} from "../../../redux/selectors/settingsReducer";

const HeaderBlock = () => {

    const [email, changeEmail] = useState("");
    const dispatch = useDispatch();
    const values = useSelector(selectLanguageAsset);

    return (
        <BlockContainer>
            <RowContainer>
                <MainBlockInnerWrapper>
                    <MainBlockInfoArea>
                        <AppNameRow>
                            <AppName>
                                {values.APP_NAME}
                            </AppName>
                            <LanguagePicker options={["rus", "en"]}
                                            handleValueChanged={(code) => dispatch(setLanguage(code))}/>
                        </AppNameRow>
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
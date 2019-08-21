import React, {useState} from "react";
import PropTypes from "prop-types";
import {LanguageIconImage, PickerDropdownContainer, PickerWrapper} from "./styled";

export const LanguagePicker = ({options, handleValueChanged}) => {

    const [currentOption, setCurrentOption] = useState(options[0]);
    const [isOpen, setIsOpen] = useState(false);

    const onLanguageClick = (language) => {
        setCurrentOption(language);
        setIsOpen(false);
        handleValueChanged(language);
    }

    return <PickerWrapper>
        <LanguageIconImage onClick={() => setIsOpen(!isOpen)} code={currentOption}/>
        {isOpen && <PickerDropdownContainer> {options.map(value => value === currentOption ? null :
            <LanguageIconImage key={"lang-"+value} onClick={() => {
                onLanguageClick(value)
            }} code={value}/>)} </PickerDropdownContainer>}
    </PickerWrapper>
}

LanguagePicker.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    handleValueChanged: PropTypes.func
}

LanguagePicker.defaultProps = {
    options: ["rus"],
    handleValueChanged: ()=>{}
}
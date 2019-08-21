import {settingActionTypes} from "../../../resources/dictionaries/actionTypes";

export const setLanguage = (code) => ({
    type: settingActionTypes.SET_LANGUAGE,
    code
})
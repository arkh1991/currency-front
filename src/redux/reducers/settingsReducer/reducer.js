import {settingActionTypes} from "../../../resources/dictionaries/actionTypes"
const initState = {
    languageCode: "rus",
    languageAsset: require("../../../resources/strings/rus")
}
export const settingsReducer = (state = initState, action) => {
    switch (action.type) {
        case settingActionTypes.SET_LANGUAGE:{
            return {
                languageCode: action.code,
                languageAsset: require("../../../resources/strings/"+action.code)
            }
        }
        default: return state;
    }
}
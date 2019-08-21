import styled from "styled-components"
import {ColumnContainer} from "../../baseComponents/containers";
export const PickerWrapper = styled.div`
 position:relative;
 display:flex;
`
export const PickerDropdownContainer = styled(ColumnContainer)`
 position:absolute;
 top: 35px;
`
export const LanguageIconImage = styled.div`
  background-image: url(${props=> require('../../../resources/img/locale/' + props.code + '.png')});
  width: 40px;
  height: 32px;
  cursor:pointer;
  background-size: contain;
  background-repeat: no-repeat;
`
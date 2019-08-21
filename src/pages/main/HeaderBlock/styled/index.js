import {BlockContainerInnerWrapper, ColumnContainer, RowContainer} from "../../../../components/baseComponents/containers";
import styled from "styled-components";
import BackgroundImage from "../../../../resources/img/main-bg.png";
import {SubTitleLabel} from "../../../../components/baseComponents/labels";

export const AppNameRow = styled(RowContainer)`
    align-items: center;
`;
export const AppName = styled(SubTitleLabel)`
    margin-right: 25px;
`;
export const MainBlockInfoArea = styled(ColumnContainer)`
    height: 910px;
    justify-content: space-between;
`;

export const MainBlockMessageArea = styled(ColumnContainer)`
    justify-content: space-between;
`;

export const MainBlockImageArea = styled(ColumnContainer)`
    justify-content: space-between;
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    flex: 1;
`;

export const MainBlockInnerWrapper = styled(BlockContainerInnerWrapper)`
    flex: 1;
    padding-right: 150px
`;

export const MainBlockEmailInputArea = styled(RowContainer)`
    padding-top: 35px;
    padding-bottom: 10px;
`;

export const InputWrapper = styled.div`
    display:flex;
    padding-right: 15px;
    flex: 3;
 
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex: 1;
 
`;

export const MainBlockNavigationArea = styled(RowContainer)`
    margin-top: 40px;
    margin-left: 100px;
`;

export const NavigationLinkContainer = styled.div`
    cursor: pointer;
    padding: 12px 12px;
`;

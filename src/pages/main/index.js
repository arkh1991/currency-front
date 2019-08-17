import React from "react";
import {ColumnContainer} from "../../baseComponents/containers";
import {ThemeProvider} from "styled-components";
import {themes as theme} from "../../theme";
import HeaderBlock from "./HeaderBlock";

const MainPage = () => {
    return (<ColumnContainer>
        <ThemeProvider theme={theme.dark}>
            <HeaderBlock/>
        </ThemeProvider>
    </ColumnContainer>)
}

export default MainPage;
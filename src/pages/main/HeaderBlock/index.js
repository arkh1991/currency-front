import React from "react";
import {BlockContainer} from "../../../baseComponents/containers";
import {TitleLabel} from "../../../baseComponents/labels";
import {values} from "../../../resources/strings/rus";

const HeaderBlock = () =>
    <BlockContainer>
        <TitleLabel>
            {values.MAIN_BLOCK_TITLE}
        </TitleLabel>
    </BlockContainer>;
export default HeaderBlock;
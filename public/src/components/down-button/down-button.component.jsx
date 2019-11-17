import React from 'react';
import downButtonLogo from "../../../dist/assets/homapage_next_button.png";
import { DownButtonWrapper, DownButtonLogo } from './down-button.styles';



const DownButton = () => (
    <DownButtonWrapper>
        <DownButtonLogo src={downButtonLogo}/>
    </DownButtonWrapper>
)

export default DownButton;
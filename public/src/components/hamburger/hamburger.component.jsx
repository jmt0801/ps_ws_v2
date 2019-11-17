import React from 'react';
import hamburgerLogo from '../../../dist/assets/Menu_Button.png';

import { HamburgerWrapper, HamburgerLogo } from './hamburger.styles'


const HamburgerMenu = () => (
    <HamburgerWrapper>
        <HamburgerLogo src={hamburgerLogo}/>
    </HamburgerWrapper>
)

export default HamburgerMenu;
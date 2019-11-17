import React from 'react';

import { HomePageContainer, HomePageHeader, HomePageImage, HomePageSubtitleContainer, HomePageSubtitle } from './homepage.styles';
import HamburgerMenu from '../../components/hamburger/hamburger.component';
import DownButton from '../../components/down-button/down-button.component';

const Homepage = () => (
    <HomePageContainer>
        <HomePageHeader>
        <HomePageSubtitleContainer>
            <HomePageSubtitle>Digital</HomePageSubtitle>
            <HomePageSubtitle>Design &</HomePageSubtitle>
            <HomePageSubtitle>Development</HomePageSubtitle>
        </HomePageSubtitleContainer>
        <HamburgerMenu/>
        </HomePageHeader>
        <HomePageImage />
        <DownButton/>
    </HomePageContainer>
);

export default Homepage;
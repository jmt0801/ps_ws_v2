import styled from 'styled-components';
import subtitle from '../../../dist/assets/HomePage SubTitle.png';
import titleImg from '../../../dist/assets/Group 2.png';

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 5px;
    background-color: #BDDBC0;
    height: 100vh;
    border:1px solid red;
    align-items: center
    `


export const HomePageHeader = styled.div`
    width: 82%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1px solid purple;
`


export const HomePageSubtitleContainer = styled.div`
    font-family: 'Abel', sans-serif;
    display: flex;
    flex-direction: column;
    font-size: 17px;
    color: #fffdfd;
    border:1px solid green;
    margin-bottom: 5px;
    width: 140px;

`

export const HomePageSubtitle = styled.h3`
    align-content: center;
    text-transform: uppercase;
    margin: 0;
    font-weight: lighter;


`

export const HomePageImage = styled.div`
    background: url(${titleImg}) no-repeat center center;
    background-size: 100%;
    width: 95%;
    height: 75vh;
    border:1px solid blue;

    `
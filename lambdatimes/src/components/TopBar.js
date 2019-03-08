import React from 'react';
import styled from "styled-components";
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarDiv>
      <TopBarContainer>
        <TopBarConLeft>
          <TopBarConLeftSpan>TOPICS</TopBarConLeftSpan><TopBarConLeftSpan>SEARCH</TopBarConLeftSpan>
        </TopBarConLeft>
        <TopBarConCen>
          <TopBarConCenSpan>GENERAL</TopBarConCenSpan><TopBarConCenSpan>BROWNBAG</TopBarConCenSpan><TopBarConCenSpan>RANDOM</TopBarConCenSpan><TopBarConCenSpan>MUSIC</TopBarConCenSpan><TopBarConCenSpan>ANNOUNCEMENTS</TopBarConCenSpan>
        </TopBarConCen>
        <TopBarConCenRight>
          <span>LOG IN</span>
        </TopBarConCenRight>
      </TopBarContainer>
    </TopBarDiv>
  )
}


const TopBarDiv = styled.div `
width: 100%;
display: flex;
justify-content: center;
align-items: none;
flex-direction: row;
position: fixed;
height: 44px;
background-color: #333;
`;
const TopBarContainer = styled.div `
width: 100%;
display: flex;
justify-content: none;
align-items: none;
flex-direction: row;
color: #fff;
letter-spacing: 1px;
padding: 0 10px;
`;

const TopBarConLeft = styled.div `
display: flex;
justify-content: none;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
`;

const TopBarConLeftSpan = styled.div `
cursor: pointer;
margin-right: 25%;
font-weight: bold;
`;

const TopBarConCen = styled.div `
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
flex: 3;
font-size: 9px;
`;
const TopBarConCenSpan = styled.div `
cursor: pointer;
margin-right: 5%;
`;

const TopBarConCenRight = styled.div `
display: flex;
justify-content: flex-end;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
font-weight: bold;
`;

const TopBarConCenRightSpan = styled.div  `
cursor: pointer;
`;

export default TopBar;
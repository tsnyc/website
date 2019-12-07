import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components'
import navItems from '../data/nav-items.js';

export const NavFlexContainer = styled.div`
border: 3px solid green;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width:100%;
`;

export const NavItemRowsContainer = styled.div`
border: 3px solid green;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width:100%;
@media (min-width: 576px) {
  width:50%;
  max-width:300px;
}
`;

export const LeftColumn = styled.div`
// border: 1px solid green;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width:20%
`;

export const RightColumn = styled.div`
// border: 1px solid green;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
width:80%
`;

export const NavItemRow = styled.div`
// border: 1px solid green;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width:100%
`;

const makeNavLinks = (navItems) => {
  if (navItems.length > 0) {
    return navItems.map((item) => {
      const itemContents = Object.values(item)[0];
      let { link, description, time } = itemContents;

      return <NavItemRow>
        <LeftColumn>
          <p>{`${time}`}</p>
        </LeftColumn>
        <RightColumn>
          {fillRightColumn(link, description)}
        </RightColumn>
      </NavItemRow>
    })
  } 
}

const fillRightColumn = (link, description) => {
  let firstUrlChar = link[0];

  if (link.length > 0 && firstUrlChar === '/') {
    return <Link to={`${link}`}>
      <p>{`${description}`}</p>
    </Link>

  } else if (link.length > 0 && firstUrlChar !== '/') {
    return <a href={`${link}`} target="_blank">
      <p>{`${description}`}</p>
      </a>

  } else if (link.length === 0) {
    return <p>{`${description}`}</p>
  } 
}

export default function HomeNav() {
  console.log(navItems.list)
  return (
    <NavFlexContainer>
      <NavItemRowsContainer>
      {makeNavLinks(navItems.list)}
      </NavItemRowsContainer>
      
    </NavFlexContainer>
  )
}


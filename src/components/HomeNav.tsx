import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components'
// import { graphql } from "gatsby"

const navLinks = [
  {
    rsvp: {
      link: 'https://www.meetup.com/TypeScriptNYC/events/251309133/',
      description: 'RSVP to our next event',
      time: 'now'
    }
  },
  {
    codeOfConduct: {
      link: '/code-of-conduct',
      description: 'Read our code of conduct',
      time: ''
    }
  },
  {
    slack: {
      link: 'https://slack.com/signin',
      description: 'Join our slack',
      time: ''
    }
  },
  {
    venueInstructions: {
      link: 'google.com',
      description: 'Go to the venue and check in',
      time: 'in 5 days'
    }
  },
  {
    speakers: {
      link: 'google.com',
      description: 'speaker stuff here',
      time: '7PM'
    }
  },
  {
    end: {
      link: '',
      description: 'Social hour',
      time: '9PM'
    }
  },
  {
    speak: {
      link: 'mailto:thefrankharvey@gmail.com',
      description: 'Be a future speaker',
      time: ''
    }
  },
  {
    pastMeetups: {
      link: '/past-meetups',
      description: 'See past meetups',
      time: ''
    }
  },
  {
    aboutUs: {
      link: '/about',
      description: 'Learn more about us',
      time: ''
    }
  },
  {
    becomeASponsor: {
      link: '/faq',
      description: 'Become a sponsor',
      time: ''
    }
  },
]

export const NavFlexContainer = styled.div`
border: 3px solid green;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width:100%;
`;

export const NavItemsContainer = styled.div`
// border: 3px solid green;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width:100%;
@media (min-width: 576px) {
  width:30%;
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

export const NavItem = styled.div`
// border: 1px solid green;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width:100%
`;

const makeNavLinks = (navLinks) => {
  if (navLinks.length > 0) {
    return navLinks.map((item) => {
      const itemContents = Object.values(item)[0];
      let { link, description, time } = itemContents;

      return <NavItem>
        <LeftColumn>
          <p>{`${time}`}</p>
        </LeftColumn>
        <RightColumn>
          {fillRightColumn(link, description)}
        </RightColumn>
      </NavItem>
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

  return (
    <NavFlexContainer>
      <NavItemsContainer>
      {makeNavLinks(navLinks)}
      </NavItemsContainer>
      
    </NavFlexContainer>
  )
}


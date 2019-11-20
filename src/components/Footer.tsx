import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';

export const FooterContainer = styled.div`
border: 1px solid blue;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
`;
export const FooterContent = styled.div`
border: 1px solid blue;
width: 100%;
@media (min-width: 576px) {
  max-width:400px;
}
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
      <p>Typescript NYC, its speakers, and attendees abide by the JSConf code of conduct. For more information about us, see our FAQs for speakers, attendees, and sponsors, or learn more about our history.</p>
      </FooterContent>
        
    </FooterContainer>
  )
}

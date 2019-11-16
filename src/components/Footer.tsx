import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';

export const BorderDiv = styled.div`
border: 1px solid blue;
`;

export default function Footer() {
  return (
    <BorderDiv>
        <p>Typescript NYC, its speakers, and attendees abide by the JSConf code of conduct. For more information about us, see our FAQs for speakers, attendees, and sponsors, or learn more about our history.</p>
    </BorderDiv>
  )
}

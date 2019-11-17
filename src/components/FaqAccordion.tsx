// import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components'


export const AccordionContainer = styled.div`

`;
export const AccordionSection = styled.div`

`;

export const AccordionTitle = styled.button`
background-color: lightgray;
width: 100%;
text-align: left;

&:hover {
  background-color: white;
}
`;
export const AccordionContent = styled.div`

`;
export const AccordionText = styled.div`

`;

export default function FaqAccordion(props: any) {
  console.log(props)
  return (
    <AccordionContainer>
      <AccordionSection>
        <AccordionTitle>
          <p>{props.title}</p>
        </AccordionTitle>
        <AccordionContent>
          <AccordionText>
            <p>{props.content}</p>
          </AccordionText>
        </AccordionContent>
      </AccordionSection>

      <AccordionSection>
        <AccordionTitle>
          <p>{props.title}</p>
        </AccordionTitle>
        <AccordionContent>
          <AccordionText>
            <p>{props.content}</p>
          </AccordionText>
        </AccordionContent>
      </AccordionSection>
    </AccordionContainer>

  )
}


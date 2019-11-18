// import { Link } from "gatsby";
import React, { useState, useRef } from "react";
import styled from 'styled-components'
import Chevron from './Chevron'


export const AccordionTitle = styled.button`
background-color: lightgray;
width: 100%;
text-align: left;
display: flex;
flex-direction: row;
align-items:center;
&.accordion-active {
  background-color: red;
} 
`;
export const AccordionContent = styled.div`
overflow:hidden;
`;
export const AccordionText = styled.div`

`;
export const AccordionSection = styled.div`

`;

export default function AccordionItem(props: any) {
  const [isActive, setActive] = useState("");
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("");
  const content = useRef(null);

  const toggleAccordion = () => {
    setRotate(isActive === "" ? "rotate" : "");
    setActive(isActive === "" ? "active" : "");
    setHeight(isActive === "active" ? "0px" : `${content.current.scrollHeight}px`)
  }

  let itemKey = Object.keys(props.item);
  let title = props.item[itemKey].title;
  let description = props.item[itemKey].description;


  return (
    <AccordionSection>
      <AccordionTitle
        className={`accordion-${isActive}`}
        onClick={toggleAccordion}
      >
        <p>{title}</p>
        <Chevron className={`${rotate}`} width="24px" fill="#777" />
      </AccordionTitle>
      <AccordionContent ref={content} style={{ maxHeight: `${height}` }}>
        <AccordionText>
          <p>{description}</p>
        </AccordionText>
      </AccordionContent>
    </AccordionSection>

  )
}


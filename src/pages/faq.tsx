import React from "react";
import styled from 'styled-components'
import AccordionItem from "../components/AccordionItem";
import Layout from "../components/layout";

export const PageContainer = styled.div`
    border: 1px solid red;
    width: 100%;
    position: relative;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    `;

    export const AccordionContainer = styled.div`
    width:100%;
    border: 2px solid black;
`;

    const accordionItems = [
        {1: {
            title: 'what is the meaning of life?',
            description: '42'
          }
        },
        {2: {
                title: 'what is foo?',
                description: 'bar'
              }
        } 
      ]

    const makeAccordionContainer = (accordionItems) => {
        return <AccordionContainer>
            {accordionItems.map(item => (<AccordionItem item={item} />))}
        </AccordionContainer>
    }
    
export default function faqPage() {
    return (
    <PageContainer>
        <Layout accordionContainer={makeAccordionContainer(accordionItems)}/>
    </PageContainer>
    )
}
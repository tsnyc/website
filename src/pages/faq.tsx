import FaqAccordion from "../components/FaqAccordion";
import Layout from "../components/layout";
import React from "react";
import styled from 'styled-components'

export const PageContainer = styled.div`
    border: 1px solid red;
    width: 100%;
    position: relative;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    `;

    const title = "frank"
    const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    const sendAccordion = <FaqAccordion title={title} content={content}/>
    
export default function faqPage() {
    return (
    <PageContainer>
        <Layout faqAccordion={sendAccordion}/>
    </PageContainer>
    )
}
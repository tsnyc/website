import Layout from "../components/layout";
import React from "react";
import styled from 'styled-components'
import AboutUs from "../components/AboutUs";

export const PageContainer = styled.div`
    border: 1px solid red;
    width: 100%;
    position: relative;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    `;
    
export default function aboutUsPage() {
    return (
    <PageContainer>
        <Layout aboutUs={<AboutUs/>}/>
    </PageContainer>
    )
}


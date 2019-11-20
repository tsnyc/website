import React, { useState } from "react";
import styled from 'styled-components'
import Layout from "../components/layout";
import HomeNav from "../components/HomeNav";

export const PageContainer = styled.div`
    border: 1px solid red;
    width: 100%;
    position: relative;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    `;

export default function IndexPage() {
    return (
        <PageContainer>
            <Layout homeNav={<HomeNav/>}></Layout>
        </PageContainer>
    )
}

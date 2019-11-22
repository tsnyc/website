import React, { useState } from "react";
import styled from 'styled-components'
import Layout from "../components/layout";
import HomeNav from "../components/HomeNav";
import { graphql } from "gatsby";

export const PageContainer = styled.div`
    border: 1px solid red;
    width: 100%;
    position: relative;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    `;

export default function IndexPage(props) {
console.log(props.data.allMdx.edges[0].node.frontmatter.title)
    return (
        <PageContainer>
            <Layout homeNav={<HomeNav/>}></Layout>
        </PageContainer>
    )
}

export const pageQuery = graphql`
query MyQuery {
  allMdx {
    edges {
      node {
        frontmatter {
          title
          date
        }
      }
    }
  }
}
`
// import React from 'react';
// import { graphql } from 'gatsby';

// import Layout from '../components/layout';

// const PostTemplate = ({ data }) => {
//   const { markdownRemark } = data;
//   const { frontmatter, html } = markdownRemark;
//   return (
//     <Layout>
//       <section>
//         <div>
//           <h1>{frontmatter.title}</h1>
//           <span>{frontmatter.date}</span>
//         </div>
//         <div dangerouslySetInnerHTML={{ __html: html }} />
//       </section>
//     </Layout>
//   );
// };

// export default PostTemplate;

// export const pageQuery = graphql`
//   query($path: String!) {
//     allMdx {
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "")
//           }
//         }
//       }
//     }
//   }
// `;
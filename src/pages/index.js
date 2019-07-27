import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components'
import posed from 'react-pose';

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: #9A33FF;
`

const Box = posed.div({
  hoverable: true,
  init: {
    scale:1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  hover: {
    scale:1.1,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.3)"
  }
});

export default ({ data }) => {
  console.log(data)
  return (
  <Layout>
    <SEO title="Home" />
    <div>
      <h4>Blog : { data.allMarkdownRemark.totalCount } Posts </h4>
      {
        data.allMarkdownRemark.edges.map(({node}) => (
          <Box key={node.id} style={{
                      border: '1px solid', 
                      padding: 10,
                      backgroundColor: '#DBF7FE', 
                      marginBottom: 10 , 
                      borderRadius: 10 }}>
            <BlogLink to={node.fields.slug}>
              <BlogTitle>
                { node.frontmatter.title } - { node.frontmatter.date }
              </BlogTitle>
              <p>
                { node.excerpt }
              </p>
            </BlogLink>
          </Box>
        ))
      }
    </div>
  </Layout>
)}


export const query = graphql`
  query {
    allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          fields{
            slug
          }
          excerpt
        }
      }
      totalCount
    }
  }
`

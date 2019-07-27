import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: #9A33FF;
`

export default ({ data }) => {
  console.log(data)
  return (
  <Layout>
    <SEO title="Home" />
    <div>
      <h4>Blog : { data.allMarkdownRemark.totalCount } Posts </h4>
      {
        data.allMarkdownRemark.edges.map(({node}) => (
          <div key={node.id} style={{
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
          </div>
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

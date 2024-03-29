/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1200,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 130,
        }}
      >
        <main>{children}</main>
      </div>
      <footer style={{ 
              marginTop : 100, 
              background: '#075562', 
              textAlign: `center`, 
              position: `fixed`, 
              bottom:0, 
              left:0,
              width: `100%`}}>
        © {new Date().getFullYear()}, Created by Anirban Sarkar 
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

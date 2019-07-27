import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#33C3FF`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1200,
        display: "flex",
        justifyItems: "space-between",
        alignItems: "center",
      }}
    >
      <h1 style={{ margin: 0, flex: 1 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav>
          <ul style={{ display: "flex", flex: 1 }}>
            <li style={{
                    listStyleType: `none`,
                    paddingTop: `2rem`,
                  }}>
              <Link to="/contact" style={{ fontWeight: `bold`, color: `white`, textDecoration: `none` }}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

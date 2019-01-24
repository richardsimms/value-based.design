import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import "./layout.css"
import { graphql } from "gatsby"

const Layout = ({ children, data }) => (
  <div>
    <Helmet

    />
    <Header />
      {children}

  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`
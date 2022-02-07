/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import 'bulma/css/bulma.css'

import Header from "./header"
import SocialMedia from "./reusable/socialmedia"
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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main
          style={{
            marginTop: `50px`,
          }}
        >{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
            marginBottom: `2rem`,
            textAlign: 'center',
            borderTop: '4px solid #1C444C',
            paddingTop: '3rem'
          }}
        >
          <SocialMedia/>
          <span className="has-text-grey">© {new Date().getFullYear()}, All rights reserved.</span>
        </footer>
        <a className='button is-success static-button is-hidden-mobile' target='_blank' rel="noopener noreferrer" href='https://www.eventbrite.ca/e/senecas-sustainability-hackathon-2022-registration-205162405277'>
            <span>Register Now!</span>
        </a>
        <SocialMedia classes={'floating-left is-hidden-mobile'}/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

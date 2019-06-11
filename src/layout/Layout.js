import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import App from './App'

// hacked FFE
import Provider from '../hacked-ffe/Provider'

// This polyfill is only needed if we use Styled Components (CSS-in-JS) syntax
// import cssVars from 'css-vars-ponyfill'
// cssVars()

const Layout = ({ carrier, children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={() => (
        <Provider carrier={carrier} defaultCarrier="dnb">
          <App>{children}</App>
        </Provider>
      )}
    />
  )
}

Layout.propTypes = {
  carrier: PropTypes.string,
  children: PropTypes.node.isRequired
}
Layout.defaultProps = {
  carrier: null
}

export default Layout

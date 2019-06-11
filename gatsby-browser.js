/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Provider from './src/hacked-ffe/Provider'

export const wrapRootElement = ({ element }) => {
  return <Provider defaultCarrier="ffe">{element}</Provider>
}
wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired
}

import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Context } from './Provider'

import { H1 as EufemiaH1 } from 'dnb-ui-lib/elements'
import { Heading1 as FfeHeading1 } from '@sb1/ffe-core-react'

const H1 = ({ children, ...rest }) => {
  const { carrier } = useContext(Context)

  switch (carrier) {
    case 'dnb':
      return <EufemiaH1 {...rest}>{children}</EufemiaH1>
    case 'sb1':
    default:
      return <FfeHeading1 {...rest}>{children}</FfeHeading1>
  }
}
H1.propTypes = {
  children: PropTypes.node
}
H1.defaultProps = {
  children: null
}

export default H1

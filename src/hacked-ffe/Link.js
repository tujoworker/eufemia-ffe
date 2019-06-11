import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Context } from './Provider'

import { Link as EufemiaAnchor } from 'dnb-ui-lib/elements'
import { LinkText as FfeLinkText } from '@sb1/ffe-core-react'

const Link = ({ children, ...rest }) => {
  const { carrier } = useContext(Context)

  switch (carrier) {
    case 'dnb':
      return <EufemiaAnchor {...rest}>{children}</EufemiaAnchor>
    case 'sb1':
    default:
      return <FfeLinkText {...rest}>{children}</FfeLinkText>
  }
}
Link.propTypes = {
  children: PropTypes.node
}
Link.defaultProps = {
  children: null
}

Link.getClassName = () => {
  const { carrier } = useContext(Context)

  switch (carrier) {
    case 'dnb':
      return 'dnb-anchor'

    case 'sb1':
    default:
      return 'ffe-link-text'
  }
}

export default Link

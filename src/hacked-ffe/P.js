import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Context } from './Provider'

import { P as EufemiaParagraph } from 'dnb-ui-lib/elements'
import { Paragraph as FfeParagraph } from '@sb1/ffe-core-react'

const Paragraph = ({ children, ...rest }) => {
  const { carrier } = useContext(Context)

  switch (carrier) {
    case 'dnb':
      return <EufemiaParagraph {...rest}>{children}</EufemiaParagraph>
    case 'sb1':
    default:
      return <FfeParagraph {...rest}>{children}</FfeParagraph>
  }
}
Paragraph.propTypes = {
  children: PropTypes.node
}
Paragraph.defaultProps = {
  children: null
}

export default Paragraph

import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Context } from './Provider'

import { FormLabel as EufemiaLabel } from 'dnb-ui-lib'
import { Label as FfeLabel } from '@sb1/ffe-form-react'

import './styles/form.less'

// could be imported like this - but makes no big difference at all
// import 'dnb-ui-lib/components/form-label/style'

const mapProps = allProps => {
  const { carrier } = useContext(Context)
  const props = { ...allProps }

  switch (carrier) {
    case 'dnb': {
      if (typeof props.children === 'string') {
        props.text = props.children
        delete props.children
      }
      if (typeof props.htmlFor === 'string') {
        props.for_id = props.htmlFor
        delete props.htmlFor
      }

      break
    }
    case 'sb1':
    default:
      break
  }

  return props
}

const Label = props => {
  const { carrier } = useContext(Context)

  switch (carrier) {
    case 'dnb':
      return <EufemiaLabel {...mapProps(props)} />
    case 'sb1':
    default:
      return <FfeLabel {...mapProps(props)} />
  }
}
Label.propTypes = {
  children: PropTypes.node
}
Label.defaultProps = {
  children: null
}

export default Label

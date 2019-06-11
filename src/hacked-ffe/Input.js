import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Context } from './Provider'

import { Input as EufemiaInput } from 'dnb-ui-lib'
import { Input as FfeInput } from '@sb1/ffe-form-react'

import './styles/form.less'

// could be imported like this - but makes no big difference at all
// import 'dnb-ui-lib/components/input/style'
// import 'dnb-ui-lib/components/input/style/themes/ui'

const mapProps = allProps => {
  const { carrier } = useContext(Context)
  const props = { ...allProps }

  switch (carrier) {
    case 'dnb':
      if (typeof props.children === 'string') {
        props.value = props.children
        delete props.children
      }

      break
    case 'sb1':
    default:
      break
  }

  props.onChange = e => {
    switch (carrier) {
      case 'dnb':
        return allProps.onChange && allProps.onChange(e)

      case 'sb1':
      default:
        return (
          allProps.onChange &&
          allProps.onChange({ value: e.currentTarget.value })
        )
    }
  }

  return props
}

const Input = props => {
  const { carrier } = useContext(Context)

  switch (carrier) {
    case 'dnb':
      return <EufemiaInput {...mapProps(props)} />
    case 'sb1':
    default:
      return <FfeInput {...mapProps(props)} />
  }
}
Input.propTypes = {
  children: PropTypes.node
}
Input.defaultProps = {
  children: null
}

export default Input

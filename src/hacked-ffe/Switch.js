import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Context } from './Provider'

import { Switch as EufemiaSwitch } from 'dnb-ui-lib'
import { Checkbox as FfeSwitch } from '@sb1/ffe-form-react'

import './styles/form.less'

// could be imported like this - but makes no big difference at all
import 'dnb-ui-lib/components/checkbox/style'
import 'dnb-ui-lib/components/checkbox/style/themes/ui'

const mapProps = allProps => {
  const { carrier } = useContext(Context)
  const props = { ...allProps }

  switch (carrier) {
    case 'dnb': {
      if (typeof props.children === 'string') {
        props.label = props.children
        delete props.children
      }
      if (typeof props.defaultChecked !== 'undefined') {
        props.checked = props.defaultChecked
        props.defaultChecked = null
      }
      break
    }
    case 'sb1':
    default:
      break
  }

  props.onChange = e => {
    switch (carrier) {
      case 'dnb':
        return allProps.onChange(e)

      case 'sb1':
      default:
        return allProps.onChange({ checked: e.currentTarget.checked })
    }
  }

  return props
}

const Switch = props => {
  const { carrier } = useContext(Context)

  switch (carrier) {
    case 'dnb':
      return <EufemiaSwitch {...mapProps(props)} />
    case 'sb1':
    default:
      return <FfeSwitch {...mapProps(props)} />
  }
}
Switch.propTypes = {
  children: PropTypes.node
}
Switch.defaultProps = {
  children: null
}

export default Switch

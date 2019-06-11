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

      if (props.onChange) {
        delete props.onChange
        props.on_change = e => {
          return allProps.onChange && allProps.onChange(e)
        }
      }

      break
    }
    case 'sb1':
    default:
      if (props.onChange) {
        props.onChange = e => {
          return (
            allProps.onChange &&
            allProps.onChange({ checked: e.currentTarget.checked })
          )
        }
      }

      break
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

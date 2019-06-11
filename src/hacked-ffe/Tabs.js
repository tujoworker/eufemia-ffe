// TODO: This Tabs wrapper are not made yet
//
//
//
//
//
//

import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Context } from './Provider'

import { Checkbox as EufemiaCheckbox } from 'dnb-ui-lib'
import { Checkbox as FfeCheckbox } from '@sb1/ffe-form-react'

// import './styles/form.less'

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
        return allProps.onChange && allProps.onChange(e)

      case 'sb1':
      default:
        return (
          allProps.onChange &&
          allProps.onChange({ checked: e.currentTarget.checked })
        )
    }
  }

  return props
}

const Checkbox = props => {
  const { carrier } = useContext(Context)

  switch (carrier) {
    case 'dnb':
      return <EufemiaCheckbox {...mapProps(props)} />
    case 'sb1':
    default:
      return <FfeCheckbox {...mapProps(props)} />
  }
}
Checkbox.propTypes = {
  children: PropTypes.node
}
Checkbox.defaultProps = {
  children: null
}

export default Checkbox

import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Context } from './Provider'

// import EufemiaButton from 'dnb-ui-lib/components/Button'
import { Button as EufemiaButton } from 'dnb-ui-lib'
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  ActionButton,
  TaskButton,
  BackButton,
  ShortcutButton
} from '@sb1/ffe-buttons-react'

import './styles/button.less'

// could be imported like this - but makes no big difference at all
import 'dnb-ui-lib/components/button/style'
import 'dnb-ui-lib/components/button/style/themes/ui'

const mapProps = allProps => {
  const { carrier } = useContext(Context)
  const props = { ...allProps }

  switch (carrier) {
    case 'dnb':
      if (typeof props.children === 'string') {
        props.text = props.children
        delete props.children
      }

      if (props.leftIcon) {
        props.icon = props.leftIcon
        props.icon_position = 'left'
        delete props.leftIcon
      }

      if (props.rightIcon) {
        props.icon = props.rightIcon
        props.icon_position = 'right'
        delete props.rightIcon
      }

      switch (props.variant) {
        case 'action':
          props.variant = 'primary'
          break

        case 'task':
          props.variant = 'primary'
          props.icon = 'add'
          props.icon_position = 'left'
          break

        case 'back':
          props.variant = 'primary'
          props.icon = 'chevron_left'
          props.icon_position = 'left'
          break

        case 'shortcut':
          props.variant = 'primary'
          props.icon = 'chevron_right'
          break
      }

      break
    case 'sb1':
    default:
      break
  }

  return props
}

const Button = props => {
  const { carrier } = useContext(Context)

  switch (carrier) {
    case 'dnb':
      return <EufemiaButton {...mapProps(props)} />

    case 'sb1':
    default:
      switch (props.variant) {
        case 'primary':
        default:
          return <PrimaryButton {...mapProps(props)} />

        case 'secondary':
          return <SecondaryButton {...mapProps(props)} />

        case 'tertiary':
          return <TertiaryButton {...mapProps(props)} />

        case 'action':
          return <ActionButton {...mapProps(props)} />

        case 'task':
          return <TaskButton {...mapProps(props)} />

        case 'back':
          return <BackButton {...mapProps(props)} />

        case 'shortcut':
          return <ShortcutButton {...mapProps(props)} />
      }
  }
}
Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node
}
Button.defaultProps = {
  variant: 'primary',
  children: null
}

export default Button

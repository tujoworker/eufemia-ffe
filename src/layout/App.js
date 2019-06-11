import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { Context } from '../hacked-ffe/Provider'

// app styles
import './styles/App.less'

import Switch from '../hacked-ffe/Switch'

const App = ({ children }) => {
  const { carrier, setCarrier } = useContext(Context)
  return (
    <div className="app-wrapper">
      <div className="app-wrapper-inner">
        <header className="app-header">
          <Switch
            defaultChecked={carrier === 'dnb'}
            onChange={({ checked }) => {
              setTimeout(() => {
                console.log('onChange', checked)
                setCarrier(checked ? 'dnb' : 'ffe')
              }, 500)
            }}
          >
            Eufemia is Enabled
          </Switch>
        </header>
        <main className="app-content">{children}</main>
        <footer className="app-footer">Happy hacking {'🍒'}</footer>
      </div>
    </div>
  )
}
App.propTypes = {
  children: PropTypes.node.isRequired
}

export default App

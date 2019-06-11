import React, { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Context } from '../hacked-ffe/Provider'

// app styles
import './styles/App.less'

import Switch from '../hacked-ffe/Switch'

let timeoutId
const App = ({ children }) => {
  const { carrier, setCarrier } = useContext(Context)
  const [isDimming, setDimming] = useState(false)

  // on unmount
  useEffect(() => () => clearTimeout(timeoutId), [])

  return (
    <div className="app-wrapper">
      <div className="app-wrapper-inner">
        <header className="app-header">
          <Switch
            defaultChecked={carrier === 'dnb'}
            onChange={({ checked }) => {
              setDimming(true)
              timeoutId = setTimeout(() => {
                // setDimming(false)// is not needed
                setCarrier(checked ? 'dnb' : 'ffe')
              }, 500)
            }}
          >
            Eufemia is Enabled
          </Switch>
        </header>
        <main className={classnames('app-content', isDimming && 'dimmed')}>
          {children}
        </main>
        <footer className="app-footer">Happy hacking {'🍒'}</footer>
      </div>
    </div>
  )
}
App.propTypes = {
  children: PropTypes.node.isRequired
}

export default App

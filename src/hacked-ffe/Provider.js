import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// 1. Custom Eufemia import, instead of effecting the body reset with 'dnb-ui-lib/style'
// import 'dnb-ui-lib/style' // Import the global DNB stylesheet
import 'dnb-ui-lib/style/basis'
import 'dnb-ui-lib/style/components'
import 'dnb-ui-lib/style/themes/ui'

import './styles/ffe.less'
import './styles/eufemia.less'

export const Context = React.createContext({})

const HFFEProvider = ({
  children,
  carrier: givenCarrier,
  defaultCarrier,
  ...context
}) => {
  const [carrier, setCarrier] = useState(givenCarrier)

  if (String(carrier) !== 'null') {
    saveCarrier(carrier)
  }

  useEffect(() => {
    if (String(givenCarrier) === 'null') {
      let potentialCarrier = getStoredCarrier()
      if (String(potentialCarrier) === 'null') {
        potentialCarrier = defaultCarrier
      }
      setCarrier(potentialCarrier)
    }
  }, [])

  const contextValue = {
    ...context,
    carrier,
    setCarrier,
    getStoredCarrier,
    saveCarrier
  }

  return (
    <Context.Provider value={contextValue}>
      {contextValue.carrier === 'dnb' ? (
        <div className="dnb-core-style dnb-spacing">{children}</div>
      ) : (
        children
      )}
    </Context.Provider>
  )
}
HFFEProvider.propTypes = {
  carrier: PropTypes.string,
  defaultCarrier: PropTypes.string,
  children: PropTypes.node
}
HFFEProvider.defaultProps = {
  carrier: null,
  defaultCarrier: null,
  children: null
}

export default HFFEProvider

const saveCarrier = carrier => {
  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem('carrier', carrier)
    } catch (e) {
      console.log('SidebarLayout error:', e)
    }
  }
}

const getStoredCarrier = () => {
  if (typeof window !== 'undefined') {
    try {
      return window.localStorage.getItem('carrier')
    } catch (e) {
      return 0
    }
  }
}

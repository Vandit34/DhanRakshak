import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CentralGovtInterface1 from './Components/CentralGovtInterface1.jsx'
import { AccountNumberContext } from './AccountNumberContext.jsx'
import Sender from './Components/Sender.jsx'
import Receiver from './Components/Receiver.jsx'
import History from './Components/History.jsx'

function App () {
  const [accountNumber, setAccountNumber] = useState(null)

  return (
    <AccountNumberContext.Provider value={{ accountNumber, setAccountNumber }}>
      <Router>
        <Switch>
          <Route path="/Submit">
            <Sender />
          </Route>
          <Route path="/">
            <CentralGovtInterface1/>
          </Route>
        </Switch>
      </Router>
    </AccountNumberContext.Provider>
  )
}

export default App
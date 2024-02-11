import React, { useState } from 'react';
import CentralGovtInterface1 from './Components/CentralGovtInterface1.jsx';
import { AccountNumberContext } from './AccountNumberContext.jsx';

function App() {
  const [accountNumber, setAccountNumber] = useState('');

  return (
    <AccountNumberContext.Provider value={{ accountNumber, setAccountNumber }}>
      <CentralGovtInterface1 />
    </AccountNumberContext.Provider>
  );
}

export default App;
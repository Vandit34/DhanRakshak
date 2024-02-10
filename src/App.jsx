import React, { useState } from 'react';
import Navbar from './Components/Navbar.jsx'
import CentralGovtInterface1 from './Components/CentralGovtInterface1.jsx';
import { AccountNumberContext } from './AccountNumberContext.jsx';

function App() {
  const [accountNumber, setAccountNumber] = useState('');

  return (
    <AccountNumberContext.Provider value={{ accountNumber, setAccountNumber }}>
      <Navbar />
      <CentralGovtInterface1 />
    </AccountNumberContext.Provider>
  );
}

export default App;
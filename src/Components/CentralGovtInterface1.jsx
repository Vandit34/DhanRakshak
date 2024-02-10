import React, { useContext, useState } from 'react'
import { AccountNumberContext } from '../AccountNumberContext.jsx'
import Update from './Update.jsx'
import Navbar from './Navbar.jsx'
import { useHistory } from 'react-router-dom'

function CentralGovtInterface1 () {
  const { accountNumber } = useContext(AccountNumberContext)
  const history = useHistory()

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(accountNumber)
      alert('Account number copied to clipboard')
    } catch (err) {
      alert('Failed to copy account number: ', err)
    }
  }
  const [totalAmount, setTotalAmount] = useState(0)

  const handleSendClick = () => {
    history.push('/Submit')
  }

  return (
    <div >
      <Navbar/>
      <div className='flex flex-col items-center'>
        {accountNumber && (
          <button
            onClick={copyToClipboard}
            className='h-10 px-2 mb-5 rounded-2xl text-sm focus:outline-none text-blue-700 bg-blue-300'
            aria-placeholder='Enter Account number'
          >
            {accountNumber}
          </button>
        )}
        <h1 className='text-2xl font-bold font-quicksand text-blue-600'>
          Rs. {totalAmount}
        </h1>
        <div className='buttons'>
          <button
            onClick={handleSendClick}
            className='bg-orange-500 font-quicksand text-white font-bold py-2 px-4 rounded mt-3 transition duration-500 ease-in-out'
          >
            Send
          </button>  
        </div>
      </div>
      <section className='updates mt-8'>
        <h1 className='text-white text-[2rem] text-center mb-5 font-quicksand'>
          Updates
        </h1>
        <Update />
      </section>
    </div>
  )
}

export default CentralGovtInterface1
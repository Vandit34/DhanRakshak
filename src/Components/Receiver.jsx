import React from 'react'
import Update from './Update.jsx'
import { useState } from 'react'
import Navbar from './Navbar.jsx'

const Receiver = () => {
  const [totalAmount, setTotalAmount] = useState(0)
  return (
    <div>
      <Navbar />
      <h1 className='text-2xl font-bold font-quicksand text-blue-600 text-center mb-8'>
        Rs. {totalAmount}
      </h1>
      <h1 className='text-white font-quicksand text-4xl text-center mb-8'>
        Updates
      </h1>

      <Update />
    </div>
  )
}

export default Receiver

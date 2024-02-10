import React from 'react'
import Navbar from './Navbar.jsx'
import { useState } from 'react'

const History = () => {
  const [totalAmount, setTotalAmount] = useState(0)
  const goalName = 'Building Govt. College at Jaipur'
  return (
    <>
      <Navbar />
      <h2 className='underline mx-4 text-3xl text-center font-bold mb-2 text-gray-500 tex'>
        {goalName}
      </h2>
      <h1 className='text-2xl text-center font-bold font-quicksand mt-5 text-blue-600'>
        Rs. {totalAmount}
      </h1>
      <h1 className='text-white font-quicksand text-4xl text-center mb-8 mt-5'>
        Updates
      </h1>
      <div className='w-full bg-blue-500 text-white p-4 rounded-lg mb-4 mx-4'>
        <h2 className='font-quicksand text-2xl mb-2'>Project Details</h2>
        <p className='font-quicksand'>Here are the details of the project...</p>
      </div>
      <input
        className='mt-4 px-3 py-2 border rounded-lg w-full placeholder-white bg-blue-500 mx-4'
        type='text'
        placeholder='Enter receiver address'
      />
      <input
        className='mt-4 px-3 py-2 border rounded-lg w-full placeholder-white bg-blue-500 mx-4'
        type='text'
        placeholder='Enter sender address'
      />
    </>
  )
}

export default History

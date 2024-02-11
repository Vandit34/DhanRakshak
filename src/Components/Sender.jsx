import React from 'react'
import Navbar from './Navbar.jsx'

const Sender = ({ accountNumber }) => {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(accountNumber)
      alert('Account number copied to clipboard')
    } catch (err) {
      alert('Failed to copy account number: ', err)
    }
  }

  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center mt-10 w-full max-w-md mx-auto px-4 lg:px-0'>
        
        <input
          className='mt-4 px-3 py-2 border-none rounded-lg w-full bg-blue-800 placeholder-white font-quicksand '
          type='text'
          placeholder='Enter receiver address'
        />
        <input
          className='mt-16 px-3 py-2 borderfont-quicksand  rounded-lg w-full text-blue-900'
          type='text'
          placeholder='Set Goal'
        />
        <select className='mt-4 px-3 py-2 border rounded-lg w-full text-blue-900'>
          <option value=''>Category</option>
          <option value='education'>Education</option>
          <option value='healthcare'>Healthcare</option>
          <option value='infrastructure'>Infrastructure</option>
          <option value='socialWelfare'>Social Welfare</option>
          <option value='defense'>Defense</option>
        </select>
        <input
          className='mt-4 px-3 py-2 font-quicksand border rounded-lg w-full text-blue-900'
          type='text'
          placeholder='Set Description'
        />
        <button className='mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg w-full'>
          Submit
        </button>
      </div>
    </>
  )
}

export default Sender

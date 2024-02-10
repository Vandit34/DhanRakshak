import React from 'react'

const Update = () => {
  const goalName = "Building Govt. College at Jaipur";
  const tag = "Education";
  const remainingAmount = 50000;
  const amountSpent = 20000;

  return (
    <div className='update mx-5 p-6 rounded-lg shadow-md border-y-2 border-gray-200 bg-black'>
      <h2 className='text-2xl font-bold mb-2 text-gray-300'>{goalName}</h2>
      <span className='inline-block bg-blue-200 text-blue-800 px-3 py-1 rounded-full mb-4 text-sm font-semibold'>{tag}</span>
      <p className='text-lg mb-2 text-green-600'>Remaining Amount: <span className='font-bold'>Rs. {remainingAmount}</span></p>
      <p className='text-lg text-red-600'>- Rs. {amountSpent}</p>
    </div>
  );
}

export default Update;
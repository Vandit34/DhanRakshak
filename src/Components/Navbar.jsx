import React, { useContext } from 'react';
import { AccountNumberContext } from '../AccountNumberContext.jsx';

const Navbar = () => {

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const accountNumber = event.target.accountNumber.value;

  //   // Edge case 1: Account number is empty
  //   if (!accountNumber) {
  //     alert('Account number cannot be empty');
  //     return;
  //   }

  //   // Edge case 2: Account number is too short or too long
  //   if (accountNumber.length < 5 || accountNumber.length > 12) {
  //     alert('Account number must be between 5 and 12 characters');
  //     return;
  //   }

  //   // Edge case 3: Account number contains non-alphanumeric characters
  //   if (!/^[a-z0-9]+$/i.test(accountNumber)) {
  //     alert('Account number can only contain alphanumeric characters');
  //     return;
  //   }

  //   setAccountNumber(accountNumber);
  // };

  return (
    <form  className='flex flex-col justify-center items-center pt-5'>
      <h1 className='font-pacifico text-4xl text-green-600 pb-10'>DhanRakshak</h1>
      {/* <input
        className='border-2 border-gray-300 bg-white h-10 px-5 pr-10 mt-5 rounded-lg text-sm focus:outline-none'
        type='text'
        name='accountNumber'
        placeholder='Enter Account Number'
      /> */}
      {/* <button className='font-quicksand bg-green-600 text-white font-bold py-2 px-4 rounded mt-3 transition duration-500 ease-in-out'>
        Submit
      </button> */}
    </form>
  );
};

export default Navbar;
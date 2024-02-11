import React, { useContext } from 'react';

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
<h1 className='font-pacifico text-4xl text-green-600 pb-10 pt-5'>DhanRakshak</h1>
  
    );
};

export default Navbar;
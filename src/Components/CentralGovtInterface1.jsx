import React, { useContext } from 'react';
import { AccountNumberContext } from '../AccountNumberContext.jsx';

function CentralGovtInterface1() {
    const { accountNumber } = useContext(AccountNumberContext);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(accountNumber);
            alert('Account number copied to clipboard');
        } catch (err) {
            alert('Failed to copy account number: ', err);
        }
    };

    return (
        <div className='mt-6'>
            {accountNumber && (
                <button onClick={copyToClipboard} className='h-10 px-2 rounded-3xl text-sm focus:outline-none text-blue-700 bg-blue-300'>
                    {accountNumber}
                </button>
            )}
        </div>
    );
}

export default CentralGovtInterface1;
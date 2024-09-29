import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ledger.css';

const Ledger = () => {
  const [accountName, setAccountName] = useState('');
  const [accountDetails, setAccountDetails] = useState(null);
  const navigate = useNavigate();

  // Sample account data
  const accounts = [
    { accountName: 'hashir', balance: 8988, credit: 9090 },
    { accountName: 'ali', balance: 5000, credit: 3000 },
    { accountName: 'sara', balance: 12000, credit: 4500 },
  ];

  const handleShowAccount = () => {
    const foundAccount = accounts.find(account => account.accountName === accountName);
    if (foundAccount) {
      setAccountDetails(foundAccount);
    } else {
      alert('Account not found!');
      setAccountDetails(null);
    }
  };

  const handlePreviewAccount = () => {
    const foundAccount = accounts.find(account => account.accountName === accountName);
    if (foundAccount) {
      navigate('/profile/ledger/preview', { state: { account: foundAccount } });
    } else {
      alert('Account not found for preview!');
    }
  };

  return (
    <div>
      <div className="ledContainer">
        <h1>Ledger Page</h1>
        <div className="input-group">
          <label htmlFor="account-name">Account Name</label>
          <input
            type="text"
            id="account-name"
            placeholder="Enter account name"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            required
          />
        </div>
        <button className="btn-preview" onClick={handleShowAccount}>
          Show
        </button>
        <button className="btn-preview" onClick={handlePreviewAccount}>
          Preview
        </button>

        {/* Display account details if found */}
        {accountDetails && (
          <div className="preview">
            <h3>Account Details:</h3>
            <p>Account Name: {accountDetails.accountName}</p>
            <p>Balance: {accountDetails.balance}</p>
            <p>Credit: {accountDetails.credit}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ledger;

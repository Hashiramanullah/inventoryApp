import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './profile.css';
import CashVoucher from '../Cash-Voucher/CashVoucher';

const Profile = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [voucherNumber, setVoucherNumber] = useState('');
  const navigate = useNavigate();
  
  // Sample voucher data
  const vouchers = [
    { qty: 90, v: 1, rate: 9000 },
    { qty: 50, v: 2, rate: 4500 },
    { qty: 30, v: 3, rate: 3000 },
    { qty: 80, v: 4, rate: 8000 },
    { qty: 70, v: 5, rate: 7000 },
    { qty: 60, v: 6, rate: 6000 },
    { qty: 20, v: 7, rate: 2000 },
    { qty: 10, v: 8, rate: 1000 },
  ];

  const openPopup = () => {
    setIsPopupOpen(true);
    setVoucherNumber('');
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleVoucherSubmit = () => {
    const foundVoucher = vouchers.find(voucher => voucher.v === Number(voucherNumber));

    if (foundVoucher) {
      // Pass the voucher details as state
      navigate('/profile/cash-voucher', { state: { data: foundVoucher } });
      closePopup(); // Close the popup after submitting
    } else {
      alert('Voucher not found!');
    }
  };

  return (
    <div className="card-outer-container">
      <div className="card-container">
        <h2>Hello User</h2>
        <div className="imp-data">
          <p>
            <Link to={'/profile/trial-balance'}>Trial-Balance</Link>
          </p>
          <p>
            <span onClick={openPopup} style={{ cursor: 'pointer' }}>
              Cash Voucher
            </span>
          </p>
          <p>
            <Link to={'/profile/ledger'}>Ledger</Link>
          </p>
        </div>
      </div>

      {/* Popup for entering voucher number */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Enter Voucher Number</h3>
            <input 
              type="text" 
              value={voucherNumber} 
              onChange={(e) => setVoucherNumber(e.target.value)} 
              placeholder="Enter Voucher Number" 
            />
            <button onClick={handleVoucherSubmit}>Open Cash Voucher</button>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;

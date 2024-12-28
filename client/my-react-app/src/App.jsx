import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import { Login } from './Component/Login/Login';
import { Register } from './Component/Register/Register';
import Profile from './Component/Profile/Profile';
import Admin from './Component/Admin/Admin';
import TrialBalance from './Component/TrialBalance/TrialBalance';
import CashVoucher from './Component/Cash-Voucher/CashVoucher';
import Ledger from './Component/Ledger/Ledger';
import Preview from './Component/preview/Preview';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the user is admin on app load
    const userType = localStorage.getItem('userType'); // Get user type from localStorage

    if (userType === 'admin') {
      setIsAdmin(true);
    }else if(userType == 'user'){
      setIsUser(true)
    }
      setLoading(false); // Set loading to false once check is complete
    

  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading state while checking
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={ isUser ?  <Profile /> : <Navigate to="/login"/>} />
        <Route path="/admin" element={isAdmin ? <Admin /> : <Navigate to="/login" />} />
        <Route path="/profile/trial-balance" element={<TrialBalance />} />
        <Route path="/profile/cash-voucher" element={<CashVoucher />} />
        <Route path="/profile/ledger" element={<Ledger />} />
        <Route path="/profile/ledger/preview" element={<Preview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

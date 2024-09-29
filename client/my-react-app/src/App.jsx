import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import { Login } from './Component/Login/Login';
import { Register } from './Component/Register/Register';
import Profile from './Component/Profile/Profile';
import Admin from './Component/Admin/Admin';
import TrialBalance from './Component/TrialBalance/TrialBalance';
import axios from 'axios';
import CashVoucher from './Component/Cash-Voucher/CashVoucher';
import Ledger from './Component/Ledger/Ledger';
import Preview from './Component/preview/Preview';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8989/admin', {
          headers: {
            Authorization: `Bearer ${token}`, // Corrected header
          },
          withCredentials: true,
        });
    
        if (response.data.success) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } catch (error) {
        console.error('Admin check failed:', error);
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };
    
    checkAdmin();
  }, []); // Run once on mount

  if (loading) {
    return <div>Loading...</div>; // Show loading state while checking
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={isAdmin ? <Admin /> : <Navigate to="/login" />} />
        <Route path="/profile/trial-balance" element={<TrialBalance />} />
        <Route path="/profile/cash-voucher" element={<CashVoucher/>} />
        <Route path="/profile/ledger" element={<Ledger/>} />
        <Route path="/profile/ledger/preview" element={<Preview />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Dashboard from './component/Dashboard';
import Register from './component/Register';
import Login from './component/Login';
import CreditAmount from './component/CreditAmount';
import DebitFund from './component/DebitFund';
import { useState } from 'react';
function App() {
  const [fundData, setFundData] = useState([]);
  return (
    <>
      <Home />
      <Routes>
        <Route path="/" />
        <Route path="/dashboard" element={<Dashboard fundData={fundData} />} />
        <Route
          path="/creditAmount"
          element={
            <CreditAmount fundData={fundData} setFundData={setFundData} />
          }
        />
        <Route
          path="/debitfund"
          element={<DebitFund fundData={fundData} setFundData={setFundData} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

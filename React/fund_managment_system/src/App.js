import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  return (
    <>
      <Home t={t} />
      <Routes>
        <Route path="/" />
        <Route
          path="/dashboard"
          element={<Dashboard fundData={fundData} t={t} />}
        />
        <Route
          path="/creditAmount"
          element={
            <CreditAmount fundData={fundData} setFundData={setFundData} t={t} />
          }
        />
        <Route
          path="/debitfund"
          element={
            <DebitFund fundData={fundData} setFundData={setFundData} t={t} />
          }
        />
        <Route path="/register" element={<Register t={t} />} />
        <Route path="/login" element={<Login t={t} />} />
      </Routes>
    </>
  );
}

export default App;

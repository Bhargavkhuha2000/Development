import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import CreditFund from './component/CreditFund';
import DebitFund from './component/DebitFund';
import Dashboard from './component/Dashboard';
import Register from './component/Register';
import Login from './component/Login';

const App = () => {
  const [RegisterData, setRegisterData] = useState([]);
  return (
    <>
      <Home />
      <Routes>
        <Route path="/" />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/creditfund" element={<CreditFund />} />
        <Route path="/debitfund" element={<DebitFund />} />
        <Route
          path="/register"
          element={
            <Register
              RegisterData={RegisterData}
              setRegisterData={setRegisterData}
            />
          }
        />
        <Route path="/login" element={<Login RegisterData={RegisterData} />} />
      </Routes>
    </>
  );
};

export default App;

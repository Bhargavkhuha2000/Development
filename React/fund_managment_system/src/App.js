import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Dashboard from './component/Dashboard';
import Register from './component/Register';
import Login from './component/Login';
function App() {
  return (
    <>
      <Home />
      <Routes>
        <Route path="/" />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/creditfund" element={<CreditFund />} />
        <Route path="/debitfund" element={<DebitFund />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

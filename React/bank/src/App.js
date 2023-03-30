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
  const getLoginData = JSON.parse(localStorage.getItem('userLogin'));
  if (getLoginData) {
    var getbalance = getLoginData[0].Balance;
  }
  const [RegisterData, setRegisterData] = useState([]);
  const [fundManage, setFundManage] = useState([]);
  const [finalBalance, setFinalBalance] = useState(getbalance);
  const [CurrentBalance, setCurrentBalance] = useState(finalBalance);
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  console.log(fundManage);
  return (
    <>
      <Home
        setCurrentBalance={setCurrentBalance}
        setFinalBalance={setFinalBalance}
        RegisterData={RegisterData}
      />
      <Routes>
        <Route path="/" />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              fundManage={fundManage}
              date={date}
              setFundManage={setFundManage}
              finalBalance={finalBalance}
              CurrentBalance={CurrentBalance}
              setCurrentBalance={setCurrentBalance}
              setFinalBalance={setFinalBalance}
            />
          }
        />
        <Route
          path="/creditfund"
          element={
            <CreditFund
              fundManage={fundManage}
              date={date}
              setFundManage={setFundManage}
              finalBalance={finalBalance}
              setFinalBalance={setFinalBalance}
              CurrentBalance={CurrentBalance}
              setCurrentBalance={setCurrentBalance}
              RegisterData={RegisterData}
            />
          }
        />
        <Route
          path="/debitfund"
          element={
            <DebitFund
              fundManage={fundManage}
              date={date}
              CurrentBalance={CurrentBalance}
              setFundManage={setFundManage}
              finalBalance={finalBalance}
              setFinalBalance={setFinalBalance}
              setCurrentBalance={setCurrentBalance}
              RegisterData={RegisterData}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              RegisterData={RegisterData}
              setRegisterData={setRegisterData}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              RegisterData={RegisterData}
              setCurrentBalance={setCurrentBalance}
              setFinalBalance={setFinalBalance}
              s
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;

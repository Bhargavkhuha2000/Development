import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Add from './component/Add';
import Show from './component/Show';
import Exchange from './component/Exchange';
import ShowExchange from './component/ShowExchange';

function App() {
  const [total, setTotal] = useState(0);
  const [change, setChange] = useState('');
  const [totalBill, setTotalBill] = useState('');
  const [totalGiven, setTotalGiven] = useState('');
  const [given, setGiven] = useState('');
  const [bill, setBill] = useState('');
  const [data, setData] = useState([
    {
      id: 0,
      NoteName: '',
      Note: '',
      NumberOf: '',
      Total: '',
    },
  ]);
  return (
    <>
      <Home />
      <Routes>
        <Route path="/" element={<h2>Let's Start Business</h2>} />
        <Route
          path="/add"
          element={
            <Add
              data={data}
              setData={setData}
              total={total}
              setTotal={setTotal}
            />
          }
        />
        <Route path="/show" element={<Show data={data} total={total} />} />
        <Route
          path="/exchange"
          element={
            <Exchange
              data={data}
              setData={setData}
              total={total}
              setTotal={setTotal}
              change={change}
              setChange={setChange}
              totalBill={totalBill}
              setTotalBill={setTotalBill}
              totalGiven={totalGiven}
              setTotalGiven={setTotalGiven}
              setGiven={setGiven}
              setBill={setBill}
            />
          }
        />
        <Route
          path="/showexchange"
          element={
            <ShowExchange
              change={change}
              setTotalGiven={setTotalGiven}
              setTotalBill={setTotalBill}
              bill={bill}
              given={given}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;

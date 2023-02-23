import logo from './logo.svg';
import './App.css';
import React, { ReactDOM, useState } from 'react';
import AddData from './component/AddData';
import DataList from './component/DataList';
import UpdateData from './component/UpdateData';
function App() {
  const [userData, setUserData] = useState([]);
  const listHandler = (fname, lname, add, gen) => {
    setUserData((DataPass) => {
      console.log(DataPass.length + 1);
      const store = {
        id: +DataPass.length + 1,
        Fname: fname,
        Lname: lname,
        address: add,
        gender: gen,
      };
      setUserData(userData.push(store));
      console.log([...userData]);
      return [...userData];
    });
  };
  // console.log(props.onUpdatedData);
  return (
    <div className="App">
      <AddData onAddData={listHandler} forRepeatData={userData} />
      <DataList data={userData} setData={setUserData} />
    </div>
  );
}

export default App;

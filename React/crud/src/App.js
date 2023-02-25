import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './component/Form';
import DatasList from './component/DatasList';

function App() {
  const [FnameInput, setFnameInput] = useState('');
  const [LnameInput, setLnameInput] = useState('');
  const [AddressInput, setAddressInput] = useState('');
  const [GenderInput, setGenderInput] = useState('');
  const [datas, setDatas] = useState('');
  const [updateData, setUpdateData] = useState(null);
  // console.log([...datas]);
  return (
    <div>
      <div className="App">
        <Form
          FnameInput={FnameInput}
          setFnameInput={setFnameInput}
          LnameInput={LnameInput}
          setLnameInput={setLnameInput}
          AddressInput={AddressInput}
          setAddressInput={setAddressInput}
          GenderInput={GenderInput}
          setGenderInput={setGenderInput}
          datas={datas}
          setDatas={setDatas}
          updateData={updateData}
          setUpdateData={setUpdateData}
        />
      </div>
      <div>
        <DatasList
          datas={datas}
          setDatas={setDatas}
          setUpdateData={setUpdateData}
        />
      </div>
    </div>
  );
}

export default App;

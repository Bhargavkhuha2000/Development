import React, { useState } from 'react';
import './App.css';
import Form from './component/Form';
import DatasList from './component/DatasList';

function App() {
  const [datas, setDatas] = useState('');
  const [updateData, setUpdateData] = useState(null);
  // console.log([...datas]);
  return (
    <div >
      <div className="App">
        <Form
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

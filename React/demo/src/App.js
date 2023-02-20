import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App(props) {
  // const [clickToChange, setClickToChange] = useState('');
  const [txtval, setChangeVal] = useState('');

  // const liveChange = (event) => {
  //   setChangeVal();
  // };

  const changeName = (event) => {
    setChangeVal(event.target.value);
  };
  return (
    <div className="App">
      <h1>Name : {txtval}</h1>
      <input type="text" className="txt" value={txtval} />
      <button className="btn" onClick={changeName}>
        Click Me
      </button>
    </div>
  );
}

export default App;

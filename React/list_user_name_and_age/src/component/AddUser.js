import React, { useState } from 'react';

const AddUser = (props) => {
  const [userVal, setUserVal] = useState('');
  const [ageVal, setAgeVal] = useState('');

  const userHandler = (event) => {
    setUserVal(event.target.value);
  };

  const ageHandle = (event) => {
    setAgeVal(event.target.value);
  };
  const submitHandle = (event) => {
    event.preventDefault();
    if (userVal.trim().length === 0 || ageVal.trim().length === 0) {
      return alert('Enter Something');
    } else if (+ageVal < 0) {
      return alert('pls enter valid age');
    }
    props.onAddUser(userVal, ageVal);
    setAgeVal('');
    setUserVal('');
  };

  return (
    <div className="App">
      <form onSubmit={submitHandle}>
        <p>UserName :</p>
        <input type="text" className="usr" onChange={userHandler} />
        <p>Age</p>
        <input type="text" className="age" onChange={ageHandle} />
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};
export default AddUser;

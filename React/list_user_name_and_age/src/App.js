import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import AddUser from './component/AddUser';
import UserList from './component/UserList';

function App() {
  const [userList, setUserList] = useState([]);
  const listHandler = (eName, eAge) => {
    setUserList((previeseData) => {
      console.log(previeseData.length + 1);
      return [
        ...previeseData,
        { id: +previeseData.length + 1, name: eName, age: eAge },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={listHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;

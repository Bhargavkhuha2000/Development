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
      const store = { id: +previeseData.length + 1, name: eName, age: eAge };
      setUserList(userList.push(store));
      console.log([...userList]);
      return [...userList];
    });
  };
  // console.log(userList);

  return (
    <div>
      <AddUser onAddUser={listHandler} />
      <UserList users={userList} Print={setUserList} />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import UserList from './component/UserList';
import AddUser from './component/AddUser';

function App(props) {
  const [userList, setUserList] = useState([]);

  const listHandler = (eName, eAge) => {
    setUserList((previeseData) => {
      return [...previeseData, { name: eName, age: eAge }];
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

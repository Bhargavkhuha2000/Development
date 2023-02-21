import React, { useState } from 'react';
// import Delete from './Delete';
const UserList = (props) => {
  const [userList, setUserList] = useState([]);
  const [getDeleteData, setDeleteData] = useState(userList.id);
  //   const listHandler = (eName, eAge) => {
  //     setUserList((previeseData) => {
  //       const data =[...previeseData, { name: eName, age: eAge }]
  //       console.log(data);
  //       return [...data];
  //     });
  //   };

  const deleteData = (event) => {
    const id = event.target.value;
    console.log(id);
    // console.log(userList.splice(id, 1));
    // setUserList();
  };

  // console.log(x);
  // console.log('hi');
  // console.log(userList.id);
  // setDeleteData(event.userList.id);
  // console.log(event.target.value);

  return (
    <ul>
      {props.users.map((user) => (
        <li>
          {user.id}) {user.name} is {user.age} year old
          <button
            type="submit"
            onClick={deleteData}
            value={user.id}
            name={user.id}
          >
            Delete {user.id} record
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;

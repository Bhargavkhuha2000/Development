import React, { useState } from 'react';
const UserList = (props) => {
  const deleteData = (event) => {
    const ids = +event.target.value;
    console.log(ids);
    // const getid = props.users[id.event.target.value];
    const index = props.users.findIndex((x) => +x.id === ids);
    console.log(`index : ${index}`);

    console.log(props.users[index]);
    props.users.splice(index, 1);
    props.Print([...props.users]);
    return [...props.users];
  };

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

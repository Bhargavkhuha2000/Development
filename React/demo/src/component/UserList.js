import React from 'react';
const UserList = (props) => {
  return (
    <ul>
      {props.users.map((user) => (
        <li>
          {user.name} ({user.age} year old)
        </li>
      ))}
    </ul>
  );
};

export default UserList;

import React, { ReactDOM } from 'react';

const DatasList = (props) => {
  //   console.log([...props.datas]);
  const handleDelete = (ids) => {
    props.setDatas(props.datas.filter((data) => data.id !== +ids));
  };
  const handleUpdate = (ids) => {
    const Update = props.datas.find((data) => data.id === ids);
    props.setUpdateData(Update);
  };
  console.log([...props.datas]);
  return (
    <div>
      <h2 align="center">Show Data</h2>
      <table align="center" border="1">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Gender</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
        {[...props.datas].map((d) => (
          <tr>
            <td>{d.fname}</td>
            <td>{d.lname}</td>
            <td>{d.address}</td>
            <td>{d.gender}</td>
            <td>
              <button
                type="submit"
                onClick={() => handleDelete(+d.id)}
                value={d.id}
                name={d.id}
              >
                Delete
              </button>
            </td>
            <td>
              <button
                type="submit"
                onClick={() => handleUpdate(+d.id)}
                value={d.id}
                name={d.id}
              >
                Update
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default DatasList;

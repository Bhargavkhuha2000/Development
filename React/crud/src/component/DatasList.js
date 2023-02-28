import React, { ReactDOM } from 'react';

const DatasList = (props) => {
  const { setDatas, datas, setUpdateData } = props;

  const handleDelete = (ids) => {
    setDatas(datas.filter((data) => data.id !== +ids));
  };

  const handleUpdate = (ids) => {
    setUpdateData(datas.find((data) => data.id === ids));
  };

  return (
    <div>
      <h1 align="center" style={{ color: 'white' }}>
        Show Data
      </h1>
      <table align="center" border="10">
        <tr style={{ color: 'rgb(127, 46, 199)' }}>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Gender</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
        {[...datas].map((d) => (
          <tr style={{ color: 'white' }}>
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

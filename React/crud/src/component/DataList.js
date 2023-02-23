import React, { useState } from 'react';
import AddData from './AddData';
import App from '../App';
import UpdateData from './UpdateData';

const DataList = (props) => {
  const [updatedData, setUpdatedData] = useState([]);
  const deleteData = (event) => {
    const ids = +event.target.value;
    console.log(ids);
    // const getid = props.users[id.event.target.value];
    const index = props.data.findIndex((x) => +x.id === ids);
    console.log(`index : ${index}`);

    console.log(props.data[index]);
    props.data.splice(index, 1);
    props.setData([...props.data]);
    return [...props.data];
  };

  const updateData = (event) => {
    const ids = +event.target.value;
    console.log(ids);
    // const getid = props.users[id.event.target.value];
    const index = props.data.findIndex((x) => +x.id === ids);
    console.log(`index : ${index}`);
    // setUpdatedData(props.data[index]);
    console.log(props.data[index]);
    setUpdatedData(props.data[index]);
    // props.onSetFname(props.data[index].Fname);
    // props.onSetLname(props.data[index].Lname);
    // props.onSetAddress(props.data[index].address);
    // props.onSetSelectedValue(props.data[index].gender);
    deleteData(props.data);
  };
  //   console.log(updatedData);
  return (
    <div>
      <h1>Show Data</h1>
      <table border="2" align="center">
        <tr>
          <th>First Name</th>
          <th>Last name</th>
          <th>Address</th>
          <th>gender</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
        {props.data.map((d) => (
          <tr>
            <td>{d.Fname}</td>
            <td>{d.Lname}</td>
            <td>{d.address}</td>
            <td>{d.gender}</td>
            <td>
              <button
                type="submit"
                onClick={deleteData}
                value={d.id}
                name={d.id}
              >
                Delete
              </button>
            </td>
            <td>
              <button
                type="submit"
                onClick={updateData}
                value={d.id}
                name={d.id}
              >
                Update
              </button>
            </td>
          </tr>
        ))}
      </table>
      {/* <UpdateData onUpdatedData={updatedData} /> */}
      {/* <App onUpdatedData={updatedData} /> */}
    </div>
  );
};
export default DataList;
// const store = {
//   id: +DataPass.length + 1,
//   Fname: fname,
//   Lname: lname,
//   address: add,
//   gender: gen,
// };

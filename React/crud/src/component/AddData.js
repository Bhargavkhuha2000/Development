import React, { useState } from 'react';
import DataList from './DataList';
import UpdateData from './UpdateData';
const AddData = (props) => {
  const [check, setCheck] = useState(true);
  const [selectedValue, setSelectedValue] = useState(undefined);
  const [FName, setFname] = useState('');
  const [LName, setLname] = useState('');
  const [Address, setAddress] = useState('');
  const [msg, setmsg] = useState('');

  const selectHandler = (event) => {
    // if (selectedValue === undefined) {
    setSelectedValue(event.target.value);
    // } else {
    //   setSelectedValue(props.onUpdate.gender);
    // }
  };
  //   console.log(`Gender : ${selectedValue}`);
  //   const update = () => {
  //     setFname(props.onUpdate.Fname);
  //     setLname(props.onUpdate.Lname);
  //     setAddress(props.onUpdate.Address);
  //     setSelectedValue(props.onUpdate.gender);
  //   };
  const chackHandle = () => {
    setCheck(false);
    console.log(`Button is Checked : ${check}`);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    if (
      FName.trim().length === 0 ||
      LName.trim().length === 0 ||
      Address.trim().length === 0
    ) {
      return setmsg('*Enter All Value');
    } else {
      let isFound = false;
      for (let i = 0; i < props.forRepeatData.length; i++) {
        if (
          props.forRepeatData[i].Fname === FName ||
          props.forRepeatData[i].Lname === LName ||
          props.forRepeatData[i].Address === Address
        ) {
          isFound = true;
          setmsg('*Data Already Inserted');
          break;
        }
        // setFname('');
        // setLname('');
        // setAddress('');
        // setSelectedValue(undefined);
      }
      if (isFound === false) {
        props.onAddData(FName, LName, Address, selectedValue, check);
        setmsg('');
        // chackHandle();
      } else {
        return console.log('Data Already Inserted');
      }
      setFname('');
      setLname('');
      setAddress('');
      //   setCheck(check);
      //   update();
    }
  };
  //   console.log(props.onUpdatedData);
  return (
    <div>
      <h2>Insert Data</h2>
      <table border="2" align="center">
        <tr>
          <td>First Name</td>
          <td>
            <input
              type="text"
              value={FName}
              onChange={(e) => {
                // if (e === '') {
                setFname(e.target.value);
                // } else {
                //   setFname(e.target.props.onUpdate);
                // }
              }}
              placeholder="Enter Your First Name"
            />
          </td>
        </tr>
        <tr>
          <td>Last Name</td>
          <td>
            <input
              type="text"
              value={LName}
              onChange={(e) => setLname(e.target.value)}
              placeholder="Enter Your Last Name"
            />
          </td>
        </tr>
        <tr>
          <td>Address</td>
          <td>
            <input
              type="text"
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter Your Address"
            />
          </td>
        </tr>
        <tr>
          <td>Gender</td>
          <td>
            <select value={selectedValue} onChange={selectHandler}>
              <option value="">-- Select Gender --</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <input type="checkbox" value={check} onChange={chackHandle} />
            Accept Term and Condition...
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <input
              type="button"
              name="btn"
              value="submit"
              disabled={check}
              onClick={submitHandler}
            />
          </td>
        </tr>
      </table>
      <h5 style={{ color: 'red' }}>{msg}</h5>
      {/* <h5>{props.onUpdate}</h5> */}
      {/* <UpdateData
        setSelectedValue={setSelectedValue}
        setFname={setFname}
        setLname={setLname}
        setAddress={setAddress}
      /> */}
    </div>
  );
};

export default AddData;

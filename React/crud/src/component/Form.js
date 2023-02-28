import React, { useState, useEffect } from 'react';

const Form = (props) => {
  const { datas, setDatas, updateData, setUpdateData } = props;

  const [check, setCheck] = useState(true);
  const [msg, setmsg] = useState('');
  const [ifChecked, setIfChecked] = useState(false);

  const [FnameInput, setFnameInput] = useState('');
  const [LnameInput, setLnameInput] = useState('');
  const [AddressInput, setAddressInput] = useState('');
  const [GenderInput, setGenderInput] = useState('');

  const selectHandler = (event) => {
    setGenderInput(event.target.value);
  };

  const chackHandle = (event) => {
    setCheck(!event.target.checked);
    setIfChecked(true);
    console.log(`Button is Checked : ${check}`);
  };

  const updateNewData = (
    id,
    FnameInput,
    LnameInput,
    AddressInput,
    GenderInput
  ) => {
    setDatas(
      datas.map((d) =>
        +d.id === +id
          ? {
              id: id,
              fname: FnameInput,
              lname: LnameInput,
              address: AddressInput,
              gender: GenderInput,
            }
          : d
      )
    );
    setUpdateData('');
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!updateData) {
      if (
        FnameInput.trim().length === 0 ||
        LnameInput.trim().length === 0 ||
        AddressInput.trim().length === 0
      ) {
        console.log('*Please Enter Value');
        return setmsg('*Please Enter Value');
      } else if (GenderInput === '') {
        console.log('*Select Gender');
        return setmsg('*Select Gender');
      }

      let isFound = false;

      for (let i = 0; i < datas.length; i++) {
        if (
          datas[i].fname === FnameInput ||
          datas[i].lname === LnameInput ||
          datas[i].address === AddressInput
        ) {
          isFound = true;
          return setmsg('*Data Already Inserted');
        }
      }

      if (isFound === false) {
        setDatas([
          ...datas,
          {
            id: datas.length,
            fname: FnameInput,
            lname: LnameInput,
            address: AddressInput,
            gender: GenderInput,
          },
        ]);
      }
    } else {
      updateNewData(
        +updateData.id,
        FnameInput,
        LnameInput,
        AddressInput,
        GenderInput
      );
    }

    setFnameInput('');
    setLnameInput('');
    setAddressInput('');
    setGenderInput('');
    setCheck(event.target.checked);
    setIfChecked(false);
    setmsg('');
  };

  useEffect(() => {
    if (updateData) {
      // console.log(updateData.fname);
      setFnameInput(updateData.fname);
      setLnameInput(updateData.lname);
      setAddressInput(updateData.address);
      setGenderInput(updateData.gender);
    } else {
      setFnameInput('');
      setLnameInput('');
      setAddressInput('');
      setGenderInput('');
    }
  }, [
    setFnameInput,
    setLnameInput,
    setAddressInput,
    setGenderInput,
    // updateNewData.newData,
    // setDatas,
    updateData,
  ]);

  return (
    <div>
      <h1 align="center" style={{ color: 'white' }}>
        Insert Data
      </h1>
      <form onSubmit={onFormSubmit}>
        <table border="1" align="center">
          <tr>
            <td>First Name</td>
            <td>
              <input
                type="text"
                value={FnameInput}
                onChange={(e) => {
                  setFnameInput(e.target.value);
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
                value={LnameInput}
                onChange={(e) => setLnameInput(e.target.value)}
                placeholder="Enter Your Last Name"
              />
            </td>
          </tr>
          <tr>
            <td>Address</td>
            <td>
              <input
                type="text"
                value={AddressInput}
                onChange={(e) => setAddressInput(e.target.value)}
                placeholder="Enter Your Address"
              />
            </td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>
              <select value={GenderInput} onChange={selectHandler}>
                <option value="">-- Select Gender --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <input
                type="checkbox"
                value={check}
                checked={ifChecked}
                onChange={chackHandle}
              />
              Accept Term and Condition...
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button
                type="submit"
                name="btn"
                value="submit"
                disabled={!ifChecked}
                // onClick={onFormSubmit}
              >
                {updateData ? 'Update' : 'Add'}
              </button>
            </td>
          </tr>
        </table>
      </form>
      <h4 style={{ color: 'red' }}>{msg}</h4>
    </div>
  );
};

export default Form;

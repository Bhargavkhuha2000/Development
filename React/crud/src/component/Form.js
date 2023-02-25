import React, { useState, useEffect } from 'react';

const Form = ({
  FnameInput,
  setFnameInput,
  LnameInput,
  setLnameInput,
  AddressInput,
  setAddressInput,
  GenderInput,
  setGenderInput,
  datas,
  setDatas,
  updateData,
  setUpdateData,
}) => {
  const [check, setCheck] = useState(true);
  const [msg, setmsg] = useState('');
  const selectHandler = (event) => {
    setGenderInput(event.target.value);
  };
  const chackHandle = () => {
    setCheck(!check);
    console.log(`Button is Checked : ${check}`);
  };
  const updateNewData = (
    id,
    FnameInput,
    LnameInput,
    AddressInput,
    GenderInput
  ) => {
    const newData = datas.map((d) =>
      +d.id === +id
        ? { id, FnameInput, LnameInput, AddressInput, GenderInput }
        : d
    );
    console.log([...newData]);
    setDatas([...newData]);
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
        return setmsg('*Please Enter Value');
      } else if (GenderInput === '') {
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
          setmsg('*Data Already Inserted');
          break;
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
        setFnameInput('');
        setLnameInput('');
        setAddressInput('');
        setGenderInput('');
        setCheck(!check.checked);
        setmsg('');
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
  };
  useEffect(() => {
    if (updateData) {
      console.log(updateData.fname);
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
      <h2 align="center">Insert Data</h2>
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
              <input type="checkbox" value={check} onChange={chackHandle} />
              Accept Term and Condition...
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button
                type="submit"
                name="btn"
                value="submit"
                disabled={check}
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

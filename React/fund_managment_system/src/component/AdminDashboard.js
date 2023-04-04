import React, { useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { BsFillPencilFill } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';

const AdminDashboard = () => {
  const getLoginData = JSON.parse(localStorage.getItem('userLogin'));
  const AdminData = JSON.parse(localStorage.getItem('data'));
  const getRegData = JSON.parse(localStorage.getItem('regData'));
  const [data, setdata] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateChange, setUpdateChange] = useState('');
  const [updateText, setUpdateText] = useState('');
  const [oneToAnother, setOneToAnother] = useState('');
  const firstData = getLoginData[0].data[0].id;
  const deleteHandler = (reid, did) => {
    const record = getRegData.filter((d) => reid === d.id);
    const rid = getRegData.findIndex((d) => reid === d.id);
    const aid = AdminData.findIndex((d) => reid === d.id);
    const datas = record[0].data;
    console.log(record);
    console.log(datas);
    console.log(getRegData[rid]);
    console.log(AdminData[aid]);
    console.log(did);
    const id = datas.findIndex((d) => did === d.id);
    console.log(id);
    if (id > 0) {
      if (id + 1 < datas.length) {
        datas[id + 1].CurrentBalance = datas[id - 1].FinalBalance;
        for (let i = id + 1; i < datas.length; i++) {
          if (datas[i].CreditDebit === 'Credit') {
            datas[i].FinalBalance =
              datas[i].CurrentBalance + datas[i].CreditDebitAmount;
            if (i + 1 < datas.length) {
              datas[i + 1].CurrentBalance = datas[i].FinalBalance;
            }
          } else if (datas[i].CreditDebit === 'Debit') {
            datas[i].FinalBalance =
              datas[i].CurrentBalance - datas[i].CreditDebitAmount;
            if (i + 1 < datas.length) {
              datas[i + 1].CurrentBalance = datas[i].FinalBalance;
            }
          }
        }
        console.log(datas);
      }
    }
    const finaldata = datas.filter((d) => d.id !== did);
    getRegData[rid].data = [];
    console.log(finaldata);
    if (finaldata.length > 0) {
      getRegData[rid].balance = finaldata[finaldata.length - 1].FinalBalance;
      AdminData[aid].balance = finaldata[finaldata.length - 1].FinalBalance;
    } else if (finaldata.length === 0) {
      getRegData[rid].balance = finaldata[0].FinalBalance;
      AdminData[aid].balance = finaldata[0].FinalBalance;
    }
    getRegData[rid].data.push(...finaldata);
    console.log(getRegData[rid]);
    AdminData[aid].data = [];
    AdminData[aid].data.push(...finaldata);
    setdata(AdminData[aid]);

    localStorage.setItem('regData', JSON.stringify(getRegData));
    localStorage.setItem('data', JSON.stringify(AdminData));

    window.location.reload();
  };

  const updateClick = (reid, did) => {
    setIsUpdate(true);
    const rid = AdminData.findIndex((d) => d.id === reid);
    const datas = AdminData[rid].data;
    const data = datas.find((d) => d.id === did);
    console.log(data);
    setUpdateText(data);
    setOneToAnother(AdminData[rid]);
  };
  const updateHandle = (ids) => {
    const { data } = oneToAnother;
    const id = data.findIndex((d) => d.id === ids);
    console.log(data);
    console.log(id);
    if (
      (updateChange >= 0 && updateChange <= data[id].CurrentBalance) ||
      id === 0
    ) {
      data[id].CreditDebitAmount = +updateChange;
      for (let i = id; i < data.length; i++) {
        if (data[i].CreditDebit === 'Credit') {
          data[i].FinalBalance =
            data[i].CurrentBalance + data[i].CreditDebitAmount;
          if (i + 1 < data.length) {
            data[i + 1].CurrentBalance = data[i].FinalBalance;
          }
        } else if (data[i].CreditDebit === 'Debit') {
          data[i].FinalBalance =
            data[i].CurrentBalance - data[i].CreditDebitAmount;
          if (i + 1 < data.length) {
            data[i + 1].CurrentBalance = data[i].FinalBalance;
          }
        }
      }
    } else if (updateChange < 0) {
      alert('nagetive value is not valid');
    } else if (updateChange > data[id].CurrentBalance) {
      alert("sorry you can't update this data");
    }
    const finaldata = [...data];
    const finalid = AdminData.findIndex((d) => d.id === oneToAnother.id);
    if (finaldata.length > 0) {
      AdminData[finalid].balance = finaldata[finaldata.length - 1].FinalBalance;
    } else if (finaldata.length === 0) {
      AdminData[finalid].balance = 0;
    }
    AdminData[finalid].data = [];
    AdminData[finalid].data.push(...finaldata);
    const regData = getRegData.map((d) =>
      d.userName === oneToAnother.userName ? AdminData[finalid] : d
    );
    localStorage.setItem('data', JSON.stringify(AdminData));
    localStorage.setItem('regData', JSON.stringify(regData));

    setIsUpdate(false);
    window.location.reload();
  };
  return (
    <div style={{ marginTop: '25px', marginLeft: '270px' }}>
      {AdminData.map((d) => (
        <>
          <h4>User Name : {d.userName}</h4>
          <h4>Balance : {d.balance}</h4>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>Current Balance</th>
                <th>Credit/Debit</th>
                <th>Credit/Debit Amount</th>
                <th>Date</th>
                <th>FinalBalance</th>
                <th>Update|Delete</th>
              </tr>
            </thead>
            <tbody>
              {d.data.map((a) => (
                <tr>
                  <td>{a.CurrentBalance}</td>
                  <td>{a.CreditDebit}</td>
                  <td>{a.CreditDebitAmount}</td>
                  <td>{a.Date}</td>
                  <td>{a.FinalBalance}</td>
                  <td>
                    <div>
                      <Button
                        variant="light"
                        value={a.id}
                        onClick={() => updateClick(+d.id, +a.id)}
                      >
                        <BsFillPencilFill />
                      </Button>

                      {firstData !== a.id && (
                        <>
                          <a>|</a>
                          <Button
                            variant="light"
                            value={a.id}
                            onClick={() => deleteHandler(+d.id, +a.id)}
                          >
                            <BsFillTrashFill />
                          </Button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ))}
      {isUpdate && (
        <>
          <h2 align="center" style={{ color: 'green' }}>
            Update
          </h2>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>User Name</th>
                <th>Current Balance</th>
                <th>Credit/Debit</th>
                <th>Credit/Debit Amount</th>
                <th>Date</th>
                <th>Final Balance</th>
                <th>Update</th>
              </tr>
            </thead>
            <tr>
              <td>{updateText.UserName}</td>
              <td>{updateText.CurrentBalance}</td>
              <td>{updateText.CreditDebit}</td>
              <td>
                <input
                  type="text"
                  placeholder={updateText.CreditDebitAmount}
                  value={updateChange}
                  onChange={(e) => {
                    setUpdateChange(e.target.value);
                  }}
                />
              </td>
              <td>{updateText.Date}</td>
              <td>{updateText.FinalBalance}</td>
              <td>
                <button onClick={() => updateHandle(+updateText.id)}>
                  update
                </button>
                <button onClick={() => setIsUpdate(false)}>Close</button>
              </td>
            </tr>
          </table>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;

import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { BsFillTrashFill } from 'react-icons/bs';
import { BsFillPencilFill } from 'react-icons/bs';

import AdminDashboard from './AdminDashboard';

const Dashboard = (props) => {
  const { fundData, t } = props;
  const [updateText, setUpdateText] = useState('');
  const getLoginData = JSON.parse(localStorage.getItem('userLogin'));

  const regdata = JSON.parse(localStorage.getItem('regData'));
  const [isUpdate, setIsUpdate] = useState(false);
  const [isShow, setIsShow] = useState(true);
  const [updateChange, setUpdateChange] = useState('');
  let i = 0;

  const { data } = getLoginData[0];

  const deleteHandler = (ids) => {
    const { data } = getLoginData[0];
    const id = data.findIndex((d) => d.id === ids);
    if (id > 0) {
      if (id + 1 < data.length) {
        data[id + 1].CurrentBalance = data[id - 1].FinalBalance;
        for (let i = id + 1; i < data.length; i++) {
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
        console.log(data);
      }
    } else {
      if (data[id].CreditDebit === 'Credit') {
        getLoginData[0].balance -= data[id].CreditDebitAmount;
      } else if (data[id].CreditDebit === 'Debit') {
        getLoginData[0].balance += data[id].CreditDebitAmount;
      }
    }
    const finaldata = data.filter((d) => d.id !== ids);
    getLoginData[0].data = [];
    console.log(finaldata);
    if (finaldata.length > 0) {
      getLoginData[0].balance = finaldata[finaldata.length - 1].FinalBalance;
    } else if (finaldata.length === 0) {
      getLoginData[0].balance = 0;
    }
    getLoginData[0].data.push(...finaldata);
    console.log(getLoginData[0]);
    const regData = regdata.map((d) =>
      d.id === getLoginData[0].id ? getLoginData[0] : d
    );
    localStorage.setItem('userLogin', JSON.stringify(getLoginData));
    localStorage.setItem('regData', JSON.stringify(regData));

    window.location.reload();
  };
  const updateClick = (ids) => {
    setIsUpdate(true);
    const { data } = getLoginData[0];
    setUpdateText(data.find((d) => d.id === ids));
  };
  const updateHandle = (ids) => {
    const { data } = getLoginData[0];
    const id = data.findIndex((d) => d.id === ids);
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
    if (finaldata.length > 0) {
      getLoginData[0].balance = finaldata[finaldata.length - 1].FinalBalance;
    } else if (finaldata.length === 0) {
      getLoginData[0].balance = 0;
    }
    getLoginData[0].data = [];
    getLoginData[0].data.push(...finaldata);
    console.log(getLoginData[0]);
    const regData = regdata.map((d) =>
      d.id === getLoginData[0].id ? getLoginData[0] : d
    );
    localStorage.setItem('userLogin', JSON.stringify(getLoginData));
    localStorage.setItem('regData', JSON.stringify(regData));

    setIsUpdate(false);
    window.location.reload();
  };
  const datas = JSON.parse(localStorage.getItem('userLogin'));
  const firstData = getLoginData[0].data[0].id;
  return (
    <div style={{ marginTop: '25px', overflow: 'scroll', height: '800px' }}>
      <h1 align="center">{t('Dashboard')}</h1>
      {getLoginData[0].user === 'User' && getLoginData && (
        <h4 style={{ marginLeft: '270px' }}>
          {t('Available Balance')} :{getLoginData[0].balance}
        </h4>
      )}
      <Row>
        <Col>
          <Col>
            <Container>
              {getLoginData[0].user === 'User' && (
                <table className="table">
                  <>
                    <thead className="thead-dark">
                      <tr>
                        <th>#</th>
                        <th>{t('User Name')}</th>
                        <th>{t('Current Balance')}</th>
                        <th>{t('Credit/Debit')}</th>
                        <th>{t('Credit/Debit Amount')}</th>
                        <th>{t('Date')}</th>
                        <th>{t('Final Balance')}</th>
                        <th>{t('Update | Delete')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {datas[0].data.map((d) => (
                        <tr>
                          <th>{++i}</th>
                          <td>{d.UserName}</td>
                          <td>{d.CurrentBalance}</td>
                          <td>{d.CreditDebit}</td>
                          <td>{d.CreditDebitAmount}</td>
                          <td>{d.Date}</td>
                          <td>{d.FinalBalance}</td>
                          <td>
                            <div>
                              <Button
                                variant="light"
                                value={d.id}
                                onClick={() => updateClick(+d.id)}
                              >
                                <BsFillPencilFill />
                              </Button>

                              {firstData !== d.id && (
                                <>
                                  <a>|</a>
                                  <Button
                                    variant="light"
                                    value={d.id}
                                    onClick={() => deleteHandler(+d.id)}
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
                  </>
                </table>
              )}
            </Container>
          </Col>
        </Col>
      </Row>
      {getLoginData[0].user === 'Admin' && <AdminDashboard />}
      {isUpdate && (
        <div style={{ marginLeft: '270px' }}>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>{t('User Name')}</th>
                <th>{t('Current Balance')}</th>
                <th>{t('Credit/Debit')}</th>
                <th>{t('Credit/Debit Amount')}</th>
                <th>{t('Date')}</th>
                <th>{t('Final Balance')}</th>
                <th>{t('Update')}</th>
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
                  {t('Update')}
                </button>
                <button onClick={() => setIsUpdate(false)}>{t('Close')}</button>
              </td>
            </tr>
          </table>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

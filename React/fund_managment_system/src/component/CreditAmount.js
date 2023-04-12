import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const CreditAmount = (props) => {
  const { fundData, setFundData, t } = props;
  const getLoginData = JSON.parse(localStorage.getItem('userLogin'));
  const getregData = JSON.parse(localStorage.getItem('regData'));
  const AdminData = JSON.parse(localStorage.getItem('data'));
  const [creditAmount, setCreditAmount] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');
  const [isDis, setIsDis] = useState(true);
  const [select, setLoginSelecter] = useState('');
  const [data, setdata] = useState('');
  const [finalBalance, setFinalBalance] = useState('');
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const creditHandler = (e) => {
    setCreditAmount(e.target.value);
    if (getLoginData[0].user === 'Admin') {
      setFinalBalance(data.balance + +e.target.value);
    }
    if (getLoginData[0].user === 'User') {
      setFinalBalance(+getLoginData[0].balance + +e.target.value);
    }
  };
  const username = [];
  if (getLoginData[0].user === 'Admin') {
    AdminData.map((d) => {
      username.push(d.userName);
    });
  }
  const options = [{ value: '', name: '-- Select User -- ' }];
  for (let i = 0; i < username.length; i++) {
    options.push({ value: username[i], name: username[i] });
  }
  console.log(options);

  const creditClickHandler = (e) => {
    e.preventDefault();
    if (creditAmount > 0) {
      if (getLoginData[0].user === 'User') {
        setFundData([
          ...fundData,
          {
            id: fundData.length + 1,
            UserName: getLoginData[0].name,
            CurrentBalance: getLoginData[0].balance,
            CreditDebit: 'Credit',
            CreditDebitAmount: +creditAmount,
            Date: date,
            FinalBalance: +finalBalance,
          },
        ]);

        setCreditAmount(0);
        setErrorMsg('');
        getLoginData[0].data.push({
          id: fundData.length + 1,
          UserName: getLoginData[0].name,
          CurrentBalance: getLoginData[0].balance,
          CreditDebit: 'Credit',
          CreditDebitAmount: +creditAmount,
          Date: date,
          FinalBalance: +finalBalance,
        });
        getLoginData[0].balance = finalBalance;

        getregData.map((d) =>
          d.id === getLoginData[0].id
            ? (d.balance = getLoginData[0].balance)
            : d
        );
        getregData.map((d) =>
          d.id === getLoginData[0].id
            ? d.data.push({
                id: fundData.length + 1,
                UserName: getLoginData[0].name,
                CurrentBalance: getLoginData[0].balance,
                CreditDebit: 'Credit',
                CreditDebitAmount: +creditAmount,
                Date: date,
                FinalBalance: +finalBalance,
              })
            : d
        );
        localStorage.setItem('regData', JSON.stringify(getregData));
        localStorage.setItem('userLogin', JSON.stringify(getLoginData));
        alert('Fund Credited Successfully');
      } else if (getLoginData[0].user === 'Admin') {
        const data = AdminData.find((d) => d.userName === select);
        AdminData.map((d) =>
          d.userName === select
            ? d.data.push({
                id: data.data.length,
                UserName: data.name,
                CurrentBalance: data.balance,
                CreditDebit: 'Credit',
                CreditDebitAmount: +creditAmount,
                Date: date,
                FinalBalance: +finalBalance,
              })
            : d
        );
        getregData.map((d) =>
          d.userName === select
            ? d.data.push({
                id: data.data.length,
                UserName: data.name,
                CurrentBalance: data.balance,
                CreditDebit: 'Credit',
                CreditDebitAmount: +creditAmount,
                Date: date,
                FinalBalance: +finalBalance,
              })
            : d
        );

        getregData.map((d) =>
          d.userName === select ? (d.balance = finalBalance) : d
        );
        AdminData.map((d) =>
          d.userName === select ? (d.balance = finalBalance) : d
        );
        alert('Fund Credited Successfully');
        localStorage.setItem('regData', JSON.stringify(getregData));
        localStorage.setItem('data', JSON.stringify(AdminData));
      }
    } else if (creditAmount === 0) {
      setErrorMsg('zero is not credited');
    } else if (creditAmount < 0) {
      setErrorMsg('Nagative value is not valid');
    }
  };
  const Selecterhandler = (e) => {
    setLoginSelecter(e.target.value);

    if (e.target.value !== '') {
      setIsDis(false);
      const id = AdminData.findIndex((d) => d.userName === e.target.value);
      setdata(AdminData[id]);
    }
    if (e.target.value === '') {
      setIsDis(true);
    }
  };

  return (
    <div>
      <Row>
        <Col xs={12}>
          <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
          >
            <Modal.Dialog>
              <Modal.Header>
                <Modal.Title>{t('Credit Amount')}</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>{t('User Name')}</Form.Label>
                    {getLoginData[0].user === 'User' && (
                      <Form.Control
                        type="text"
                        disabled={true}
                        placeholder={getLoginData[0].name}
                      />
                    )}
                    {getLoginData[0].user === 'Admin' && (
                      <Form.Select
                        aria-label="Default select example"
                        onChange={Selecterhandler}
                      >
                        {options.map((option) => (
                          <option value={option.value}>{option.name}</option>
                        ))}
                      </Form.Select>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>{t('Available Balance')}</Form.Label>
                    <Form.Control
                      type="number"
                      disabled={true}
                      placeholder={
                        (getLoginData[0].user === 'User' &&
                          getLoginData[0].balance) ||
                        (getLoginData[0].user === 'Admin' && data.balance)
                      }
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>{t('Credit Amount')}</Form.Label>
                    <Form.Control
                      type="number"
                      min="0"
                      disabled={
                        (getLoginData[0].user === 'Admin' && isDis) ||
                        (getLoginData[0].user === 'User' && false)
                      }
                      value={creditAmount}
                      onChange={creditHandler}
                      placeholder="Enter Credit Amount"
                    />
                    <h6 style={{ color: 'red' }}>{errorMsg}</h6>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>{t('Final Balance')}</Form.Label>
                    <Form.Control
                      type="number"
                      disabled={true}
                      value={+finalBalance}
                      placeholder={finalBalance}
                    />
                  </Form.Group>
                </form>
              </Modal.Body>

              <Modal.Footer>
                <NavLink to="/Dashboard">
                  <Button variant="secondary">{t('Close')}</Button>
                </NavLink>
                <Button variant="primary" onClick={creditClickHandler}>
                  {t('Credit Fund')}
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CreditAmount;

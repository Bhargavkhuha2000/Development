import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const DebitFund = (props) => {
  const { fundData, setFundData } = props;
  const getLoginData = JSON.parse(localStorage.getItem('userLogin'));
  const getregData = JSON.parse(localStorage.getItem('regData'));
  const [debitAmount, setDebitAmount] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');
  const [finalBalance, setFinalBalance] = useState(getLoginData[0].balance);
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const debitHandler = (e) => {
    setDebitAmount(e.target.value);
    setFinalBalance(+getLoginData[0].balance - +e.target.value);
  };
  const debitClickHandler = (e) => {
    e.preventDefault();
    if (debitAmount > 0 && getLoginData[0].balance >= debitAmount) {
      setFundData([
        ...fundData,
        {
          id: fundData.length + 1,
          UserName: getLoginData[0].name,
          CurrentBalance: getLoginData[0].balance,
          CreditDebit: 'Debit',
          CreditDebitAmount: +debitAmount,
          Date: date,
          FinalBalance: +finalBalance,
        },
      ]);
      setDebitAmount(0);
      setErrorMsg('');
      getLoginData[0].data.push({
        id: fundData.length + 1,
        UserName: getLoginData[0].name,
        CurrentBalance: getLoginData[0].balance,
        CreditDebit: 'Debit',
        CreditDebitAmount: +debitAmount,
        Date: date,
        FinalBalance: +finalBalance,
      });
      getLoginData[0].balance = finalBalance;

      getregData.map((d) =>
        d.id === getLoginData[0].id ? (d.balance = getLoginData[0].balance) : d
      );
      getregData.map((d) =>
        d.id === getLoginData[0].id
          ? d.data.push({
              id: fundData.length + 1,
              UserName: getLoginData[0].name,
              CurrentBalance: getLoginData[0].balance,
              CreditDebit: 'Debit',
              CreditDebitAmount: +debitAmount,
              Date: date,
              FinalBalance: +finalBalance,
            })
          : d
      );
      localStorage.setItem('regData', JSON.stringify(getregData));
      localStorage.setItem('userLogin', JSON.stringify(getLoginData));
      getLoginData[0].balance = finalBalance;

      getregData.map((d) =>
        d.userName === getLoginData[0].name
          ? (d.balance = getLoginData[0].balance)
          : d
      );
      localStorage.setItem('regData', JSON.stringify(getregData));
      localStorage.setItem('userLogin', JSON.stringify(getLoginData));
      // console.log(fundManage);
      alert('Fund Debited Successfully');
    } else if (debitAmount < 0) {
      setErrorMsg('Nagative value is not valid');
    } else if (getLoginData[0].balance <= debitAmount) {
      setErrorMsg('debit amount is not greater than current balance');
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
                <Modal.Title>Debit Amount</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={true}
                      placeholder={getLoginData[0].name}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Available Balance</Form.Label>
                    <Form.Control
                      type="number"
                      disabled={true}
                      placeholder={getLoginData[0].balance}
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Debit Amount</Form.Label>
                    <Form.Control
                      type="number"
                      min="0"
                      value={debitAmount}
                      onChange={debitHandler}
                      placeholder="Enter Debit Amount"
                    />
                    <h6 style={{ color: 'red' }}>{errorMsg}</h6>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Final Balance</Form.Label>
                    <Form.Control
                      type="number"
                      disabled={true}
                      value={finalBalance}
                      placeholder={finalBalance}
                    />
                  </Form.Group>
                </form>
              </Modal.Body>

              <Modal.Footer>
                <NavLink to="/">
                  <Button variant="secondary">Close</Button>
                </NavLink>
                <Button variant="primary" onClick={debitClickHandler}>
                  Debit Fund
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
            <p></p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DebitFund;

import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
const DebitFund = (props) => {
  const {
    fundManage,
    date,
    setFundManage,
    finalBalance,
    setFinalBalance,
    setCurrentBalance,
    CurrentBalance,
    RegisterData,
  } = props;
  const getLoginData = JSON.parse(localStorage.getItem('userLogin'));
  const getregData = JSON.parse(localStorage.getItem('regdata'));
  const [debitAmount, setDebitAmount] = useState(0);
  // const [finalBalance, setFinalBalance] = useState(getLoginData[0].Balance);
  const [errorMsg, setErrorMsg] = useState('');
  const debitHandler = (e) => {
    setDebitAmount(e.target.value);
    if (+getLoginData[0].Balance >= +e.target.value) {
      setFinalBalance(+getLoginData[0].Balance - +e.target.value);
      setErrorMsg('');
    } else {
      setErrorMsg('debit amount is greater than available balance');
    }
  };
  const debitClickHandler = (e) => {
    e.preventDefault();
    if (+getLoginData[0].Balance >= debitAmount) {
      if (debitAmount > 0) {
        setFundManage([
          ...fundManage,
          {
            id: fundManage.length,
            UserName: getLoginData[0].FullName,
            CreditDebit: 'Debit',
            CreditAmount: '-',
            DebitAmount: debitAmount,
            Date: date,
            FinalBalance: finalBalance,
          },
        ]);
        setDebitAmount(0);
        setErrorMsg('');
        setCurrentBalance(finalBalance);
        getLoginData[0].Balance = finalBalance;
        RegisterData.filter((d) => {
          if (d.UserName === getLoginData[0].UserName) {
            d.Balance = getLoginData[0].Balance;
          }
        });
        localStorage.setItem('regdata', JSON.stringify(RegisterData));
        localStorage.setItem('userLogin', JSON.stringify(getLoginData));

        console.log(fundManage);
        alert('Fund Debited successfully');
      } else {
        setErrorMsg('nagative value is not valid');
      }
    } else {
      setErrorMsg('debit amount is greater than available balance ');
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
                      placeholder={getLoginData[0].FullName}
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
                      placeholder={CurrentBalance}
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
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ color: 'red' }}>{errorMsg}</Form.Label>
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

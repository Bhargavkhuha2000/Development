import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import validator from 'validator';
import { NavLink } from 'react-router-dom';
const CreditFund = (props) => {
  const {
    fundManage,
    date,
    setFundManage,
    finalBalance,
    setFinalBalance,
    setCurrentBalance,
    CurrentBalance,
  } = props;
  const getLoginData = JSON.parse(localStorage.getItem('userLogin'));
  const getregData = JSON.parse(localStorage.getItem('regdata'));
  const [creditAmount, setCreditAmount] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');
  const [finalB, setFinalB] = useState(getLoginData[0].Balance);
  // const CurrentBalance = finalBalance;
  const creditHandler = (e) => {
    setCreditAmount(e.target.value);
    setFinalBalance(+getLoginData[0].Balance + +e.target.value);
  };
  const creditClickHandler = (e) => {
    e.preventDefault();
    if (creditAmount > 0) {
      setFundManage([
        ...fundManage,
        {
          id: fundManage.length,
          UserName: getLoginData[0].FullName,
          CreditAmount: +creditAmount,
          DebitAmount: '-',
          Date: date,
          FinalBalance: +finalBalance,
        },
      ]);
      setCreditAmount(0);
      setErrorMsg('');
      setCurrentBalance(finalBalance);
      getLoginData[0].Balance = finalBalance;
      // getregData.map((d) =>
      //   d.UserName !== getLoginData[0].UserName
      //     ? localStorage.setItem('regdata', JSON.stringify(d))
      //     : localStorage.setItem('regdata', JSON.stringify(getLoginData))
      // );
      for (let i = 0; i < getregData.length; i++) {
        if (getregData[i].UserName === getLoginData[0].UserName) {
          getregData[i].Balance = getLoginData[0].Balance;
          localStorage.setItem('regdata', JSON.stringify(getregData[i]));
        } else {
          localStorage.setItem('regdata', JSON.stringify(getregData[i]));
        }
      }
      localStorage.setItem('userLogin', JSON.stringify(getLoginData));
      console.log(fundManage);
      alert('Fund Credited Successfully');
    } else {
      setErrorMsg('Nagative value is not valid');
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
                <Modal.Title>Credit Amount</Modal.Title>
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
                      // value={email}
                      // onChange={(event) => setemail(event.target.value)}
                      // placeholder={loginSelecter}
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
                    <Form.Label>Credit Amount</Form.Label>
                    <Form.Control
                      type="number"
                      min="0"
                      value={creditAmount}
                      onChange={creditHandler}
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
                      // onLoad={(e) =>
                      //   setFinalBalance(+e.target.value + +creditAmount)
                      // }
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
                <Button variant="primary" onClick={creditClickHandler}>
                  Credit Fund
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

export default CreditFund;

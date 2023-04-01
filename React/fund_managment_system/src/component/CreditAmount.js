import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import validator from 'validator';
import { NavLink } from 'react-router-dom';

const CreditAmount = (props) => {
  const { fundData, setFundData } = props;
  const getLoginData = JSON.parse(localStorage.getItem('userLogin'));
  const getregData = JSON.parse(localStorage.getItem('regdata'));
  const [creditAmount, setCreditAmount] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');
  const [finalBalance, setFinalBalance] = useState(getLoginData[0].balance);
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const creditHandler = (e) => {
    setCreditAmount(e.target.value);
    setFinalBalance(+getLoginData[0].balance + +e.target.value);
  };
  const creditClickHandler = (e) => {
    e.preventDefault();
    if (creditAmount > 0) {
      setFundData([
        ...fundData,
        {
          id: fundData.length,
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
      getLoginData[0].balance = finalBalance;

      // RegisterData.filter((d) => {
      //   if (d.UserName === getLoginData[0].name) {
      //     d.Balance = getLoginData[0].balance;
      //   }
      // });
      // localStorage.setItem('regdata', JSON.stringify(RegisterData));
      localStorage.setItem('userLogin', JSON.stringify(getLoginData));
      // console.log(fundManage);
      alert('Fund Credited Successfully');
    } else if (creditAmount === 0) {
      setErrorMsg('zero is not credited');
    } else if (creditAmount < 0) {
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
                    <Form.Label>Credit Amount</Form.Label>
                    <Form.Control
                      type="number"
                      min="0"
                      value={creditAmount}
                      onChange={creditHandler}
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
                      value={+finalBalance}
                      placeholder={finalBalance}
                    />
                  </Form.Group>
                  {/* <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label style={{ color: 'red' }}>{errorMsg}</Form.Label>
                  </Form.Group> */}
                </form>
              </Modal.Body>

              <Modal.Footer>
                <NavLink to="/Dashboard">
                  <Button variant="secondary">Close</Button>
                </NavLink>
                <Button variant="primary" onClick={creditClickHandler}>
                  Credit Fund
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

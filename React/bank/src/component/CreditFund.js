import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import validator from 'validator';
import { NavLink, useNavigate } from 'react-router-dom';
const CreditFund = () => {
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
                    <Form.Label>Available Balance</Form.Label>
                    <Form.Control
                      type="number"
                      // value={email}
                      // onChange={(event) => setemail(event.target.value)}
                      // placeholder={loginSelecter}
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Credit Amount</Form.Label>
                    <Form.Control
                      type="number"
                      // value={password}
                      // onChange={(event) => setpassword(event.target.value)}
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
                      // value={password}
                      // onChange={(event) => setpassword(event.target.value)}
                      placeholder=""
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    {/* <Form.Label style={{ color: 'red' }}>{errorMsg}</Form.Label> */}
                  </Form.Group>
                </form>
              </Modal.Body>

              <Modal.Footer>
                <NavLink to="/">
                  <Button variant="secondary">Close</Button>
                </NavLink>
                <Button variant="primary" onClick={() => {}}>
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

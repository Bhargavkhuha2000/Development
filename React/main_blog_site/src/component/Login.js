import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Login = () => {
  return (
    <>
      <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Add Blog</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  //   value={blgName}
                  //   onChange={(event) => setblgName(event.target.value)}
                  placeholder="Email"
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  //   value={title}
                  //   onChange={(event) => settitle(event.target.value)}
                  placeholder="Password"
                />
              </Form.Group>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <NavLink to="/">
              <Button variant="secondary">Close</Button>
            </NavLink>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
          <p align="center">
            Don't Have Account?
            <NavLink to="/Reg">Register Now</NavLink>
          </p>
        </Modal.Dialog>
        <p></p>
      </div>
    </>
  );
};
export default Login;

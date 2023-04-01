import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
const initialValues = {
  id: 0,
  name: '',
  email: '',
  userName: '',
  balance: '',
  password: '',
  confirmPassword: '',
};
const Register = () => {
  const nav = useNavigate();
  const [errorMsg, setErrorMsg] = useState({
    user: '',
    email: '',
  });
  const validates = (value) => {
    const errors = {};
    if (value.name.trim().length === 0) {
      errors.name = 'please enter name';
    } else if (!validator.isAlpha(value.name)) {
      errors.name = 'please enter valied name';
    }
    if (value.email.trim().length === 0) {
      errors.email = 'please enter Email id';
    } else if (!validator.isEmail(value.email)) {
      errors.email = 'Email Not Valid';
    } else if (!value.email.includes('@prominentpixel.com')) {
      errors.email = 'Your Email Ends with @prominentpixel.com';
    }
    if (value.userName.trim().length === 0) {
      errors.userName = 'please enter username';
    } else if (!validator.isAlphanumeric(value.userName)) {
      errors.userName = 'Enter valid user name';
    }
    if (value.balance.length === 0) {
      errors.balance = 'please enter balance';
    }
    if (value.password.trim().length === 0) {
      errors.password = 'please enter password';
    } else if (value.password.length < 6) {
      errors.password = 'password atlist on 6 character';
    } else if (!validator.isStrongPassword(value.password)) {
      errors.password = 'Give stroge password';
    }

    if (value.confirmPassword.trim().length === 0) {
      errors.confirmPassword = 'please enter confirm password';
    }

    if (value.password !== value.confirmPassword) {
      errors.confirmPassword =
        'your password and confirm password are not same';
    }
    return errors;
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validate: validates,
      onSubmit: (value, { resetForm }) => {
        const data = JSON.parse(localStorage.getItem('regData'));
        if (!data) {
          value.id = 0;
          localStorage.setItem('regData', JSON.stringify([value]));
          console.log(value);
          resetForm({ value: '' });
          alert('Your Account have be created');
          nav('/Login');
        } else {
          value.id = data.length;
          let isFound = false;
          for (let i = 0; i < data.length; i++) {
            if (data[i].email === value.email) {
              isFound = true;
              setErrorMsg({ email: 'Email Already Use' });
              break;
            }
            if (data[i].userName === value.userName) {
              isFound = true;
              setErrorMsg({ user: 'User Name Already Use' });
              break;
            }
          }
          if (isFound === false) {
            localStorage.setItem('regData', JSON.stringify([...data, value]));
            console.log(value);
            resetForm({ value: '' });
            setErrorMsg({ email: '', user: '' });
            alert('Your Account have be created');
            nav('/Login');
          }
        }
      },
    });
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
                <Modal.Title>Register</Modal.Title>
              </Modal.Header>

              <Modal.Body style={{ overflow: 'scroll', height: '700px' }}>
                <form onSubmit={handleSubmit}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Select
                      aria-label="Default select example"
                      //   value={loginSelecter}
                      //   onChange={(e) => setLoginSelecter(e.target.value)}
                    >
                      <option value="">---Select User---</option>
                      <option value="Email">User</option>
                      <option value="UserName">Admin</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      id="name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? (
                      <h6 style={{ color: 'red' }}>{errors.name}</h6>
                    ) : null}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      id="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <h6 style={{ color: 'red' }}>{errors.email}</h6>
                    ) : null}
                    {errorMsg.email ? (
                      <h6 style={{ color: 'red' }}> {errorMsg.email}</h6>
                    ) : null}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label htmlFor="userName">User Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="User Name"
                      id="userName"
                      name="userName"
                      value={values.userName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.userName && touched.userName ? (
                      <h6 style={{ color: 'red' }}> {errors.userName}</h6>
                    ) : null}
                    {errorMsg.user ? (
                      <h6 style={{ color: 'red' }}> {errorMsg.user}</h6>
                    ) : null}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label htmlFor="balance">Balance</Form.Label>
                    <Form.Control
                      type="number"
                      id="balance"
                      min={0}
                      name="balance"
                      placeholder="Enter Your Balance.."
                      value={values.balance}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.balance && touched.balance ? (
                      <h6 style={{ color: 'red' }}>{errors.balance}</h6>
                    ) : null}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      id="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <h6 style={{ color: 'red' }}>{errors.password}</h6>
                    ) : null}
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label htmlFor="confirmPassword">
                      Confirm Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      id="confirmPassword"
                      placeholder="confirm Password"
                      name="confirmPassword"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.confirmPassword && touched.confirmPassword ? (
                      <h6 style={{ color: 'red' }}>{errors.confirmPassword}</h6>
                    ) : null}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                    align="center"
                  >
                    <Button variant="primary" type="submit">
                      Register
                    </Button>
                    <NavLink to="/Login">
                      <Button variant="secondary">Close</Button>
                    </NavLink>
                  </Form.Group>
                </form>
                <p align="center">
                  Already Register?
                  <NavLink to="/Login"> Login Now</NavLink>
                </p>
              </Modal.Body>
            </Modal.Dialog>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Register;

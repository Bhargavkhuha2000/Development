import React, { useState } from 'react';

import { Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import validator from 'validator';
import { NavLink, useNavigate } from 'react-router-dom';
const Login = (props) => {
  const { t } = props;
  const redirectHome = useNavigate();

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [errorMsg, setErrorMsg] = useState({
    user: '',
    email: '',
    password: '',
  });
  const [loginSelecter, setLoginSelecter] = useState('Email');

  const loginHandler = (e) => {
    e.preventDefault();

    const getregData = JSON.parse(localStorage.getItem('regData'));
    console.log(getregData);

    if (email.trim().length === 0) {
      setErrorMsg({ email: 'please Enter Email' });
    } else if (password.trim().length === 0) {
      setErrorMsg({ password: 'please Enter Password' });
    } else if (loginSelecter === 'Email' && !validator.isEmail(email)) {
      setErrorMsg({ email: 'Email Not Valid' });
    } else if (
      loginSelecter === 'Email' &&
      !email.includes('@prominentpixel.com')
    ) {
      setErrorMsg({ email: 'Your Email Ends with @prominentpixel.com' });
    } else if (password.trim().length < 6) {
      setErrorMsg({ password: 'password atlist on 6 character' });
    } else {
      if (getregData.length) {
        // const userdata = JSON.parse(getregData);
        const userlogin = getregData.filter((el, k) => {
          if (loginSelecter === 'Email') {
            return el.email === email && el.password === password;
          } else if (loginSelecter === 'UserName') {
            return el.userName === email && el.password === password;
          }
        });

        console.log(userlogin);

        if (userlogin.length === 0) {
          alert('Invalid Data');
        } else {
          alert('Login Successfull');
          localStorage.setItem('userLogin', JSON.stringify(userlogin));
          const getLoginData = JSON.parse(localStorage.getItem('userLogin'));
          if (getLoginData[0].user === 'Admin') {
            const data = getregData.filter((d) => {
              if (d.user === 'User') {
                return d;
              }
            });
            console.log(data);
            getLoginData[0].data = [];
            getLoginData[0].data.push(data);
            localStorage.setItem('data', JSON.stringify(data));
            localStorage.setItem('userLogin', JSON.stringify(userlogin));
          }

          redirectHome('/Dashboard');
        }
      }
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
                <Modal.Title>{t('Login')}</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Select
                      aria-label="Default select example"
                      value={loginSelecter}
                      onChange={(e) => setLoginSelecter(e.target.value)}
                    >
                      <option value="Email">{t('Email')}</option>
                      <option value="UserName">{t('User Name')}</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>{loginSelecter}</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(event) => setemail(event.target.value)}
                      placeholder={loginSelecter}
                    />
                    {loginSelecter === 'Email' && errorMsg.email ? (
                      <h6 style={{ color: 'red' }}> {errorMsg.email}</h6>
                    ) : null}
                    {loginSelecter === 'UserName' && errorMsg.user ? (
                      <h6 style={{ color: 'red' }}> {errorMsg.user}</h6>
                    ) : null}
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>{t('Password')}</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(event) => setpassword(event.target.value)}
                      placeholder="Password"
                    />
                    {errorMsg.password ? (
                      <h6 style={{ color: 'red' }}> {errorMsg.password}</h6>
                    ) : null}
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
                  <Button variant="secondary">{t('Close')}</Button>
                </NavLink>
                <Button variant="primary" onClick={loginHandler}>
                  {t('Login')}
                </Button>
              </Modal.Footer>
              <p align="center">
                {t("Don't Have Account")}?
                <NavLink to="/Register">{t('Register Now')}</NavLink>
              </p>
            </Modal.Dialog>
            <p></p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;

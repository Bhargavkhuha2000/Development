import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './footer.css';
import './SideNavBar.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const nav = useNavigate();
  const loginHandler = (e) => {
    e.preventDefault();
    nav('./Login');
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Navbar bg="dark" className="navbar-fixed-top">
              <Container>
                {/* <Navbar.Brand
                  href="#"
                  align="center"
                  style={{ color: 'white' }}
                >
                  Welcome
                </Navbar.Brand> */}

                <Navbar.Brand
                  href="#"
                  align="center"
                  style={{ color: 'white' }}
                >
                  Fund Manage System
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  ></Nav>
                  <Form className="d-flex">
                    <Button variant="primary" onClick={loginHandler}>
                      Login Now
                    </Button>

                    {/* <Button variant="primary">Logout</Button> */}
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="sidebar">
              <>
                <NavLink to="/DashBoard">Dashboard</NavLink>
                <NavLink to="/CreditFund">Credit Fund</NavLink>
                <NavLink to="/DebitFund">Debit Fund</NavLink>
              </>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Container>
              <div className="footer">
                <footer className="page-footer font-small blue">
                  <br />
                  <h5>© 2022 Prominentpixel</h5>
                </footer>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;

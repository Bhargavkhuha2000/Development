import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { BsFillTrashFill } from 'react-icons/bs';
import { BsFillPencilFill } from 'react-icons/bs';
const Dashboard = () => {
  return (
    <div style={{ marginTop: '25px' }}>
      <h1 align="center">DashBoard</h1>
      <Row>
        <Col>
          <Col>
            <Container>
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th>#</th>
                    <th>User Name</th>
                    <th>Credit Amount</th>
                    <th>Debit Amount</th>
                    <th>Date</th>
                    <th>Final Balance</th>
                    <th>Delete | Update</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Bhargav</td>
                    <td>2000</td>
                    <td>-</td>
                    <td>28/3/2023</td>
                    <td>5000</td>
                    <td>
                      <div>
                        <Button variant="light">
                          <BsFillTrashFill />
                        </Button>

                        <Button variant="light">
                          <BsFillPencilFill />
                        </Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Container>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;

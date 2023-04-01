import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { BsFillTrashFill } from 'react-icons/bs';
import { BsFillPencilFill } from 'react-icons/bs';

const Dashboard = (props) => {
  const { fundData } = props;
  const getLoginData = JSON.parse(localStorage.getItem('userLogin'));
  const regdata = JSON.parse(localStorage.getItem('regdata'));
  let i = 0;
  const data = fundData.filter((d) =>
    d.UserName === getLoginData[0].name ? d : ''
  );
  const deleteHandler = (ids) => {
    // const index = regdata.UserName.indexof(getLoginData[0].UserName);
    // console.log(index);
    // setFundManage(fundManage.filter((data) => data.id !== +ids));
  };
  return (
    <div style={{ marginTop: '25px' }}>
      <h1 align="center">DashBoard</h1>
      {getLoginData && (
        <h4 style={{ marginLeft: '270px' }}>
          Available Balance :{getLoginData[0].balance}
        </h4>
      )}
      <Row>
        <Col>
          <Col>
            <Container>
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th>#</th>
                    <th>User Name</th>
                    <th>Current Balance</th>
                    <th>Credit/Debit</th>
                    <th>Credit/Debit Amount</th>
                    <th>Date</th>
                    <th>Final Balance</th>
                    <th>Delete | Update</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((d) => (
                    <tr>
                      <th>{++i}</th>
                      <td>{d.UserName}</td>
                      <td>{d.CurrentBalance}</td>
                      <td>{d.CreditDebit}</td>
                      <td>{d.CreditDebitAmount}</td>
                      <td>{d.Date}</td>
                      <td>{d.FinalBalance}</td>
                      <td>
                        <div>
                          <Button
                            variant="light"
                            value={d.id}
                            onClick={() => deleteHandler(+d.id)}
                          >
                            <BsFillTrashFill />
                          </Button>

                          <Button variant="light" value={d.id}>
                            <BsFillPencilFill />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
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

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { BsFillTrashFill } from 'react-icons/bs';
import { BsFillPencilFill } from 'react-icons/bs';
const Dashboard = (props) => {
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
  const regdata = JSON.parse(localStorage.getItem('regdata'));
  let i = 0;
  const data = fundManage.filter((d) =>
    d.UserName === getLoginData[0].UserName ? d : ''
  );
  const deleteHandler = (ids) => {
    // const index = regdata.UserName.indexof(getLoginData[0].UserName);
    // console.log(index);
    setFundManage(fundManage.filter((data) => data.id !== +ids));
  };
  return (
    <div style={{ marginTop: '25px' }}>
      <h1 align="center">DashBoard</h1>
      {getLoginData && (
        <h4 style={{ marginLeft: '270px' }}>
          Available Balance :{getLoginData[0].Balance}
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
                    <th>Credit/Debit</th>
                    <th>Credit Amount</th>
                    <th>Debit Amount</th>
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
                      <td>{d.CreditDebit}</td>
                      <td>{d.CreditAmount}</td>
                      <td>{d.DebitAmount}</td>
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

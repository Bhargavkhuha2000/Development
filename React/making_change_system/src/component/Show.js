import React from 'react';

const Show = (props) => {
  const { data, total } = props;
  let i = 0;
  return (
    <div align="center">
      <h2>Show Note</h2>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Note Name</th>
            <th>Note</th>
            <th></th>
            <th>No. of Note</th>
            <th></th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr>
              <td>{++i}</td>
              <td>{d.NoteName}</td>
              <td>{d.Note}</td>
              <td>X</td>
              <td>{d.NumberOf}</td>
              <td>=</td>
              <td>{d.Total}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={7} align="right">
              Total Balance : {total}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Show;

import React from 'react';

const ShowExchange = (props) => {
  const { change, bill, given } = props;
  let data = [];
  data = change
    ? change.filter((d) => {
        if (d.noOfNote !== 0) {
          return d;
        }
      })
    : [];
  let total = 0;
  data.map((d) => {
    total += d.noOfNote * d.note;
  });

  let i = 0;

  return (
    <div>
      {data?.length === 0 ? (
        <h3>
          <i>No data Found</i>
        </h3>
      ) : (
        <>
          <h2 align="center">Show Exchange Notes</h2>
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Note</th>
                <th></th>
                <th>No of Note</th>
                <th></th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, index) => (
                <tr key={index}>
                  <td>{++i}</td>
                  <td>{d.note}</td>
                  <td>X</td>
                  <td>{d.noOfNote}</td>
                  <td>=</td>
                  <td>{d.note * d.noOfNote}</td>
                </tr>
              ))}
              <tr>
                <td colSpan={2}>Total Bill : {bill}</td>
                <td colSpan={2} align="center">
                  Total Given : {given}
                </td>
                <td align="center" colSpan={2}>
                  Total Return Amount : {total}
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default ShowExchange;

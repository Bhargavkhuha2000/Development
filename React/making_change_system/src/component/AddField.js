import React, { useEffect, useState } from 'react';
import './button.css';

const AddField = () => {
  const [data, setData] = useState([
    {
      id: 0,
      NoteName: '',
      Note: '',
      NumberOf: '',
      Total: '',
    },
  ]);
  const [Total, setTotal] = useState(0);
  const [isClick, setIsClick] = useState(false);
  const [isChangeShow, setChangeShow] = useState(false);
  const [isfinalShow, setIsFinalShow] = useState(false);
  const [TotalBill, setTotalBill] = useState('');
  const [TotalGiven, setTotalGiven] = useState('');
  const [Change, setChange] = useState('');
  const listHandle = (e) => {
    e.preventDefault();
    console.log('click');
    console.log(data);
    setData([
      ...data,
      { id: data.length, NoteName: '', Note: '', NumberOf: '', Total: '' },
    ]);
  };
  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onChangeVal = [...data];
    if (name === 'Total' || name === 'Note') {
      onChangeVal[i][name] = +value;
    } else if (name === 'NoteName') {
      onChangeVal[i][name] = value;
    }
    setData(onChangeVal);
  };
  const deleteHandle = (i) => {
    const datas = [...data];
    datas.splice(i, 1);
    // console.log('click');
    setData([...datas]);
    console.log(datas);
  };
  const saveHandle = () => {
    const datas = [...data];
    console.log(datas);
    let isFound = false;
    for (const element of datas) {
      if (element.Total % element.Note === 0) {
        element.Total = +element.Total;
        element.Note = +element.Note;
        element.NumberOf = element.Total / element.Note;
      } else if (
        element.NoteName === '' ||
        element.Note === '' ||
        element.Total === ''
      ) {
        alert(`Empty field is not allow`);
        isFound = true;
        break;
      } else if (element.Total % element.Note !== 0) {
        element.Total = 0;
        element.NumberOf = 0;
        setIsClick(false);
        alert(`${element.Note} notes Total is wrong`);
        isFound = true;
        break;
      }
    }
    if (isFound === false) {
      datas.sort((a, b) => {
        return a.Note - b.Note;
      });
      setData(datas);
      let TotalData = 0;
      datas.map((a) => {
        return (TotalData = TotalData + a.Total);
      });
      setTotal(TotalData.toFixed(2));
      setIsClick(true);
    }
    // datas.map((d) => {
    //   d.Total = (d.Note * d.NumberOf).toFixed(2);
    // });
    // datas.sort((a, b) => {
    //   return a.Note - b.Note;
    // });
    // console.log(datas);
    // setData(datas);
    // let TotalData = 0;
    // datas.map((a) => {
    //   return (TotalData = +TotalData + +a.Total);
    // });
    // console.log(TotalData);
    // setTotal(TotalData.toFixed(2));
    // setIsClick(true);
  };
  const GoForChange = () => {
    setChangeShow(true);
  };
  const submitHandle = () => {
    if (+TotalBill === '') {
      alert('Please enter Total Bill Amount');
    } else if (+TotalGiven === '') {
      alert('Please Enter Given Amount');
    } else if (+TotalBill > +TotalGiven) {
      console.log('Total Given', TotalGiven);
      console.log('Total Bill', TotalBill);
      console.log([+TotalBill, +TotalGiven]);
      alert('Your bill is greater than given money');
    } else {
      const changes = (+TotalGiven - +TotalBill).toFixed(2);
      console.log(changes);
      const datas = [...data];
      let note = [];
      let noOfNote = [];
      datas.map((d) => {
        note.push(+d.Note);
        noOfNote.push(+d.NumberOf);
      });
      console.log(note);
      console.log(noOfNote);
      let chang = changes;
      let finalnote = [];
      for (let i = note.length - 1; i >= 0; i--) {
        if (note[i] > 0) {
          if (chang / note[i] > noOfNote[i]) {
            const n = note[i] * noOfNote[i];
            finalnote.push(`${note[i]} notes is ${noOfNote[i]}`);
            noOfNote[i] -= noOfNote[i];
            chang -= n;
          } else if (+chang / note[i] <= +noOfNote[i]) {
            console.log();
            finalnote.push(
              `${note[i]} notes is ${Math.floor(chang / note[i])}`
            );
            noOfNote[i] = (noOfNote[i] - Math.floor(chang / note[i])).toFixed(
              2
            );
            chang = (+chang % note[i]).toFixed(2);
          }
        } else if (note[i] < 0) {
          if (chang / note[i] > noOfNote[i]) {
            const n = (note[i] * noOfNote[i]).toFixed(2);
            finalnote.push(`${note[i]} notes is ${noOfNote[i]}`);
            noOfNote[i] -= noOfNote[i];
            chang -= n;
          } else if ((+chang / note[i]).toFixed(2) <= +noOfNote[i]) {
            console.log();
            finalnote.push(
              `${note[i]} notes is ${(chang / note[i]).toFixed(2)}`
            );
            noOfNote[i] = (noOfNote[i] - chang / note[i]).toFixed(2);
            chang = (+chang % note[i]).toFixed(2);
          }
        }
      }
      if (+chang > 0) {
        alert('fund is not available');
        console.log(chang);

        // console.log(`chang ${chang}, noOfNote ${noOfNote} `);
      } else {
        console.log(`chang ${chang}, noOfNote ${noOfNote} `);
        let i = 0;
        let TotalData = 0;
        datas.map((d) => {
          d.NumberOf = noOfNote[i];
          d.Total = (d.Note * d.NumberOf).toFixed(2);
          TotalData += +d.Total;
          i++;
        });
        // TotalData.toFixed();
        console.log(datas);
        setData(datas);
        setChange(finalnote);
        setTotal(TotalData.toFixed(2));
        setTotalBill('');
        setTotalGiven('');
        setChangeShow(false);
        setIsFinalShow(true);
        console.log(finalnote);
      }
    }
  };
  const clearHandle = () => {
    setChangeShow(false);
    setIsFinalShow(false);
    setIsClick(false);
  };
  useEffect(() => {}, [data]);
  return (
    <div align="center" style={{ marginTop: '20px' }}>
      <button className="button button2" onClick={listHandle}>
        Add Field
      </button>

      <button className="button button2" onClick={saveHandle}>
        Save Data
      </button>

      <div align="center">
        <table>
          <thead>
            <tr style={{ fontSize: '18px' }}>
              <th>Note Name</th>
              <th>Note</th>
              <th>Total Amount</th>
              {data.length > 1 && <th>Delete</th>}
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={d.id}>
                <td>
                  <input
                    type="text"
                    name="NoteName"
                    style={{ padding: '10px 20px', fontSize: '15px' }}
                    value={d.NoteName}
                    onChange={(e) => handleChange(e, i)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="Note"
                    style={{ padding: '10px 20px', fontSize: '15px' }}
                    value={d.Note}
                    onChange={(e) => handleChange(e, i)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="Total"
                    style={{ padding: '10px 20px', fontSize: '15px' }}
                    value={d.Total}
                    onChange={(e) => handleChange(e, i)}
                  />
                </td>
                {data.length > 1 && (
                  <td>
                    <button
                      style={{
                        padding: '10px 20px',
                        fontSize: '20px',
                        backgroundColor: '#f44336',
                        color: 'white',
                        fontStyle: 'oblique',
                        borderRadius: '5px',
                        border: 'none',
                      }}
                      onClick={() => deleteHandle(i)}
                    >
                      X
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isClick && (
        <>
          <h3>Total : {Total}</h3>
          <table style={{ width: '20%' }}>
            <thead>
              <tr>
                <th>Note</th>
                <th></th>
                <th>No. of Notes</th>
                <th></th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d) => (
                <tr align="center">
                  <td style={{ width: '20%' }}>{d.Note}</td>
                  <td>X</td>
                  <td style={{ width: '20%' }}>{d.NumberOf}</td>
                  <td>=</td>
                  <td style={{ width: '20%' }}>{d.Total}</td>
                  {console.log(d)}
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: '50px' }}>
            <button className="button button2" onClick={GoForChange}>
              Go For Change
            </button>
            {isChangeShow && (
              <table style={{ width: '40%' }}>
                <tbody>
                  <tr>
                    <td>
                      <label>Total Bill</label>
                    </td>
                    <td>
                      <input
                        type="number"
                        style={{ padding: '10px 20px', fontSize: '15px' }}
                        value={TotalBill}
                        onChange={(e) => setTotalBill(+e.target.value)}
                      />
                    </td>
                    <td>
                      <label>Total Given</label>
                    </td>
                    <td>
                      <input
                        type="number"
                        style={{ padding: '10px 20px', fontSize: '15px' }}
                        value={TotalGiven}
                        onChange={(e) => setTotalGiven(+e.target.value)}
                      />
                    </td>
                    <td>
                      <button
                        className="buttons button1"
                        onClick={submitHandle}
                      >
                        Submit
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </>
      )}
      {isfinalShow && Change.map((d) => <p>{d}</p>)}
      <button className="button button2" onClick={clearHandle}>
        Clear
      </button>
    </div>
  );
};

export default AddField;

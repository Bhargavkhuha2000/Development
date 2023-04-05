import React, { useState } from 'react';
import './button.css';

const AddField = () => {
  const [data, setData] = useState([
    {
      id: '',
      NoteName: '',
      Note: '',
      NumberOf: '',
      Total: '',
    },
  ]);
  const [Total, setTotal] = useState(0);
  const [isClick, setIsClick] = useState(false);
  const [isChangeShow, setChangeShow] = useState(false);
  const [TotalBill, setTotalBill] = useState('');
  const [TotalGiven, setTotalGiven] = useState('');
  const [Change, setChange] = useState('');
  const listHandle = (e) => {
    e.preventDefault();
    console.log('click');
    console.log(data);
    setData([
      ...data,
      { id: '', NoteName: '', Note: '', NumberOf: '', Total: '' },
    ]);
  };
  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onChangeVal = [...data];
    onChangeVal[i][name] = value;
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
    let i = 0;
    datas.map((d) => {
      d.Total = d.Note * d.NumberOf;
      d.id = i;
      i++;
    });
    console.log(datas);
    setData(datas);
    let TotalData = 0;
    datas.map((a) => {
      return (TotalData += a.Total);
    });
    console.log(TotalData);
    setTotal(TotalData);
    setIsClick(true);
  };
  const GoForChange = () => {
    setChangeShow(true);
  };
  const submitHandle = () => {
    if (TotalBill === '') {
      alert('Please enter Total Bill Amount');
    } else if (TotalGiven === '') {
      alert('Please Enter Given Amount');
    } else if (TotalBill > TotalGiven) {
      console.log('Total Given', TotalGiven);
      console.log('Total Bill', TotalBill);
      alert('Your bill is greater than given money');
    } else {
      const changes = TotalGiven - TotalBill;
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
      for (let i = 0; i < note.length; i++) {
        console.log(`${note[i]} notes is ${chang / note[i]}`);
        chang = chang % note[i];
      }
    }
    // setChange()
  };
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
          <tr style={{ fontSize: '18px' }}>
            <th>Note Name</th>
            <th>Note</th>
            <th>No. Of Note</th>
            {data.length > 1 && <th>Delete</th>}
          </tr>
          {data.map((d, i) => (
            <tr>
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
                  style={{
                    padding: '10px 20px',
                    fontSize: '15px',
                  }}
                  name="Note"
                  value={d.Note}
                  onChange={(e) => handleChange(e, i)}
                />
              </td>
              <td>
                <input
                  type="number"
                  style={{ padding: '10px 20px', fontSize: '15px' }}
                  value={d.NumberOf}
                  name="NumberOf"
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
        </table>
      </div>
      {isClick && (
        <>
          <h3>Total : {Total}</h3>
          <table style={{ width: '20%' }}>
            <tr>
              <th>Note</th>
              <th></th>
              <th>No. of Notes</th>
              <th></th>
              <th>Total</th>
            </tr>
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
          </table>
          <div style={{ marginTop: '50px' }}>
            <button className="button button2" onClick={GoForChange}>
              Go For Change
            </button>
            {isChangeShow && (
              <table style={{ width: '40%' }}>
                <tr>
                  <td>
                    <label>Total Bill</label>
                  </td>
                  <td>
                    <input
                      type="number"
                      style={{ padding: '10px 20px', fontSize: '15px' }}
                      value={TotalBill}
                      onChange={(e) => setTotalBill(e.target.value)}
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
                      onChange={(e) => setTotalGiven(e.target.value)}
                    />
                  </td>
                  <td>
                    <button className="buttons button1" onClick={submitHandle}>
                      Submit
                    </button>
                  </td>
                </tr>
              </table>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AddField;

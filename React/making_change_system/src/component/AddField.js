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
      console.log(+Total, TotalBill, TotalGiven);
      const changes = (+TotalGiven - +TotalBill).toFixed(2);
      console.log(changes);
      if (+Total < changes) {
        alert('Fund is not available');
      } else {
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
            if (chang / note[i] >= noOfNote[i]) {
              const n = note[i] * noOfNote[i];
              finalnote.push({ Note: note[i], manyNote: +noOfNote[i] });
              noOfNote[i] -= +noOfNote[i];
              chang -= +n;
            } else if (+chang / note[i] < +noOfNote[i]) {
              console.log();
              finalnote.push({
                Note: note[i],
                manyNote: +Math.floor(+chang / note[i]),
              });
              noOfNote[i] = +(
                noOfNote[i] - Math.floor(+chang / note[i])
              ).toFixed(2);
              chang = (+chang % note[i]).toFixed(2);
            }
          } else if (note[i] < 0) {
            if (chang / note[i] >= noOfNote[i]) {
              const n = (+note[i] * noOfNote[i]).toFixed(2);
              finalnote.push({ Note: note[i], manyNote: +noOfNote[i] });
              noOfNote[i] -= +noOfNote[i];
              chang -= +n;
            } else if ((+chang / note[i]).toFixed(2) < +noOfNote[i]) {
              console.log();
              finalnote.push({
                Note: note[i],
                manyNote: +(+chang / note[i]).toFixed(2),
              });
              noOfNote[i] = +(noOfNote[i] - chang / note[i]).toFixed(2);
              chang = (+chang % note[i]).toFixed(2);
            }
          }
        }
        console.log(noOfNote);
        console.log(finalnote);
        if (+chang > 0) {
          console.log(note[0]);
          console.log(chang);
          for (let i = 0; i < note.length; i++) {
            let temp = 0;
            let isFound = false;
            finalnote.find((d) => {
              if (d.Note === note[i]) {
                if (d.manyNote > 0) {
                  chang += note[i];
                  temp = chang;
                  noOfNote[i] += 1;
                  d.manyNote -= 1;
                } else if (d.manyNote == 0) {
                  isFound = true;
                }
              }
            });
            if (isFound === true && i === note.length - 1) {
              alert('Exchange not available');
            }
            if (isFound === true) {
              continue;
            }
            for (let k = i - 1; k >= 0; k--) {
              finalnote.filter((d) => {
                if (d.Note === note[k]) {
                  if (d.manyNote > 0) {
                    console.log(chang);
                    if (d.Note > 0) {
                      if (k === i - 1) {
                        console.log('k=i ', k);
                        chang += +d.Note * +d.manyNote;
                        temp = +chang;
                        noOfNote[k] += +d.manyNote;
                        d.manyNote = 0;
                      }
                      console.log(k);
                      if (k !== i - 1) {
                        noOfNote[k] = +d.manyNote;
                        d.manyNote = 0;
                      }
                    } else if (d.Note < 0) {
                      if (k === i - 1) {
                        chang += (+d.Note * +d.manyNote).toFixed(2);
                        temp = chang;
                        noOfNote[k] += +d.manyNote;
                        d.manyNote = 0;
                      }
                      if (k !== i - 1) {
                        noOfNote[k] = +d.manyNote;
                        d.manyNote = 0;
                      }
                    }
                  }
                }
              });
            }
            let isComplete = false;
            let index;
            for (let j = i - 1; j >= 0; j--) {
              const findindex = finalnote.findIndex((d) => d.Note === note[j]);
              let { Note, manyNote } = finalnote[findindex];
              if (Note > 0) {
                if (temp / Note >= noOfNote[j]) {
                  manyNote += +noOfNote[j];
                  noOfNote[j] = 0;
                  temp -= Math.floor(manyNote * Note);
                  finalnote[findindex] = { Note: Note, manyNote: manyNote };
                  if (temp === 0) {
                    index = findindex;
                    isComplete = true;
                    break;
                  }
                } else if (temp / Note < noOfNote[j]) {
                  manyNote += Math.floor(temp / Note);
                  noOfNote[j] = Math.floor(+noOfNote[j] - +manyNote);
                  temp = Math.floor(+temp % Note);
                  finalnote[findindex] = { Note: Note, manyNote: manyNote };
                  if (temp === 0) {
                    index = findindex;
                    isComplete = true;
                    break;
                  }
                }
              } else if (Note < 0) {
                if (temp / Note >= noOfNote[j]) {
                  manyNote += noOfNote[j];
                  noOfNote[j] = 0;
                  temp -= (manyNote * Note).toFixed(2);
                  finalnote[findindex] = { Note: Note, manyNote: manyNote };
                  if (temp === 0) {
                    index = findindex;
                    isComplete = true;
                    break;
                  }
                } else if (temp / Note < noOfNote[j]) {
                  manyNote += (temp / Note).toFixed(2);
                  noOfNote[j] -= +manyNote;
                  temp = (+temp % Note).toFixed(2);
                  finalnote[findindex] = { Note: Note, manyNote: manyNote };
                  if (temp === 0) {
                    index = findindex;
                    isComplete = true;
                    break;
                  }
                }
              }
            }
            console.log('length : ', note.length);
            console.log('i : ', i);
            if (isComplete === false && i === note.length - 1) {
              alert('Exchange is not available');
            }
            if (isComplete === true) {
              console.log('final index after completion ', index);
              console.log(finalnote.length);
              for (let a = index + 1; a < finalnote.length; a++) {
                console.log(a);
                finalnote[a].manyNote = 0;
              }
              if (index === finalnote.length - 1) {
              }
              let i = 0;
              let TotalData = 0;
              datas.map((d) => {
                d.NumberOf = noOfNote[i];
                d.Total = (d.Note * d.NumberOf).toFixed(2);
                TotalData += +d.Total;
                i++;
              });
              setData(datas);
              setChange(finalnote);
              setTotal(TotalData.toFixed(2));
              setTotalBill('');
              setTotalGiven('');
              setChangeShow(false);
              setIsFinalShow(true);
              break;
            }
          }
        } else if (+chang === 0) {
          console.log(`chang ${chang}, noOfNote ${noOfNote} `);
          let i = 0;
          let TotalData = 0;
          datas.map((d) => {
            d.NumberOf = noOfNote[i];
            d.Total = (d.Note * d.NumberOf).toFixed(2);
            TotalData += +d.Total;
            i++;
          });

          console.log(datas);
          setData(datas);
          setChange(finalnote);
          setTotal(TotalData.toFixed(2));
          setTotalBill('');
          setTotalGiven('');
          setChangeShow(false);
          setIsFinalShow(true);
          console.log(finalnote);
        } else {
          alert('Fund not available');
        }
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
      {isfinalShow && (
        <table>
          {Change.map((d) => (
            <tr>
              <td>{d.Note}</td>
              <td>X</td>
              <td>{d.manyNote}</td>
              <td>=</td>
              <td>{d.Note * d.manyNote}</td>
            </tr>
          ))}
        </table>
      )}
      <button className="button button2" onClick={clearHandle}>
        Clear
      </button>
    </div>
  );
};

export default AddField;

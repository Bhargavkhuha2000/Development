import React from 'react';
import { useNavigate } from 'react-router-dom';

const Exchange = (props) => {
  const {
    data,
    setData,
    setTotal,
    total,
    setChange,
    totalBill,
    setTotalBill,
    totalGiven,
    setTotalGiven,
    setBill,
    setGiven,
  } = props;

  const nav = useNavigate();

  const submitHandle = () => {
    if (+totalBill === '') {
      alert('Please enter Total Bill Amount');
    } else if (+totalGiven === '') {
      alert('Please Enter Given Amount');
    } else if (+totalBill > +totalGiven) {
      alert('Your bill is greater than given money');
    } else {
      const changes = (+totalGiven - +totalBill).toFixed(2);

      if (+total < changes) {
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
              finalnote.push({
                Note: note[i],
                manyNote: +(+chang / note[i]).toFixed(2),
              });
              noOfNote[i] = +(noOfNote[i] - chang / note[i]).toFixed(2);
              chang = (+chang % note[i]).toFixed(2);
            }
          }
          console.log(finalnote);
        }
        if (+chang > 0) {
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
                } else if (d.manyNote === 0) {
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
                    if (d.Note > 0) {
                      if (k === i - 1) {
                        chang += +d.Note * +d.manyNote;
                        temp = +chang;
                        noOfNote[k] += +d.manyNote;
                        d.manyNote = 0;
                      }
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
            if (
              isComplete === false &&
              i === note.length - 1 &&
              note.length > 2
            ) {
              alert('Exchange is not available187');
            } else if (
              isComplete === false &&
              i === note.length - 1 &&
              note.length < 3
            ) {
              temp = +chang;

              finalnote.find((d) => {
                if (d.Note === note[1]) {
                  chang = (+chang + +d.Note).toFixed(2);
                  temp = +chang;
                  if (+temp / note[0] < noOfNote[0]) {
                    finalnote[1] = {
                      Note: note[0],
                      manyNote: Math.floor(+temp / note[0]),
                    };
                    noOfNote[0] -= finalnote[1].manyNote;
                    temp = +temp - (note[0] * finalnote[1].manyNote).toFixed(2);
                  } else if (temp / note[0] >= noOfNote[0]) {
                    finalnote[1].manyNote += noOfNote[0];
                    temp -= (note[0] * finalnote[1].manyNote).toFixed(2);
                  }
                }
              });
              if (temp === 0) {
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
                setBill(totalBill);
                setGiven(totalGiven);
                setTotalBill('');
                setTotalGiven('');
                nav('/ShowExchange');
              } else {
                alert('Exchange is not available');
              }
            }
            if (isComplete === true) {
              for (let a = index + 1; a < finalnote.length; a++) {
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
              setBill(totalBill);
              setGiven(totalGiven);
              setTotalBill('');
              setTotalGiven('');
              nav('/ShowExchange');

              break;
            }
          }
        } else if (+chang === 0) {
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
          setBill(totalBill);
          setGiven(totalGiven);
          setTotalBill('');
          setTotalGiven('');
          nav('/ShowExchange');
        } else {
          alert('Fund not available');
        }
      }
    }
  };
  return (
    <div align="center" style={{ marginTop: '16px' }}>
      <h2>Exchange</h2>
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
                value={totalBill}
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
                value={totalGiven}
                onChange={(e) => setTotalGiven(+e.target.value)}
              />
            </td>
            <td>
              <button className="buttons button1" onClick={submitHandle}>
                Submit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Exchange;

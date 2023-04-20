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

  const setNotes = (datas, exchangeNote, totalFinal, totalBill, totalGiven) => {
    setData(datas);
    setChange(exchangeNote);
    setTotal(totalFinal.toFixed(2));
    setBill(totalBill);
    setGiven(totalGiven);
    setTotalBill('');
    setTotalGiven('');
    nav('/ShowExchange');
  };
  const getCombinationsWithNumberOfNote = (
    note,
    numberOfNote,
    totalReturnAmount
  ) => {
    let minNote = Array(totalReturnAmount + 1).fill(Infinity);
    let combinations = Array(totalReturnAmount + 1).fill(null);

    minNote[0] = 0;
    for (let i = 0; i < note.length; i++) {
      let noteValue = note[i];
      let noOfNote = numberOfNote[i];

      for (let j = totalReturnAmount; j >= noteValue; j--) {
        for (let k = 1; k <= noOfNote && j >= k * noteValue; k++) {
          if (minNote[j - k * noteValue] + k < minNote[j]) {
            minNote[j] = minNote[j - k * noteValue] + k;
            combinations[j] = [i, k];
          }
        }
      }
    }

    let result = [];

    if (minNote[totalReturnAmount] !== Infinity) {
      let currentAmount = totalReturnAmount;
      let noOfNoteUsed = Array(note.length).fill(0);

      while (currentAmount > 0) {
        let [noteIndex, noteCount] = combinations[currentAmount];
        let noteValue = note[noteIndex];
        for (let i = 0; i < noteCount; i++) {
          noOfNoteUsed[noteIndex]++;
        }
        currentAmount -= noteValue * noteCount;
      }

      for (let i = 0; i < note.length; i++) {
        result.push({ note: note[i], noOfNote: noOfNoteUsed[i] });
        // console.log(`${note[i]}: ${noOfNoteUsed[i]}`);
      }
      return result;
    } else {
      alert('Exchange is not available');
    }
  };
  const submitHandle = () => {
    if (totalBill === '' || totalBill === 0) {
      alert('Please Enter Total Bill Amount');
    } else if (totalGiven === '' || totalGiven === 0) {
      alert('Please Enter Total Given Amount');
    } else if (totalBill > totalGiven) {
      alert('Total Bill is Not Greater Than Total Given');
    } else if (totalGiven - totalBill > total) {
      alert('Fund Not Available');
    } else {
      let totalReturnAmount = +(totalGiven - totalBill).toFixed(2);
      let datas = data;
      const note = [];
      let numberOfNote = [];
      for (let index = datas.length - 1; index >= 0; index--) {
        note.push(datas[index].note);
        numberOfNote.push(datas[index].numberOfNote);
      }

      let result = getCombinationsWithNumberOfNote(
        note,
        numberOfNote,
        totalReturnAmount
      );

      if (result !== undefined) {
        let totalFinal = 0;
        datas.map((d) => {
          result.find((r) => {
            if (r.note === d.note) {
              d.numberOfNote -= r.noOfNote;
            }
          });
          d.total = (d.numberOfNote * d.note).toFixed(2);
          totalFinal += +d.total;
        });
        setNotes(datas, result, totalFinal, totalBill, totalGiven);
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

import React from 'react';
import './button.css';
import './inputField.css';
import { useNavigate } from 'react-router-dom';

const Add = (props) => {
  const { data, setData, setTotal, total } = props;
  const nav = useNavigate();
  const handleChange = (e, i) => {
    const { name, value } = e.target;

    const onChangeVal = [...data];
    if (name === 'total' || name === 'note') {
      onChangeVal[i][name] = +value;
    } else if (name === 'noteName') {
      onChangeVal[i][name] = value;
    }
    console.log(onChangeVal);

    setData(onChangeVal);
  };
  const deleteHandle = (i) => {
    const datas = [...data];
    datas.splice(i, 1);
    setData([...datas]);
  };
  const listHandle = (e) => {
    e.preventDefault();
    setData([
      ...data,
      { id: data.length, noteName: '', note: '', numberOfNote: '', total: '' },
    ]);
  };
  let isFound = false;
  const saveDataCheck = (datas) => {
    for (const element of datas) {
      // console.log((element.total % element.note).toFixed(2));
      const floorValue = Math.floor(element.note);
      // console.log(Math.floor(element.note), element.note);
      if (floorValue === +element.Note) {
        console.log(floorValue > element.Note);
        if ((element.total % element.note).toFixed(2) === 0) {
          element.total = +element.total;
          element.note = +element.note;
          element.numberOfNote = element.total / element.note;
        } else if (
          element.noteName === '' ||
          element.note === '' ||
          element.total === ''
        ) {
          alert(`Empty field is not allow`);
          isFound = true;
          break;
        } else if ((element.total % element.note).toFixed(2) !== 0) {
          element.total = 0;
          element.numberOfNote = 0;
          alert(`${element.note} notes Total is wrong`);
          isFound = true;
          break;
        }
      } else if (floorValue < element.note) {
        const note = element.note * 100;
        const total = Math.ceil(element.total * 100);
        console.log('total : ', total);
        console.log(note, total);
        if (
          element.noteName === '' ||
          element.note === '' ||
          element.total === ''
        ) {
          alert(`Empty field is not allow`);
          isFound = true;
          break;
        } else if (total % note !== 0) {
          element.total = 0;
          element.numberOfNote = 0;
          alert(`${element.note} notes Total is wrong`);
          console.log(total / note);
          isFound = true;
        } else if (total % note === 0) {
          element.total = +element.total;
          element.note = +element.note;
          element.numberOfNote = total / note;
        }
      }
    }
  };
  const sortSaveData = (datas) => {
    datas.sort((a, b) => {
      return a.note - b.note;
    });
  };

  const saveHandle = () => {
    const datas = [...data];

    saveDataCheck(datas);
    if (isFound === false) {
      sortSaveData(datas);
      setData(datas);
      let totalFinal = 0;
      datas.map((a) => {
        return (totalFinal += a.total);
      });

      setTotal(totalFinal.toFixed(2));
      nav('/Show');
    }
  };
  return (
    <div>
      <div align="center">
        <h2>Add Note</h2>
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
                    name="noteName"
                    className="input"
                    value={d.noteName}
                    onChange={(e) => handleChange(e, i)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="note"
                    className="input"
                    value={d.note}
                    onChange={(e) => handleChange(e, i)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="total"
                    className="input"
                    value={d.total}
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
      <div align="center" style={{ marginTop: '16px' }}>
        <p>Total : {total}</p>
        <button
          className="btn btn-outline-success"
          style={{ marginRight: '16px' }}
          onClick={listHandle}
        >
          Add Field
        </button>
        <button className="btn btn-outline-success" onClick={saveHandle}>
          Save Data
        </button>
      </div>
    </div>
  );
};

export default Add;

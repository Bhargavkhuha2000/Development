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
  };
  const listHandle = (e) => {
    e.preventDefault();
    setData([
      ...data,
      { id: data.length, NoteName: '', Note: '', NumberOf: '', Total: '' },
    ]);
  };
  let isFound = false;
  const saveDataCheck = (datas) => {
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
        alert(`${element.Note} notes Total is wrong`);
        isFound = true;
        break;
      }
    }
  };
  const sortSaveData = (datas) => {
    datas.sort((a, b) => {
      return a.Note - b.Note;
    });
  };

  const saveHandle = () => {
    const datas = [...data];

    saveDataCheck(datas);
    if (isFound === false) {
      sortSaveData(datas);
      setData(datas);
      let totalData = 0;
      datas.map((a) => {
        return (totalData += a.Total);
      });

      setTotal(totalData);
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
                    name="NoteName"
                    className="input"
                    value={d.NoteName}
                    onChange={(e) => handleChange(e, i)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="Note"
                    className="input"
                    value={d.Note}
                    onChange={(e) => handleChange(e, i)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="Total"
                    className="input"
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

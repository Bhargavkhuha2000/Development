import logo from './logo.svg';
import './App.css';

function App() {
  const [userVal, setUserVal] = useState('');
  const [ageVal, setAgeVal] = useState('');

  const userHandler = (event) => {
    setUserVal(event.target.value);
  };

  const ageHandle = (event) => {
    setAgeVal(event.target.value);
  };
  let i = 0;
  const submitHandle = (event) => {
    event.preventDefault();
    if (userVal.trim().length === 0 || ageVal.trim().length === 0) {
      return alert('Enter Something');
    } else if (+ageVal < 0) {
      return alert('pls enter valid age');
    }
    i++;
    props.onAddUser(i, userVal, ageVal);
    setAgeVal('');
    setUserVal('');
  };
  const [userList, setUserList] = useState([]);
  let s = [];
  const listHandler = (eName, eAge) => {
    setUserList((previeseData) => {
      console.log(previeseData.length + 1);
      const store = [{ id: +previeseData.length + 1, name: eName, age: eAge }];
      s.push(store);
      userList.push(store);
      // console.log([...s]);
      console.log([...userList]);
      return [...userList];
    });
  };
  return <div className="App"></div>;
}

export default App;

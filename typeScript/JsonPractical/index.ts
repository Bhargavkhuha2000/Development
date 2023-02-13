import axios from 'axios';

async function main() {
  const data1Object = await axios.get('http://localhost:3000/Data1');
  const data1: Array<{ id: number; name: string }> = data1Object.data;
  const data2Object = await axios.get('http://localhost:4000/Data2');
  const data2: Array<{ id: number; name: string }> = data2Object.data;
  console.log(data1);
  console.log(data2);
  for (let i = 0; i < data1.length; i++) {
    let isFound = false;
    for (let j = 0; j < data2.length; j++) {
      if (data1[i].id === data2[j].id) {
        isFound = true;
        break;
      }
    }
    if (isFound === false) {
      console.log(data1[i]);
    }
  }
}

main();

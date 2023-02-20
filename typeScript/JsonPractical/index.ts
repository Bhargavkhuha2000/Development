//First way to compare two json file
// import axios from 'axios';

// async function main() {
//   const data1Object = await axios.get('http://localhost:3000/Data1');
//   const data1: Array<{ id: number; name: string }> = data1Object.data;
//   const data2Object = await axios.get('http://localhost:4000/Data2');
//   const data2: Array<{ id: number; name: string }> = data2Object.data;
//   console.log(data1);
//   console.log(data2);
//   for (let i = 0; i < data1.length; i++) {
//     let isFound = false;
//     for (let j = 0; j < data2.length; j++) {
//       if (data1[i].id === data2[j].id) {
//         isFound = true;
//         break;
//       }
//     }
//     if (isFound === false) {
//       console.log(data1[i]);
//     }
//   }
// }

// main();
//second way to compare two json file
import fs from 'fs';
// let fs = require('fs');

const data1 = JSON.parse(
  fs.readFileSync('./file1.json', { encoding: 'utf-8' })
);
const Data1Collection:Array<{id:number,name:string}> = data1.Data1;

const data2 = JSON.parse(
  fs.readFileSync('./file2.json', { encoding: 'utf-8' })
);
const Data2Collection:Array<{id:number,name:string}> = data2.Data2;

for (let i = 0; i < Data1Collection.length; i++) {
  let isFound:boolean = false;
  for (let j = 0; j < Data2Collection.length; j++) {
    if (Data1Collection[i].id === Data2Collection[j].id) {
      isFound = true;
      break;
    }
  }
  if (isFound === false) {
    console.log(Data1Collection[i]);
  }
}




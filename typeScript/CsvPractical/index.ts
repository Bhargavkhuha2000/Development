import fs from 'fs';

const name = 'bhargav';
//file 1 data fetch
const data1: string[][] = fs
  .readFileSync('file1.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

//file 2 data fetch
const data2: string[][] = fs
  .readFileSync('file2.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

//compare 2 data file2
for (let i = 1; i < data1.length; i++) {
  let isFound: boolean = false;
  for (let j = 1; j < data2.length; j++) {
    if (data1[i][0] === data2[j][0]) {
      isFound = true;
      break;
    }
  }
  if (isFound == false) {
    console.log(data1[i]);
  }
}
//npm start is use for run this code

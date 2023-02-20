"use strict";
//First way to compare two json file
// import axios from 'axios';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const fs_1 = __importDefault(require("fs"));
// let fs = require('fs');
// const data1 = JSON.parse(
//   fs.readFileSync('./file1.json', { encoding: 'utf-8' })
// );
// const Data1Collection:Array<{id:number,name:string}> = data1.Data1;
// const data2 = JSON.parse(
//   fs.readFileSync('./file2.json', { encoding: 'utf-8' })
// );
// const Data2Collection:Array<{id:number,name:string}> = data2.Data2;
// for (let i = 0; i < Data1Collection.length; i++) {
//   let isFound:boolean = false;
//   for (let j = 0; j < Data2Collection.length; j++) {
//     if (Data1Collection[i].id === Data2Collection[j].id) {
//       isFound = true;
//       break;
//     }
//   }
//   if (isFound === false) {
//     console.log(Data1Collection[i]);
//   }
// }
//third way to compare two json file
const reader1 = fs_1.default.createReadStream('./file1.json', {
    encoding: 'utf-8',
});
reader1.on('data', function (chunk) {
    const data1 = JSON.parse(chunk.toString());
    const d1 = data1.Data1;
    const reader2 = fs_1.default.createReadStream('./file2.json', {
        encoding: 'utf-8',
    });
    reader2.on('data', function (chunk) {
        const data2 = JSON.parse(chunk.toString());
        const d2 = data2.Data2;
        // console.log(d1, d2);
        for (let i = 0; i < d1.length; i++) {
            let isFound = false;
            for (let j = 0; j < d2.length; j++) {
                if (d1[i].id === d2[j].id) {
                    isFound = true;
                    break;
                }
            }
            if (isFound === false) {
                console.log(d1[i]);
            }
        }
    });
});

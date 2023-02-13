"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
//file 1 data fetch
const data1 = fs_1.default
    .readFileSync('data1.csv', {
    encoding: 'utf-8',
})
    .split('\n')
    .map((row) => {
    return row.split(',');
});
//file 2 data fetch
const data2 = fs_1.default
    .readFileSync('data2.csv', {
    encoding: 'utf-8',
})
    .split('\n')
    .map((row) => {
    return row.split(',');
});
//compare 2 data file2
for (let i = 1; i < data1.length; i++) {
    let isFound = false;
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

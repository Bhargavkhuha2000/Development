// wirte a sample code to check max number from [10,20,33,55]

// Start here
const test = (arr: number[]): number => {
  let temp = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (temp < arr[i]) {
      temp = arr[i];
    }
  }
  return temp;
};
const store = test([10, 20, 33, 55]);
console.log(store);

//merge two array without using any Math methods

// const test = (arr1: number[], arr2: number[]): number[] => {
//   const merge = [...arr1, ...arr2];
//   //   console.log(merge);
//   return merge;
// };
// const store = test([1, 2, 3], [4, 5, 6]);
// console.log(store);

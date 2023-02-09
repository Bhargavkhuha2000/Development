// class Anything<T> {
//   constructor(public collection: T[]) {}
//   get(index: number): T {
//     return this.collection[index];
//   }
// }

// const arr = new Anything<string>(['a', 'b', 'c']);
// console.log(arr);
//1.
function Print<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
Print<number>([1, 2, 3]);
// 2.
class Cars {
  print() {
    console.log('I am a Car');
  }
}
class House {
  print() {
    console.log('I am a House');
  }
}
interface printable {
  print(): void;
}

function prints<T extends printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

prints([new House(), new House()]);
prints([new Cars(), new Cars()]);

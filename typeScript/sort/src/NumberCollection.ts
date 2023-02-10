import { Sorter } from './Sorter';

export class NumberCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }
  get length(): number {
    return this.data.length;
  }
  compare(leftIndex: number, reightIndex: number): boolean {
    return this.data[leftIndex] > this.data[reightIndex];
  }
  Swap(leftIndex: number, rightIndex: number): void {
    const temp = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = temp;
  }
}

// const collection=new NumberCollection([1,2,3]);
// collection.length;

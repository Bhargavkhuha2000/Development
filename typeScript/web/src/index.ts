import { User } from './models/User';

const user = new User({ name: 'abc', age: 20 });

user.set({ name: 'bk', age: 23 });

console.log(user.get('name'));
console.log(user.get('age'));

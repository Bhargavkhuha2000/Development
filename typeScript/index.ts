import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((Response) => {
  const todo = Response.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(
    `the Todo with ID: ${id} has a tile of : ${title} is it finished? ${completed}`
  );
};

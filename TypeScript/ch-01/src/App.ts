interface ToDoItems {
  id: number;
  title: string;
  completedOn?: Date;
  status: Status;
}
enum Status {
  Todo = "todo",
  InProgress = "in-progress",
  Done = "done",
}
const todoItems: ToDoItems[] = [
  {
    id: 1,
    title: "Learn HTML",
    status: Status.Done,
    completedOn: new Date("2021-09-11"),
  },
  { id: 2, title: "Learn TypeScript", status: Status.InProgress },
  { id: 3, title: "Write the best app in the world", status: Status.Todo },
];

function addTodoItem(todo: string) {
  const id = getNextId(todoItems);
  console.log(`new id ${id}`);
  const newTodo: ToDoItems = {
    id: id,
    title: todo,
    status: Status.Todo,
  };

  todoItems.push(newTodo);

  return newTodo;
}

function getNextId(items: ToDoItems[]): number {
  return items.reduce((max, x) => (x.id > max ? max : x.id), 0) + 1;
}

function getNextIdGeneric<T extends { id: number }>(items: T[]): number {
  return items.reduce((max, x) => (x.id > max ? max : x.id), 0) + 1;
}

const newTodo = addTodoItem(
  "Buy lots of stuff with all the money we make from the app"
);

console.log(JSON.stringify(newTodo));

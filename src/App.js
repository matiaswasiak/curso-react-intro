import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de intro a React", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "LA LA LA LA LA", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter completed={16} total={25} />

      <TodoSearch />

      <TodoList>
        {defaultTodos.map(({ text, completed }) => (
          <TodoItem key={text} text={text} completed={completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;

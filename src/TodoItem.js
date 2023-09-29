import "./TodoItem.css";

function TodoItem({ text, completed, todos, setTodos }) {
  return (
    <li className="TodoItem">
      <span
        onClick={() =>
          setTodos(
            todos.map((todo) => {
              if (todo.text === text) {
                return { ...todo, completed: !todo.completed };
              }
              return todo;
            })
          )
        }
        className={`Icon Icon-check ${completed && "Icon Icon-check--active"}`}
      >
        V
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span
        onClick={() => setTodos(todos.filter((todo) => todo.text !== text))}
        className="Icon Icon-delete"
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };

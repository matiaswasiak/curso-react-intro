import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { totalTodos, completedTodos } = useContext(TodoContext);

  if (totalTodos === 0) {
    return <h2 className="TodoCounter">No hay TODOs 😴</h2>;
  }

  if (completedTodos === totalTodos) {
    return <h2 className="TodoCounter">Completaste todos tus TODOs! 🥳</h2>;
  }

  return (
    <h2 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span>{" "}
      TODOs
    </h2>
  );
}

export { TodoCounter };
